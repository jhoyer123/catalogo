import { useQuery } from "@tanstack/react-query";
import type { ProductDetailInt } from "@/types/product";
import { getProductById } from "@/services/productServices";

//hoook para traer un producto por el id
export const useGetProductById = (idProd: string) => {
  return useQuery<ProductDetailInt, Error>({
    queryKey: ["ProductDetail", idProd],
    queryFn: () => getProductById(idProd),
  });
};
