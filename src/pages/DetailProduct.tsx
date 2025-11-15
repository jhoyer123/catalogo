import React, { useEffect, useLayoutEffect } from "react";
import { type ProductoInt } from "../interfaces/Producto";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Whatssap from "../assets/icons/Whatsapp.svg";

export const DetailProduct = () => {
  const [producto, setProducto] = React.useState<ProductoInt | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const productoGuardado = sessionStorage.getItem("productoDetalle");
    if (productoGuardado) {
      setProducto(JSON.parse(productoGuardado));
    }
  }, []);

  /* siempre empezar desde arriba de la pagina */
  useLayoutEffect(() => {
    // Se ejecuta de forma síncrona DESPUÉS del render,
    // pero ANTES de que el navegador pinte la pantalla.
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-full h-full">
      <div
        className="relative flex flex-col justify-center items-center pb-2 font-inter w-full min-h-sreen bg-white mt-15
    md:mt-20
    lg:flex-row
    "
      >
        {/* Imagen del Producto (80% del alto total) */}
        <div
          className=" w-full h-[400px] bg-contain bg-center top-0 bg-no-repeat
        sm:h-[500px]
        lg:w-[450px]"
          style={{
            backgroundImage: `url(${producto?.imagen})`,
          }}
        >
          {/* Botón de regreso visible siempre */}
          <div className="absolute top-4 left-4 z-10 md:hidden">
            <button
              onClick={() => navigate(-1)}
              className="p-3 rounded-full bg-black/70 backdrop-blur-sm border border-white/40 shadow-md hover:bg-black/90 transition-all duration-200"
            >
              <ArrowLeft className="text-white w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Contenido inferior */}
        <div
          className="bg-white m-3 px-1 flex flex-col justify-between h-auto max-w-screen relative pb-12
      sm:px-6
      md:max-w-[600px]
      lg:max-w-[600px]"
        >
          {/* Precio */}
          <div className="flex flex-col text-left text-gray-800 mb-1 h-auto line-clamp-3 pt-2">
            {!producto?.oferta && (
              <p className="text-gray-900 font-bold text-xl">
                ${producto?.precio.toFixed(2)}
              </p>
            )}
            <div className="flex flex-col justify-between">
              {producto?.oferta && (
                <>
                  <div className="flex justify-between w-full text-2xl">
                    <p className="text-gray-900 font-bold line-through">
                      ${producto?.precio.toFixed(2)}
                    </p>
                    <p className="text-blue-700 font-bold animate-bounce">
                      ${producto?.nuevoPrecio?.toFixed(2)}
                    </p>
                  </div>
                  <div className="bg-red-500 px-2 my-2 py-2 rounded-md mb-2 w-auto text-xl text-center text-white">
                    <p>{producto?.descOferta}</p>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-gray-800">
              {producto?.nombre}
            </h2>
          </div>

          {/* Descripción (corta y sin overflow) */}
          <p className="text-gray-600 text-md mb-4">{producto?.descripcion}</p>

          {/* Botones de acción */}
          <div
            className="flex gap-3 absolute bottom-0 left-0 right-0 w-full bg-white px-7
        max-w-[500px] mx-auto items-center justify-center"
          >
            <button
              className="flex-1 py-3 rounded-xl font-semibold text-white 
              bg-linear-to-r from-[#2C5364] to-[#0F2027] hover:opacity-90 transition-opacity shadow-lg flex justify-center items-center gap-2"
            >
              Solicitar
              <ArrowRight />
            </button>

            <a
              href="https://www.whatsapp.com/?lang=es"
              className=" text-gray-700 hover:bg-gray-300 transition-colors duration-200 shrink-0"
              aria-label="Ver carrito"
            >
              <img
                src={Whatssap}
                alt="WhatsApp"
                className="w-full h-11 p-0 m-0 animate-bounce"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
