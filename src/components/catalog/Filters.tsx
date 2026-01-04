import React, { useState } from "react";
import { useGetCategories } from "@/hooks/category/useGetCategories";
import type { FilterOptions } from "@/types/filter";

interface FiltersProps {
  query: string;
  setQuery: (v: string) => void;

  categoria: string | null;
  setCategoria: (v: string | null) => void;

  offerOnly: boolean;
  setOfferOnly: (v: boolean) => void;

  sort: FilterOptions["sort"];
  setSort: (v: FilterOptions["sort"]) => void;
}

export const Filters: React.FC<FiltersProps> = React.memo((props) => {
  const {
    query,
    setQuery,
    categoria,
    setCategoria,
    offerOnly,
    setOfferOnly,
    sort,
    setSort,
  } = props;

  // Estado para abrir/cerrar en móvil
  const [isOpen, setIsOpen] = useState(false);

  const { data: categories } = useGetCategories();

  return (
    <div className="h-fit w-full bg-[#F5F5F5] border border-[#D4D4D4] sm:rounded-xl shadow-lg overflow-hidden transition-all duration-300">
      {/* CABECERA (Header) */}
      <div
        className="p-3 md:p-6 flex justify-between items-center cursor-pointer lg:cursor-default"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-2xl font-serif text-[#262626] tracking-wide">
          Filtros
        </h2>

        {/* Icono Chevron (Solo visible en móvil/tablet < lg) */}
        <span
          className={`lg:hidden text-[#737373] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </div>

      {/* CONTENIDO (Body) */}
      {/* Lógica: 
          - hidden en móvil por defecto (si !isOpen)
          - block en móvil si isOpen
          - lg:block SIEMPRE visible en escritorio
          - Añadimos padding y borde superior solo si está visible
      */}
      <div
        className={`px-6 pb-6 space-y-6 ${
          isOpen ? "block border-t border-[#D4D4D4] pt-6" : "hidden"
        } lg:block lg:border-t lg:pt-0 lg:border-none`}
      >
        {/* BUSCADOR */}
        <div className="group">
          <label className="block mb-2 text-xs font-bold tracking-[0.2em] text-[#737373] uppercase">
            Buscar
          </label>
          <div className="relative">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar producto..."
              className="w-full bg-[#FAFAFA] text-[#262626] placeholder-[#D4D4D4] border border-[#A3A3A3]/50 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:border-[#404040] focus:ring-1 focus:ring-[#404040] transition-all duration-300"
            />
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
          <label className="block mb-2 text-xs font-bold tracking-[0.2em] text-[#737373] uppercase">
            Categoría
          </label>
          <div className="relative">
            <select
              value={categoria ?? ""}
              onChange={(e) =>
                setCategoria(e.target.value === "" ? null : e.target.value)
              }
              className="w-full appearance-none bg-[#FAFAFA] text-[#262626] border border-[#A3A3A3]/50 rounded-lg py-3 px-4 focus:outline-none focus:border-[#404040] focus:ring-1 focus:ring-[#404040] transition-all duration-300 cursor-pointer"
            >
              <option value="" className="bg-[#F5F5F5] text-[#404040]">
                Todas las colecciones
              </option>
              {(categories ?? []).map((cat) => (
                <option
                  key={cat.id}
                  value={cat.id}
                  className="bg-[#F5F5F5] text-[#262626]"
                >
                  {cat.nameCat}
                </option>
              ))}
            </select>
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
          <label className="block mb-2 text-xs font-bold tracking-[0.2em] text-[#737373] uppercase">
            Ordenar por
          </label>
          <div className="relative">
            <select
              value={sort ?? ""}
              onChange={(e) => setSort(e.target.value as FilterOptions["sort"])}
              className="w-full appearance-none bg-[#FAFAFA] text-[#262626] border border-[#A3A3A3]/50 rounded-lg py-3 px-4 focus:outline-none focus:border-[#404040] focus:ring-1 focus:ring-[#404040] transition-all duration-300 cursor-pointer"
            >
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
              <option
                value="more_recent"
                className="bg-[#F5F5F5] text-[#262626]"
              >
                Más recientes
              </option>
            </select>
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

        {/* SOLO OFERTAS */}
        <div className="pt-4 border-t border-[#D4D4D4]">
          <label className="flex items-center justify-between cursor-pointer group">
            <span className="font-medium text-[#262626] group-hover:text-[#404040] transition-colors">
              Solo ofertas especiales
            </span>
            <div className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={offerOnly}
                onChange={(e) => setOfferOnly(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-[#D4D4D4] peer-focus:outline-none border border-[#737373] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-[#FFFFFF] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#404040] peer-checked:after:bg-[#FFFFFF]"></div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
});

Filters.displayName = "Filters";
