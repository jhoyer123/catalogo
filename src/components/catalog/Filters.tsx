// src/components/Filters.tsx
import React from "react";
import { type ProductoInt } from "../../interfaces/Producto";

interface FiltersProps {
  allProducts: ProductoInt[]; // en tu proyecto real reemplazas con tu tipo ProductoInt
  query: string;
  setQuery: (v: string) => void;

  categoria: string | null;
  setCategoria: (v: string | null) => void;

  ofertaOnly: boolean;
  setOfertaOnly: (v: boolean) => void;

  sort: string | null;
  setSort: (v: string | null) => void;
}

export const Filters: React.FC<FiltersProps> = React.memo((props) => {
  const {
    allProducts,
    query,
    setQuery,
    categoria,
    setCategoria,
    ofertaOnly,
    setOfertaOnly,
    sort,
    setSort,
  } = props;

  //console.log("%cRender <Filters>", "color: purple");

  // Obtener categorías únicas
  const categories = React.useMemo(() => {
    const cats = Array.from(new Set(allProducts.map((p) => p.categoria)));
    return cats;
  }, [allProducts]);

  return (
    // 1. Contenedor principal: Fondo claro (100) y borde/sombra sutil (400)
    <div className="h-full p-6 bg-[#F5F5F5] border border-[#D4D4D4] sm:rounded-xl shadow-lg">
      {/* Título con estilo Serif para elegancia */}
      {/* Título: Texto oscuro (800) y separador gris (400) */}
      <h2 className="text-2xl font-serif text-[#262626] mb-6 border-b border-[#D4D4D4] pb-4 tracking-wide">
        Filtros
      </h2>

      <div className="space-y-6">
        {/* BUSCADOR */}
        <div className="group">
          {/* Etiqueta: Gris medio (500) */}
          <label className="block mb-2 text-xs font-bold tracking-[0.2em] text-[#737373] uppercase">
            Buscar
          </label>
          <div className="relative">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar producto..."
              // Input: Fondo muy claro (Base/50), Texto oscuro (800), Placeholder gris (400)
              // Focus: Borde y ring con color de acento (Gris 700)
              className="w-full bg-[#FAFAFA] text-[#262626] placeholder-[#D4D4D4] border border-[#A3A3A3]/50 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:border-[#404040] focus:ring-1 focus:ring-[#404040] transition-all duration-300"
            />
            {/* Icono de Lupa decorativo */}
            {/* Icono: Gris medio (500) | Focus: Gris oscuro (700) */}
            <svg
              className="absolute left-3 top-3.5 w-4 h-4 text-[#737373] group-focus-within:text-[#404040] transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* CATEGORÍA */}
        <div>
          {/* Etiqueta: Gris medio (500) */}
          <label className="block mb-2 text-xs font-bold tracking-[0.2em] text-[#737373] uppercase">
            Categoría
          </label>
          <div className="relative">
            <select
              value={categoria ?? ""}
              onChange={(e) =>
                setCategoria(e.target.value === "" ? null : e.target.value)
              }
              // Select: Fondo muy claro (Base/50), Texto oscuro (800)
              // Focus: Borde y ring con color de acento (Gris 700)
              className="w-full appearance-none bg-[#FAFAFA] text-[#262626] border border-[#A3A3A3]/50 rounded-lg py-3 px-4 focus:outline-none focus:border-[#404040] focus:ring-1 focus:ring-[#404040] transition-all duration-300 cursor-pointer"
            >
              {/* Opciones del Select: Fondo claro (100) y Texto gris medio/oscuro (700/800) */}
              <option value="" className="bg-[#F5F5F5] text-[#404040]">
                Todas las colecciones
              </option>
              {categories.map((cat) => (
                <option
                  key={cat}
                  value={cat}
                  className="bg-[#F5F5F5] text-[#262626]"
                >
                  {cat}
                </option>
              ))}
            </select>
            {/* Icono de flecha personalizado para el select: Gris oscuro (700) */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#404040]">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* ORDENAMIENTO */}
        <div>
          {/* Etiqueta: Gris medio (500) */}
          <label className="block mb-2 text-xs font-bold tracking-[0.2em] text-[#737373] uppercase">
            Ordenar por
          </label>
          <div className="relative">
            <select
              value={sort ?? ""}
              onChange={(e) =>
                setSort(e.target.value === "" ? null : e.target.value)
              }
              // Select: Fondo muy claro (Base/50), Texto oscuro (800)
              className="w-full appearance-none bg-[#FAFAFA] text-[#262626] border border-[#A3A3A3]/50 rounded-lg py-3 px-4 focus:outline-none focus:border-[#404040] focus:ring-1 focus:ring-[#404040] transition-all duration-300 cursor-pointer"
            >
              {/* Opciones del Select: Fondo claro (100) y Texto gris medio/oscuro (700/800) */}
              <option value="" className="bg-[#F5F5F5] text-[#404040]">
                Destacados
              </option>
              <option value="price_asc" className="bg-[#F5F5F5] text-[#262626]">
                Precio: Menor a mayor
              </option>
              <option
                value="price_desc"
                className="bg-[#F5F5F5] text-[#262626]"
              >
                Precio: Mayor a menor
              </option>
            </select>
            {/* Icono de flecha personalizado para el select: Gris oscuro (700) */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#404040]">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* SOLO OFERTAS (Diseño Switch/Toggle) */}
        <div className="pt-4 border-t border-[#D4D4D4]">
          <label className="flex items-center justify-between cursor-pointer group">
            {/* Etiqueta: Texto oscuro (800) | Hover: Gris oscuro (700) */}
            <span className="font-medium text-[#262626] group-hover:text-[#404040] transition-colors">
              Solo ofertas especiales
            </span>
            <div className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={ofertaOnly}
                onChange={(e) => setOfertaOnly(e.target.checked)}
                className="sr-only peer"
              />
              {/* Track del switch */}
              <div
                // Base: Gris claro (400) | Checked: Gris oscuro (700)
                // Borde: Gris medio (500)
                className="w-11 h-6 bg-[#D4D4D4] peer-focus:outline-none border border-[#737373] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-[#FFFFFF] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#404040] peer-checked:after:bg-[#FFFFFF]"
              ></div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
});

// Agregamos displayName para evitar advertencias con React.memo
Filters.displayName = "Filters";
