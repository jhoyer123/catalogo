// src/context/ProductsContext.tsx
import React from "react";
import { type ProductoInt } from "../interfaces/Producto";
import { productsMock } from "../datosPrueba/productsMock";

interface ProductsContextValue {
  products: ProductoInt[];
  // opcional: funciones para manipular productos en desarrollo
  setProducts?: React.Dispatch<React.SetStateAction<ProductoInt[]>>;
}

export const ProductsContext = React.createContext<
  ProductsContextValue | undefined
>(undefined);

export const ProductsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Inicialmente usamos productos mock; en producción aquí harías fetch a la API.
  const [products, setProducts] = React.useState<ProductoInt[]>(productsMock);

  // memoizamos el objeto value para que su identidad no cambie salvo cuando products cambie
  const value = React.useMemo(() => ({ products, setProducts }), [products]);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
