import { useRange } from "@/hooks/pagination/useRange";

// Helper de paginación para generar una lista de páginas con puntos suspensivos
interface Props {
  currentPage: number;
  totalPages: number;
  range?: number;
}

export const paginaciónHelper = ({
  currentPage,
  totalPages,
  range = useRange(),
}: Props): (number | "...")[] => {
  const pages: (number | "...")[] = [];

  const start = Math.max(2, currentPage - range);
  const end = Math.min(totalPages - 1, currentPage + range);

  pages.push(1);

  if (start > 2) pages.push("...");

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (end < totalPages - 1) pages.push("...");

  if (totalPages > 1) pages.push(totalPages);

  return pages;
};
