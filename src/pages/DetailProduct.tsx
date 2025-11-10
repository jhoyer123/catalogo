import React, { useEffect } from "react";
import { type ProductoInt } from "../interfaces/Producto";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const DetailProduct = () => {
  const [producto, setProducto] = React.useState<ProductoInt | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    const productoGuardado = sessionStorage.getItem("productoDetalle");
    if (productoGuardado) {
      setProducto(JSON.parse(productoGuardado));
    }
  }, []);

  return (
    <div className="absolute z-20 flex flex-col justify-center items-center pb-8 font-inter min-h-full min-w-full">
      {/* Imagen del Producto (80% del alto total) */}
      <div
        className="relative w-full h-[80vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${producto?.imagen})`,
        }}
      >
        {/* Capa de sombreado para mejor contraste */}
        <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/30 to-transparent" />

        {/* Botón de regreso visible siempre */}
        <div className="absolute top-4 left-4 z-50">
          <button
            onClick={() => navigate("/Productos")}
            className="p-3 rounded-full bg-black/70 backdrop-blur-sm border border-white/40 shadow-md hover:bg-black/90 transition-all duration-200"
          >
            <ArrowLeft className="text-white w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Contenido inferior (20%) */}

      <div className="bg-white p-5 flex flex-col justify-between h-auto">
        {/* Precio */}
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-medium text-gray-800">
            {producto?.nombre}
          </h2>
          <p className="text-2xl font-bold text-gray-900">
            ${producto?.precio?.toFixed(2)}
          </p>
        </div>

        {/* Descripción (corta y sin overflow) */}
        <p className="text-gray-600 text-sm mb-4">{producto?.descripcion}</p>

        {/* Botones de acción */}
        <div className="flex gap-3 fixed bottom-0 left-0 w-full bg-white px-2">
          <button
            className="flex-1 py-3 rounded-xl font-semibold text-white 
              bg-linear-to-r from-[#2C5364] to-[#0F2027] hover:opacity-90 transition-opacity shadow-lg"
          >
            Solicitar
          </button>

          <a
            href="https://www.whatsapp.com/?lang=es"
            className="bg-gray-200 border border-gray-400 p-3 rounded-xl text-gray-700 hover:bg-gray-300 transition-colors duration-200 shrink-0"
            aria-label="Ver carrito"
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
          </a>
        </div>
      </div>
    </div>
  );
};
