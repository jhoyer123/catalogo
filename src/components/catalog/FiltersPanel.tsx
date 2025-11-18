// src/components/FiltersPanel.tsx
import React, { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { ALL_CATEGORIES } from "../../datosPrueba/categories";

// 🎯 Utilidad elegante para actualizar params
function updateParam(
  setParams: (
    nextInit: URLSearchParams | ((prev: URLSearchParams) => URLSearchParams)
  ) => void,
  key: string,
  value: string
) {
  setParams((prev) => {
    const params = new URLSearchParams(prev);
    if (value === "" || value === undefined) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    return params;
  });
}

export const FiltersPanel: React.FC = () => {
  const [params, setParams] = useSearchParams();

  const category = params.get("category") ?? "";
  const search = params.get("search") ?? "";
  const minPrice = params.get("minPrice") ?? "";
  const maxPrice = params.get("maxPrice") ?? "";

  // 🔥 Handlers SIN re-renders innecesarios gracias a useCallback
  const handleCategory = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      updateParam(setParams, "category", e.target.value);
    },
    [setParams]
  );

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      updateParam(setParams, "search", e.target.value);
    },
    [setParams]
  );

  const handleMinPrice = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      updateParam(setParams, "minPrice", e.target.value);
    },
    [setParams]
  );

  const handleMaxPrice = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      updateParam(setParams, "maxPrice", e.target.value);
    },
    [setParams]
  );

  return (
    <aside className="p-4 bg-white dark:bg-gray-900 border rounded-xl shadow-sm sticky top-4 h-fit space-y-4">
      <h2 className="text-xl font-semibold mb-4">Filtros</h2>

      {/* 🔍 BUSCADOR */}
      <div>
        <label className="block text-sm mb-1">Buscar</label>
        <input
          type="text"
          className="w-full border p-2 rounded-lg"
          value={search}
          onChange={handleSearch}
          placeholder="Buscar producto..."
        />
      </div>

      {/* 📂 CATEGORÍA */}
      <div>
        <label className="block text-sm mb-1">Categoría</label>
        <select
          className="w-full border p-2 rounded-lg"
          value={category}
          onChange={handleCategory}
        >
          <option value="">Todas</option>
          {ALL_CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* 💵 PRECIO */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm mb-1">Min</label>
          <input
            type="number"
            className="w-full border p-2 rounded-lg"
            value={minPrice}
            onChange={handleMinPrice}
            placeholder="0"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Max</label>
          <input
            type="number"
            className="w-full border p-2 rounded-lg"
            value={maxPrice}
            onChange={handleMaxPrice}
            placeholder="1000"
          />
        </div>
      </div>
    </aside>
  );
};
