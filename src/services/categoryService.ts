import { supabase } from "@/dataBase/supabase";
//type de las categorias
import type { CategoryInt } from "@/types/category";

//service para traer las categorias
export const getCategories = async (): Promise<CategoryInt[]> => {
  const { data, error } = await supabase
    .from("categories")
    .select("id, nameCat")
    .is("deleted_at", null);

  if (error) {
    console.log("Error fetching categories:", error);
    throw new Error("error al obtener las categorias: " + error);
  }

  return data as CategoryInt[];
};
