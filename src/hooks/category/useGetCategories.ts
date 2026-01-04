import { useQuery } from "@tanstack/react-query";
//servicio  para traer las categorias
import { getCategories } from "@/services/categoryService";
//type de las categorias
import type { CategoryInt } from "@/types/category";

//hook para traer las categorias
export const useGetCategories = () => {
  return useQuery<CategoryInt[], Error>({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });
};
