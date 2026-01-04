export interface FilterOptions {
  query: string | null;
  categoria: string | null;
  minPrice: number | null;
  maxPrice: number | null;
  offerOnly: boolean;
  sort: "price_asc" | "price_desc" | "more_recent" | "more_relevant" | null;
}
