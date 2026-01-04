import { useQuery } from "@tanstack/react-query";
//servicio  para traer los productos
import { getProducts } from "@/services/productServices";
//type del los productos
import type { ProductoInt } from "@/types/product";
//type del filtro
import type { FilterOptions } from "@/types/filter";

//hook para traer los productos
export const useGetProducts = (dataFilter: FilterOptions) => {
  return useQuery<ProductoInt[], Error>({
    queryKey: ["products", dataFilter],
    queryFn: () => getProducts(dataFilter),
  });
};
