import React from "react";
import { type ProductoInt } from "../interfaces/Producto";
import { ArrowLeft } from "lucide-react";

interface ModalProductProps {
  producto: ProductoInt | null;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalProduct = ({ producto, setOpen }: ModalProductProps) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-end md:items-center font-inter w-full h-dvh overflow-hidden min-h-dvh">
      {/* Contenedor del Modal */}
      <div className="relative w-full h-full md:w-96 md:h-[650px] bg-linear-to-br from-[#0F2027] via-[#203A43] to-[#2C5364] shadow-2xl overflow-hidden rounded-none md:rounded-2xl">
        {/* Cabecera */}
        <div className="w-full flex justify-between items-center py-2 px-5 text-white absolute top-0 z-40">
          <button
            onClick={() => setOpen(false)}
            className="text-3xl font-light text-white hover:text-gray-300"
          >
            <ArrowLeft />
          </button>
          <h1 className="font-ubuntu tracking-wide">Detalles del Producto</h1>
        </div>

        {/* Imagen del Producto */}
        <div className="flex justify-center items-center h-[50%] w-full mt-10 md:pt-20 relative">
          <img
            src={producto?.imagen}
            alt={producto?.nombre}
            className="w-full max-h-full drop-shadow-2xl object-contain absolute top-0"
          />
        </div>

        {/* Tarjeta Detalles (solo aquí queremos scroll) */}
        <div
          className="absolute bottom-0 w-full bg-white rounded-t-3xl shadow-xl z-30 flex flex-col"
          style={{ height: "calc(50% + 1rem)" }}
        >
          {/* Contenido scrollable */}
          <div className="flex-1 overflow-y-auto p-4">
            {/* Nombre y Precio */}
            <div className="flex gap-6 justify-between items-center mb-4 pt-1">
              <h4 className="font-semibold text-gray-800">
                {producto?.nombre}
              </h4>
              <p className="text-3xl font-bold text-gray-800 shrink-0">
                ${producto?.precio}
              </p>
            </div>

            {/* Descripción con scroll */}
            <div className="text-gray-600 text-sm pb-2">
              <p className="whitespace-pre-line leading-relaxed">
                {producto?.descripcion}
              </p>
            </div>
          </div>

          {/* Botones fijos */}
          <div className="flex gap-4 items-center justify-center p-2 bg-white rounded-t-lg shadow-lg border-t border-gray-100 shrink-0">
            <button
              className="flex grow items-center justify-center py-3 px-6 rounded-xl font-bold text-lg text-white 
              bg-linear-to-r from-[#2C5364] to-[#0F2027] hover:opacity-90 transition-opacity duration-300 shadow-lg"
            >
              Solicitar Producto
            </button>
            <button
              className="animate-bounce bg-gray-300 border border-black p-3 rounded-xl text-gray-700 hover:bg-gray-200 transition-colors duration-200 shrink-0"
              aria-label="View Cart"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 11V7a4 4 0 00-8 0v4m5 9h-2a2 2 0 01-2-2v-4a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2zM5 9h14l1 12H4L5 9z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
