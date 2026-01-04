export interface FilterOptions {
  query: string | null;
  categoria: string | null;
  minPrice: number | null;
  maxPrice: number | null;
  offerOnly: boolean;
  page: number;
  sort: "price_asc" | "price_desc" | "more_recent" | "more_relevant" | null;
}
