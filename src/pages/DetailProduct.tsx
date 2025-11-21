import React, { useContext, useEffect, useLayoutEffect } from "react";
import { type ProductoInt } from "../interfaces/Producto";
import {
  ArrowLeft,
  MessageCircle,
  ShoppingCart,
  Sparkles,
  Tag,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
/* context */
import { ProductsContext } from "../context/ProductsContext";
import { useLocation } from "react-router-dom";

export const DetailProduct = () => {
  const [producto, setProducto] = React.useState<ProductoInt>();
  const navigate = useNavigate();
  /* logica del contexto */
  const ctx = useContext(ProductsContext);
  if (!ctx) return null; // o fallback UI
  const { products } = ctx;
  /* obtener el id de la url */
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    /* const productoGuardado = sessionStorage.getItem("productoDetalle");
    if (productoGuardado) {
      setProducto(JSON.parse(productoGuardado));
    } */
    const productoA = products.find((el) => el.id === Number(id));
    setProducto(productoA);
  }, [products, id]);

  /* siempre empezar desde arriba de la pagina */
  useLayoutEffect(() => {
    // Se ejecuta de forma síncrona DESPUÉS del render,
    // pero ANTES de que el navegador pinte la pantalla.
    window.scrollTo(0, 0);
  }, []);

  const ahorroTotal = producto?.oferta
    ? (producto.precio - (producto?.nuevoPrecio || 0)).toFixed(2)
    : 0;
  const porcentajeDesc = producto?.oferta
    ? Math.round(
        ((producto.precio - (producto?.nuevoPrecio || 0)) / producto.precio) *
          100
      )
    : 0;
  const location = useLocation();
  console.log(location.state);

  return (
    <div className="min-h-screen bg-linear-to-br from-[#FAFAFA] to-[#F5F5F5] pt-12 md:pt-15">
      {/* Header con botón de retorno - Desktop */}
      <div className="hidden md:block sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E6E6E6] shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <button
            onClick={() => {
              if (window.history.length > 1) {
                navigate(-1);
              } else {
                navigate("/catalogo"); // o donde quieras mandar si no hay historial
              }
            }}
            className="flex items-center gap-2 text-[#404040] hover:text-[#171717] transition-colors duration-200 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-medium">Volver al catálogo</span>
          </button>
        </div>
      </div>

      {/* Container principal */}
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Columna de imagen */}
            <div className="relative bg-linear-to-br from-[#FAFAFA] to-[#E6E6E6] p-6 md:p-12">
              {/* Botón de retorno - Mobile */}
              <button
                onClick={() => navigate(-1)}
                className="md:hidden absolute top-4 left-4 z-10 p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white transition-all duration-200"
              >
                <ArrowLeft className="w-5 h-5 text-[#171717]" />
              </button>

              {/* Badge de oferta */}
              {producto?.oferta && (
                <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                  <div className="bg-linear-to-r from-[#171717] to-[#404040] text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-pulse">
                    <Sparkles className="w-4 h-4" />
                    <span className="font-bold text-sm">
                      {porcentajeDesc}% OFF
                    </span>
                  </div>
                </div>
              )}

              {/* Imagen del producto */}
              <div className="relative aspect-square w-full max-w-lg mx-auto">
                <img
                  src={producto?.imagen}
                  alt={producto?.nombre}
                  className="w-full h-full object-contain rounded-xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Columna de información */}
            <div className="p-6 md:p-12 flex flex-col justify-between">
              {/* Información del producto */}
              <div className="space-y-6">
                {/* Nombre del producto */}
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-[#171717] mb-2">
                    {producto?.nombre}
                  </h1>
                  <div className="h-1 w-20 bg-linear-to-r from-[#404040] to-[#737373] rounded-full"></div>
                </div>

                {/* Sección de precios */}
                <div className="space-y-4">
                  {producto?.oferta ? (
                    <>
                      {/* Precio con oferta */}
                      <div className="bg-linear-to-br from-[#F5F5F5] to-[#E6E6E6] rounded-xl p-6 border-2 border-[#171717] relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#171717] opacity-5 rounded-full -mr-16 -mt-16"></div>

                        <div className="flex items-center gap-2 mb-3">
                          <Tag className="w-5 h-5 text-[#404040]" />
                          <span className="text-sm font-semibold text-[#525252] uppercase tracking-wide">
                            Precio especial
                          </span>
                        </div>

                        <div className="flex items-baseline gap-4 mb-2">
                          <span className="text-2xl md:text-3xl text-[#737373] line-through">
                            ${producto?.precio.toFixed(2)}
                          </span>
                          <span className="text-4xl md:text-5xl font-bold text-[#171717]">
                            ${producto?.nuevoPrecio?.toFixed(2)}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-[#404040]">
                          <span className="font-medium">Ahorras:</span>
                          <span className="font-bold text-[#171717]">
                            ${ahorroTotal}
                          </span>
                        </div>
                      </div>

                      {/* Banner de oferta */}
                      <div className="bg-linear-to-r from-[#171717] via-[#262626] to-[#171717] text-white px-6 py-4 rounded-xl shadow-lg">
                        <div className="flex items-center justify-center gap-3">
                          <Sparkles className="w-5 h-5 animate-pulse" />
                          <p className="font-bold text-center text-sm md:text-base">
                            {producto?.descOferta}
                          </p>
                          <Sparkles className="w-5 h-5 animate-pulse" />
                        </div>
                      </div>
                    </>
                  ) : (
                    /* Precio sin oferta */
                    <div className="bg-linear-to-br from-[#F5F5F5] to-[#E6E6E6] rounded-xl p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Tag className="w-5 h-5 text-[#404040]" />
                        <span className="text-sm font-semibold text-[#525252] uppercase tracking-wide">
                          Precio
                        </span>
                      </div>
                      <span className="text-4xl md:text-5xl font-bold text-[#171717]">
                        ${producto?.precio.toFixed(2)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Descripción */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-[#262626] flex items-center gap-2">
                    <div className="w-1 h-6 bg-[#404040] rounded-full"></div>
                    Descripción
                  </h3>
                  <p className="text-[#525252] leading-relaxed text-base">
                    {producto?.descripcion}
                  </p>
                </div>
              </div>

              {/* Botones de acción */}
              <div className="mt-8 space-y-4">
                <button
                  onClick={() => {}}
                  className="w-full bg-linear-to-r from-[#171717] via-[#262626] to-[#171717] text-white py-4 px-6 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-3 group"
                >
                  <ShoppingCart className="w-6 h-6 group-hover:rotate-12 transition-transform duration-200" />
                  Solicitar Producto
                </button>

                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-linear-to-r from-[#E6E6E6] to-[#D4D4D4] text-[#171717] py-4 px-6 rounded-xl font-bold text-lg shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-3 group border-2 border-[#A3A3A3]"
                >
                  <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
                  Consultar por WhatsApp
                </a>
              </div>

              {/* Info adicional */}
              <div className="mt-6 pt-6 border-t border-[#E6E6E6]">
                <div className="flex flex-wrap gap-4 text-sm text-[#525252]">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#404040] rounded-full"></div>
                    <span>Envío disponible</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#404040] rounded-full"></div>
                    <span>Garantía incluida</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#404040] rounded-full"></div>
                    <span>Atención personalizada</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
