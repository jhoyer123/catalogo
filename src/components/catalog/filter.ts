// src/utils/filter.ts
import { type ProductoInt } from "../../interfaces/Producto";

export interface FilterOptions {
  query?: string;
  categoria?: string | null;
  minPrice?: number | null;
  maxPrice?: number | null;
  ofertaOnly?: boolean;
  sort?: "price_asc" | "price_desc" | null;
}

export function applyFilters(
  items: ProductoInt[],
  opts: FilterOptions
): ProductoInt[] {
  // trabajamos sobre copia para no mutar la lista original
  let result = items.slice();

  if (opts.query && opts.query.trim() !== "") {
    const q = opts.query.trim().toLowerCase();
    result = result.filter((p) => {
      return (
        p.nombre.toLowerCase().includes(q) ||
        (p.descripcion && p.descripcion.toLowerCase().includes(q))
      );
    });
  }

  if (opts.categoria) {
    result = result.filter((p) => p.categoria === opts.categoria);
  }

  if (opts.minPrice != null) {
    result = result.filter(
      (p) => (p.nuevoPrecio ?? p.precio) >= opts.minPrice!
    );
  }

  if (opts.maxPrice != null) {
    result = result.filter(
      (p) => (p.nuevoPrecio ?? p.precio) <= opts.maxPrice!
    );
  }

  if (opts.ofertaOnly) {
    result = result.filter((p) => Boolean(p.oferta));
  }

  // Para ordenar sin mutar la copia ya hecha
  if (opts.sort === "price_asc") {
    result = result
      .slice()
      .sort(
        (a, b) => (a.nuevoPrecio ?? a.precio) - (b.nuevoPrecio ?? b.precio)
      );
  } else if (opts.sort === "price_desc") {
    result = result
      .slice()
      .sort(
        (a, b) => (b.nuevoPrecio ?? b.precio) - (a.nuevoPrecio ?? a.precio)
      );
  }

  return result;
}
