import { supabase } from "../dataBase/supabase";
//type del los productos
import type { ProductoInt } from "@/types/product";
//type del filtro
import type { FilterOptions } from "@/types/filter";

//service para traer los productos
export const getProducts = async (
  dataFilter: FilterOptions
): Promise<{ products: ProductoInt[]; count: number }> => {

  //limite de productos
  const limit = 20;
  const from = (dataFilter.page - 1) * limit;
  const to = from + limit - 1;

  //definimos la query base
  let query = supabase
    .from("products")
    .select(`*,product_images(image_url),categories(nameCat)`, {
      count: "exact",
    })
    .is("deleted_at", null)
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
    console.error("Error fetching products:", error);
    throw new Error("error al obtener los productos: " + error);
  }

  return { products: data as ProductoInt[], count: count || 0 };
};
