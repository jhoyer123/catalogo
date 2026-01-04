//iconos
import { ChevronLeft, ChevronRight } from "lucide-react";
//helper de paginación obtenemos los items de paginación
import { paginaciónHelper } from "@/helpers/paginationHelper";
//styles
import styles from "./styles.module.css";

type Props = {
  page: number;
  limit: number;
  totalProducts: number;
  onPageChange: (p: number) => void;
};

export function Pagination({
  page,
  limit,
  totalProducts,
  onPageChange,
}: Props) {
  const totalPages = Math.ceil(totalProducts / limit);
  const pages = paginaciónHelper({ currentPage: page, totalPages });

  return (
    <div
      className="flex gap-1.5 items-center justify-center flex-wrap
    sm:gap-3"
    >
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className={`${styles["btn-nextprev"]} ${
          page === 1 ? "text-gray-400" : "cursor-pointer text-gray-500"
        }`}
      >
        <ChevronLeft className="size-8" />
      </button>
      {pages.map((p, i) =>
        p === "..." ? (
          <span key={i}>...</span>
        ) : (
          <button
            key={i}
            onClick={() => onPageChange(p)}
            className={`${styles["btn-pagination"]} ${
              p === page ? "font-bold bg-gray-800 text-white" : "bg-gray-100 "
            } `}
          >
            {p}
          </button>
        )
      )}
      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        className={`${styles["btn-nextprev"]} ${
          page === totalPages ? "text-gray-400" : "cursor-pointer text-gray-500"
        }`}
      >
        <ChevronRight className="size-8" />
      </button>
    </div>
  );
}
