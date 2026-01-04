import type { FilterOptions } from "@/types/filter";
import { useState } from "react";

//hook para el estado de los parametros de filtro en la URL
export const useFilterParams = (params: FilterOptions) => {
  //estados de los parametros de filtro
  //para el search query
  const [query, setQuery] = useState<string>(params.query || "");
  //para la categoría
  const [category, setCategory] = useState<string | null>(
    params.categoria || null
  );
  //para el sort
  const [sort, setSort] = useState<FilterOptions["sort"]>(params.sort || null);
  //para el filtro de solo ofertas
  const [offerOnly, setOfferOnly] = useState<boolean>(
    params.offerOnly || false
  );
  //para la paginación
  const [page, setPage] = useState<number>(params.page || 1);

  //funciones para setear los parametros de filtro
  //para el search query
  const handleSetQuery = (value: string) => {
    setQuery(value);
  };
  //para la categoría
  const handleSetCategory = (value: string | null) => {
    setCategory(value);
    setPage(1); // reset page when category changes
  };
  //para el sort
  const handleSetSort = (value: FilterOptions["sort"] | null) => {
    setSort(value);
    setPage(1); // reset page when sort changes
  };
  //para el filtro de solo ofertas
  const handleSetOfferOnly = (value: boolean) => {
    setOfferOnly(value);
    setPage(1); // reset page when offerOnly changes
  };
  //para la paginación
  const handleSetPage = (value: number) => {
    setPage(value);
  };

  //retornamos los estados y funciones para actualizar los parametros de filtro
  return {
    query,
    handleSetQuery,
    category,
    handleSetCategory,
    sort,
    handleSetSort,
    offerOnly,
    handleSetOfferOnly,
    page,
    handleSetPage,
  };
};
