import React, { useEffect, useState } from "react";
import { type ProductInt } from "../types/product";
import { supabase } from "../dataBase/supabase";

interface ProductsContextValue {
  products: ProductInt[];
  // opcional: funciones para manipular productos en desarrollo
  setProducts?: React.Dispatch<React.SetStateAction<ProductInt[]>>;
}

export const ProductsContext = React.createContext<
  ProductsContextValue | undefined
>(undefined);

export const ProductsProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [products, setProducts] = useState<ProductInt[]>([]);

  const loadProducts = async () => {
    const { data, error } = await supabase
      .from("productos")
      .select("*,categoria:categorias(nombrecategoria)");

    /* se han vuelto a traer los datos denuevo */

    /* mapear productos */
    const productsMapped: ProductInt[] = (data ?? []).map((p) => ({
      ...p,
      categoria: p.categoria.nombrecategoria, // reemplaza objeto por string
    }));
    console.log("🔄 Productos cargados desde Supabase:", data);

    if (error) {
      console.error(error);
      return;
    }

    setProducts(productsMapped ?? []);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const value = { products, setProducts };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
