import React, { useEffect } from "react";
import { useSearchParams } from "react-router";
//componentes
import { ProductList } from "../components/catalog/ProductList";
import { Filters } from "../components/catalog/Filters";
//hook para traer los productos
import { useGetProducts } from "@/hooks/product/useGetProducts";
//type del filtro
import type { FilterOptions } from "@/types/filter";
import { useFilterParams } from "@/hooks/product/useFilterParams";
import { useDebounce } from "@/hooks/product/useDebounce";
import { Pagination } from "@/components/catalog/pagination/Pagination";

/*
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

//helper para validar sort
const VALID_SORTS = [
  "price_asc",
  "price_desc",
  "more_recent",
  "more_relevant",
] as const;

const getSafeSort = (value: string | null): FilterOptions["sort"] => {
  if (!value) return null;
  return VALID_SORTS.includes(value as any)
    ? (value as FilterOptions["sort"])
    : null;
};

export const Catalogo: React.FC = () => {
  //parametros de la URL
  const [searchParams, setSearchParams] = useSearchParams();

  //lectura inicial desde URL (si existe)
  const param_q = searchParams.get("q") ?? "";
  const param_cat = searchParams.get("cat") ?? "";
  const param_oferta = searchParams.get("oferta") === "1";
  const param_sort = getSafeSort(searchParams.get("sort"));
  const param_page = parseInt(searchParams.get("page") ?? "1", 10) || 1;

  //usamos el hook para los estados locales del filtro
  const {
    category,
    handleSetCategory,
    query,
    handleSetQuery,
    sort,
    handleSetSort,
    offerOnly,
    handleSetOfferOnly,
    page,
    handleSetPage,
  } = useFilterParams({
    categoria: param_cat,
    query: param_q,
    offerOnly: param_oferta,
    sort: param_sort,
    minPrice: null,
    maxPrice: null,
    page: param_page,
  });

  //hook para manejar la busqueda de productos
  const debouncedSearch = useDebounce(query, 500);

  //sincronizar la URL cuando cambian los filtros
  useEffect(() => {
    const params: Record<string, string> = {};

    if (debouncedSearch) params.q = debouncedSearch;
    if (category) params.cat = category;
    if (sort) params.sort = sort;
    if (offerOnly) params.oferta = "1";
    if (page && page > 1) params.page = String(page); // omitimos page=1 para URLs más limpias
    setSearchParams(params, { replace: true }); // replace evita push innecesario en el historial
  }, [debouncedSearch, category, sort, offerOnly, page, setSearchParams]);

  //usamos el para traer los productos
  const { data, isLoading } = useGetProducts({
    categoria: category,
    query: debouncedSearch,
    offerOnly: offerOnly,
    sort: sort,
    page: page,
    minPrice: null,
    maxPrice: null,
  });

  //la pagina debe volver arriba cuando cambian los filtros o la página
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Hace el desplazamiento suave
    });
  }, [debouncedSearch, category, sort, offerOnly, page, setSearchParams]);

  //volver la pagina a 1 cuando cambia la búsqueda
  useEffect(() => {
    handleSetPage(1);
  }, [debouncedSearch]);

  //loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-600">Cargando productos...</p>
      </div>
    );
  }
  
  return (
    // Contenedor principal: Fondo Base (de más claro a 100) y texto oscuro (800).
    // La selección de texto también cambia para ser legible en el nuevo fondo claro.
    <div className="min-h-screen bg-linear-to-b from-[#FFFFFF] to-[#F5F5F5] text-[#262626] font-sans selection:bg-[#262626] selection:text-[#FFFFFF]">
      {/* Contenido principal */}
      <main
        className="container mx-auto px-4 flex flex-col justify-between gap-4 min-h-screen relative
        pt-17 pb-25
      sm:pt-17 sm:px-6 sm:pb-30
      md:pt-20 md:pb-35
      lg:px-8 lg:pt-20 lg:pb-40 lg:flex-row lg:gap-12"
      >
        <aside className="w-full lg:w-1/4 lg:min-w-[300px] shrink-0">
          <div className="sticky top-20">
            <Filters
              query={query}
              setQuery={handleSetQuery}
              categoria={category}
              setCategoria={handleSetCategory}
              sort={sort}
              setSort={handleSetSort}
              offerOnly={offerOnly}
              setOfferOnly={handleSetOfferOnly}
            />
          </div>
        </aside>

        {/* AREA PRINCIPAL: Lista de productos */}
        <div className="flex-1 min-w-0">
          {/* Grid de Productos */}
          <div className="min-h-0">
            <ProductList items={data?.products || []} />
          </div>
        </div>

        {/* paginación */}
        <div
          className="mt-15 flex justify-center absolute left-0 right-0 bottom-5
          sm:bottom-8
          md:bottom-10"
        >
          <Pagination
            limit={20}
            onPageChange={handleSetPage}
            page={page}
            totalProducts={data?.count || 0}
          />
        </div>
      </main>
    </div>
  );
};
