import React from "react";
//card de producto
import { ProductCard } from "./ProductCard";
import { type ProductInt } from "../../types/product";

interface Props {
  items: ProductInt[];
}

export const ProductList: React.FC<Props> = React.memo(({ items }) => {
  if (items.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500">
        No se encontraron productos con los filtros actuales.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
      {items.map((producto) => (
        <ProductCard key={producto.id} producto={producto} />
      ))}
    </div>
  );
});

ProductList.displayName = "ProductList";
