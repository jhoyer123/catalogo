import React from "react";
import { type ProductoInt } from "../interfaces/Producto";
import { ArrowLeft } from "lucide-react";

interface ModalProductProps {
  producto: ProductoInt | null;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalProduct = ({ producto, setOpen }: ModalProductProps) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex justify-center items-end md:items-center font-inter">
      {/* Contenedor del Modal con Fondo Degradado */}
      <div className="relative w-full h-full md:w-96 md:h-[650px] bg-linear-to-br from-[#0F2027] via-[#203A43] to-[#2C5364] shadow-2xl overflow-hidden">
        {/* Cabecera Back Button y Título */}
        <div className="w-full flex justify-between items-center py-2 px-5 text-white z-20 absolute top-0">
          <button
            onClick={() => setOpen(false)}
            className="text-3xl font-light text-white hover:text-gray-300"
          >
            <ArrowLeft />
          </button>
          <h1 className="font-ubuntu tracking-wide">Detalles del Producto</h1>
        </div>

        {/* Imagen del Producto */}
        <div className="flex justify-center items-center h-[50%] w-full mt-8 md:mt-16 z-10 relative">
          {/* Asumiendo que producto.imagen contiene la URL del auricular */}
          <img
            src={producto?.imagen}
            alt={producto?.nombre}
            className="w-full max-h-full drop-shadow-2xl object-contain absolute top-0"
          />
        </div>

        {/* Tarjeta de Detalles (Contenido Blanco) */}
        <div
          className="absolute bottom-0 w-full bg-white rounded-t-3xl shadow-xl z-30 scroll-x-hidden overflow-y-auto pb-13"
          style={{ height: "50%" }}
        >
          <div className="p-3">
            {/* Nombre y Precio */}
            <div className="flex gap-6 justify-between items-center mb-4">
              {/* Ajustado mb para compensar la eliminación de rating/colores */}
              <div>
                <h4 className=" font-semibold text-gray-800">
                  {producto?.nombre}
                </h4>
              </div>
              <p className="text-3xl font-bold text-gray-800">
                ${producto?.precio}
              </p>
            </div>
            {/* descripción del producto */}
            <div className="text-gray-600 text-sm">
              <p className="whitespace-pre-line">{producto?.descripcion}s</p>
            </div>
          </div>

          {/* Botones de Acción (ADD TO CART y Carrito) */}
          <div className="flex gap-4 items-center justify-center fixed bottom-0 w-full px-2 pb-1">
            <button
              className="flex grow items-center justify-center py-3 px-6 rounded-xl font-bold text-lg text-white 
              bg-linear-to-r from-[#2C5364] to-[#0F2027] hover:opacity-90 transition-opacity duration-300 shadow-lg"
            >
              Solicitar Producto
            </button>
            {/* Botón de Carrito (Shopping Bag) */}
            <button
              className="animate-bounce bg-gray-300 border border-black p-3 rounded-xl text-gray-700  hover:bg-gray-200 transition-colors duration-200"
              aria-label="View Cart"
            >
              {/* Icono de Carrito (usando SVG placeholder) */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="blue"
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
