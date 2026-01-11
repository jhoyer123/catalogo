import { supabase } from "../dataBase/supabase";
//type del los productos
import type { ProductInt, ProductDetailInt } from "@/types/product"; //para la vista de catalogo y la vista Detail
//type del filtro
import type { FilterOptions } from "@/types/filter";

//service para traer los productos
export const getProducts = async (
  dataFilter: FilterOptions
): Promise<{ products: ProductInt[]; count: number }> => {
  //limite de productos
  const limit = 20;
  const from = (dataFilter.page - 1) * limit;
  const to = from + limit - 1;

  let query = supabase
    .from("products")
    .select(
      `
      id,
      nameProd,
      price,
      brand,
      isOfferActive,
      priceOffer,
      product_images!inner(image_url),
      categories(nameCat)
    `,
      {
        count: "exact",
      }
    )
    .is("deleted_at", null)
    .limit(1, { foreignTable: "product_images" }) // 🎯 Aquí limitas a 1 imagen
    .range(from, to);

  //filtro de busqueda
  if (dataFilter.query) {
    const search = dataFilter.query.trim();
    query = query.or(
      `nameProd.ilike.%${search}%,description.ilike.%${search}%,brand.ilike.%${search}%`
    );
  }

  //filtro de categoria
  if (dataFilter.categoria) {
    query = query.eq("categoryId", dataFilter.categoria);
  }

  //filtro de ordenamiento
  if (dataFilter.sort) {
    switch (dataFilter.sort) {
      case "price_asc":
        query = query.order("price", { ascending: true });
        break;
      case "price_desc":
        query = query.order("price", { ascending: false });
        break;
      case "more_recent":
        query = query.order("created_at", { ascending: false });
        break;
      default:
        break;
    }
  }

  //filtro de solo ofertas
  if (dataFilter.offerOnly) {
    query = query.eq("isOfferActive", true);
  }

  const { data, count, error } = await query;

  if (error) {
    throw new Error("error al obtener los productos: " + error);
  }

  //error de casting de typescript y supadabe en categories viene un object pero ts solo ve un array
  return { products: data as any, count: count || 0 };
};

//get product by id
export const getProductById = async (
  idProd: string
): Promise<ProductDetailInt> => {
  const { data, error } = await supabase
    .from("products")
    .select(`*, categories(nameCat), product_images(image_url)`)
    .is("deleted_at", null)
    .eq("id", idProd);

  if (error) {
    throw new Error("Error al traer el producto");
  }
  //refinar la data
  const product: ProductDetailInt = data[0];
  return product;
};
