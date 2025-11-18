// src/pages/Catalog.tsx
import React, { useEffect } from "react";
import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";
import { Filters } from "../components/catalog/Filters";
import { ProductList } from "../components/catalog/ProductList";
import { applyFilters } from "../components/catalog/filter";
import { useDebounce } from "../components/catalog/useDebounce";

/**
 * Página de catálogo con:
 * - sincronización de filtros en la URL (useSearchParams)
 * - debounce en la búsqueda
 * - memoización de resultados (useMemo)
 * - setters estables (useCallback) para reducir re-renders
 *
 * Query params usados:
 *  - q       = texto de búsqueda
 *  - cat     = categoría
 *  - oferta  = '1' si solo ofertas (si no existe o !== '1' => false)
 *  - sort    = 'price_asc' | 'price_desc' | ''
 *  - page    = número de página (1-based)
 */

export const Catalogo: React.FC = () => {
  const ctx = useContext(ProductsContext);
  if (!ctx) return null; // o fallback UI
  const { products } = ctx;

  const [searchParams, setSearchParams] = useSearchParams();

  // --- lectura inicial desde URL (si existe)
  const param_q = searchParams.get("q") ?? "";
  const param_cat = searchParams.get("cat") ?? "";
  const param_oferta = searchParams.get("oferta") === "1";
  const param_sort = searchParams.get("sort") ?? "";
  const param_page = parseInt(searchParams.get("page") ?? "1", 10) || 1;

  // --- estados locales (controlados por la UI). Mantengo `queryInput` separado para input reactivo
  const [queryInput, setQueryInput] = React.useState<string>(param_q);
  const debouncedQuery = useDebounce<string>(queryInput, 300);

  const [categoria, setCategoriaState] = React.useState<string | null>(
    param_cat || null
  );
  const [ofertaOnly, setOfertaOnlyState] =
    React.useState<boolean>(param_oferta);
  const [sort, setSortState] = React.useState<string | null>(
    param_sort || null
  );

  // Paginación local (se sincroniza con URL)
  const [page, setPageState] = React.useState<number>(param_page);
  const perPage = 12;

  // --- Sincronizar URL cuando cambian las variables derivadas (debouncedQuery, categoria, ofertaOnly, sort, page)
  // Nota: usamos useEffect para mantener la URL como fuente de verdad persistente.
  React.useEffect(() => {
    const params: Record<string, string> = {};

    if (debouncedQuery) params.q = debouncedQuery;
    if (categoria) params.cat = categoria;
    if (ofertaOnly) params.oferta = "1";
    if (sort) params.sort = sort;
    if (page && page > 1) params.page = String(page); // omitimos page=1 para URLs más limpias

    setSearchParams(params, { replace: true }); // replace evita push innecesario en el historial
  }, [debouncedQuery, categoria, ofertaOnly, sort, page, setSearchParams]);

  // --- Si la URL cambia por fuera (usuario pegó link / recarga), sincronizamos estados locales
  // Esto mantiene el input y controles alineados con la URL.
  React.useEffect(() => {
    setQueryInput(param_q);
    setCategoriaState(param_cat || null);
    setOfertaOnlyState(param_oferta);
    setSortState(param_sort || null);
    setPageState(param_page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param_q, param_cat, param_oferta, param_sort, param_page]);

  // --- compute filtered with memo to avoid expensive re-runs
  const filtered = React.useMemo(() => {
    console.log("Recalculando filtros:", {
      debouncedQuery,
      categoria,
      ofertaOnly,
      sort,
    });
    return applyFilters(products, {
      query: debouncedQuery,
      categoria: categoria ?? undefined,
      minPrice: null,
      maxPrice: null,
      ofertaOnly,
      sort: (sort as any) || null,
    });
  }, [products, debouncedQuery, categoria, ofertaOnly, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));

  // Si el page actual es mayor que totalPages (por ejemplo cambió el filtro), ajustamos
  React.useEffect(() => {
    if (page > totalPages) {
      setPageState(1);
    }
  }, [page, totalPages]);

  // --- visible page slice
  const visible = React.useMemo(() => {
    const start = (page - 1) * perPage;
    return filtered.slice(start, start + perPage);
  }, [filtered, page]);

  // --- Setters estables para pasar a Filters (reduce re-renders si Filters es memoizado)
  const setQuery = React.useCallback((q: string) => {
    setQueryInput(q);
    // no tocamos la URL inmediatamente; el efecto con debouncedQuery lo hará
  }, []);

  const setCategoria = React.useCallback((c: string | null) => {
    setCategoriaState(c);
    setPageState(1); // reset page on filter change
  }, []);

  const setOfertaOnly = React.useCallback((v: boolean) => {
    setOfertaOnlyState(v);
    setPageState(1);
  }, []);

  const setSort = React.useCallback((s: string | null) => {
    setSortState(s);
    setPageState(1);
  }, []);

  const setPage = React.useCallback((p: number) => {
    setPageState(p);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  // Debug logs para aprender renders
  /* console.log("Render Catalog:", {
    queryInput,
    debouncedQuery,
    categoria,
    ofertaOnly,
    sort,
    page,
    visibleCount: visible.length,
    totalCount: filtered.length,
  }); */

  return (
    // 1. Contenedor principal: Fondo Base (de más claro a 100) y texto oscuro (800).
    // La selección de texto también cambia para ser legible en el nuevo fondo claro.
    <div className="min-h-screen bg-linear-to-b from-[#FFFFFF] to-[#F5F5F5] text-[#262626] font-sans selection:bg-[#262626] selection:text-[#FFFFFF]">
      {/* Contenido principal */}
      <main className="container pt-17 mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-20 flex flex-col lg:flex-row gap-8 lg:gap-12
      md:py-20 sm:pt-20">
        {/* ASIDE: Filtros (Sidebar) */}
        <aside className="w-full lg:w-1/4 lg:min-w-[300px] shrink-0">
          <div className="sticky top-20">
            {/* El componente Filters debe tener su propio fondo claro si no lo tiene */}
            <Filters
              allProducts={products}
              query={queryInput}
              setQuery={setQuery}
              categoria={categoria}
              setCategoria={setCategoria}
              ofertaOnly={ofertaOnly}
              setOfertaOnly={setOfertaOnly}
              sort={sort}
              setSort={setSort}
            />
          </div>
        </aside>

        {/* AREA PRINCIPAL: Lista de productos + Paginación */}
        <div className="flex-1 min-w-0">
          {/* Grid de Productos */}
          <div className="min-h-[500px]">
            <ProductList items={visible} />
          </div>

          {/* --- PAGINACIÓN ELEGANTE --- */}
          {/* Separador de paginación: Borde gris claro (400) */}
          <div className="flex flex-col items-center justify-center gap-8 mt-16 pt-8 border-t border-[#D4D4D4]">
            <div className="flex items-center gap-4 sm:gap-8 w-full justify-center">
              {/* Botón ANTERIOR */}
              <button
                onClick={() => setPage(Math.max(1, page - 1))}
                disabled={page === 1}
                // Borde gris (500), Texto oscuro (800)
                // Hover: Fondo oscuro (800), Borde oscuro (800), Texto claro (Base)
                className="group flex items-center gap-2 px-6 py-3 rounded-full border border-[#737373] text-[#262626] transition-all duration-300 hover:bg-[#262626] hover:border-[#262626] hover:text-[#FFFFFF] disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-[#262626] disabled:hover:border-[#737373] disabled:cursor-not-allowed"
              >
                <svg
                  className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span className="font-medium tracking-wide text-sm uppercase">
                  Anterior
                </span>
              </button>

              {/* Indicador de Página (Minimalista) */}
              <div className="flex items-baseline gap-2 font-serif">
                {/* Página Actual: Texto oscuro (800) */}
                <span className="text-3xl text-[#262626]">{page}</span>
                {/* Separador: Gris medio (500) */}
                <span className="text-lg text-[#737373] font-light">/</span>
                {/* Total Páginas: Gris claro (400) */}
                <span className="text-lg text-[#D4D4D4]">{totalPages}</span>
              </div>

              {/* Botón SIGUIENTE */}
              <button
                onClick={() => setPage(Math.min(totalPages, page + 1))}
                disabled={page === totalPages}
                // Mismo estilo que el botón anterior
                className="group flex items-center gap-2 px-6 py-3 rounded-full border border-[#737373] text-[#262626] transition-all duration-300 hover:bg-[#262626] hover:border-[#262626] hover:text-[#FFFFFF] disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-[#262626] disabled:hover:border-[#737373] disabled:cursor-not-allowed"
              >
                <span className="font-medium tracking-wide text-sm uppercase">
                  Siguiente
                </span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Indicador Visual de Progreso (Puntos) */}
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setPage(idx + 1)}
                  className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                    page === idx + 1
                      ? "w-8 bg-[#525252]" // Activo: Gris 600 (Acento principal para light mode)
                      : "w-2 bg-[#D4D4D4] hover:bg-[#A3A3A3]" // Inactivo: Gris claro (400) | Hover: Gris un poco más oscuro (600)
                  }`}
                  aria-label={`Ir a página ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
