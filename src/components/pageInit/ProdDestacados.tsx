import { Link } from "react-router-dom";
import { type ProductInt } from "../../types/product";
import { ProductsContext } from "../../context/ProductsContext";
import "./stylesPD.css";
import { useContext, useEffect, useState } from "react";

const ProdDestacados = () => {
  const [productos, setProductos] = useState<ProductInt[]>([]);
  // traer productos del contexto
  const ctx = useContext(ProductsContext);
  if (!ctx) return null;
  const { products } = ctx;

  // filtrar productos destacados (por ahora los primeros 6)
  useEffect(() => {
    const destacados = products.slice(0, 6);
    setProductos(destacados);
  }, [products]);

  return (
    <section className=" bg-white dark:bg-gray-900 font-inter py-6 h-auto">
      {/* Titulo y descripcion seccion productos destacados */}
      <div
        className="text-center mb-8 px-7
      /* md estilos */
      sm:px-15
      md:px-15"
      >
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-blue-400 font-ubuntu mb-7">
          Productos Destacados
        </h2>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300 mx-auto">
          Conoce los equipos más elegidos por nuestros clientes. Rendimiento,
          calidad y el mejor precio garantizado.
        </p>
      </div>
      {/* Fin Titulo y descripcion seccion productos destacados */}
      {/* Lista de productos destacados */}
      <div
        className="
        max-w-[1300px]
        flex gap-4 
        overflow-x-auto snap-x snap-mandatory 
        py-6 px-4 
        h-[600px] 
        font-inter scroll-smooth 
        mx-auto
        /* Comportamiento de Flex Normal en md: y superior */
        md:flex-wrap md:justify-center md:gap-6 
        md:h-auto 
        
        /* Desactiva el Scroll y el Snap en md: */
        md:overflow-x-clip md:snap-none
    "
      >
        {productos.map((producto) => (
          <div
            key={producto.id}
            className="
    group
    relative
    w-[85vw] max-w-[400px]        /* Mantiene tamaños móviles */
    h-full
    snap-center shrink-0          /* Mantiene comportamiento de carrusel */
    flex flex-col
    rounded-2xl 
    overflow-hidden 
    shadow-lg hover:shadow-xl     /* Sombra suave a más fuerte */
    border border-[#E5E5E5]       /* Borde sutil (200) */
    bg-[#FFFFFF]                  /* Fondo Base Blanco Puro */
    hover:border-[#A3A3A3]        /* Borde más oscuro al hover (400) */
    transition-all duration-500
  "
          >
            {/* --- 1. SECCIÓN DE IMAGEN --- */}
            <div className="relative w-full h-[380px] overflow-hidden bg-[#FAFAFA]">
              {/* Overlay sutil al hacer hover (Efecto Premium) */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 z-10"></div>

              {/* Badge de Categoría (Estilo Minimalista) */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-[#171717] text-white rounded-sm shadow-sm">
                  {producto.categories.nameCat}
                </span>
              </div>

              <img
                src={producto.product_images[0]?.image_url}
                alt={producto.nameProd}
                className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            {/* --- 2. CUERPO DE LA TARJETA --- */}
            <div className="flex flex-col justify-between grow p-5 sm:p-6 bg-[#FFFFFF]">
              {/* Título y Decoración */}
              <div className="space-y-3">
                <h3 className="font-serif text-xl text-[#171717] leading-tight line-clamp-2 min-h-14">
                  {producto.nameProd}
                </h3>
                {/* Línea decorativa: Gris claro a Negro al hacer hover */}
                <div className="w-12 h-0.5 bg-[#E5E5E5] group-hover:bg-[#171717] transition-colors duration-500"></div>
              </div>

              {/* Lógica de Precios y Botón */}
              <div className="mt-4 space-y-5">
                {/* Visualización de Precios (Lógica adaptada) */}
                <div>
                  {producto.isOfferActive ? (
                    // CASO OFERTA (Alto Contraste)
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold tracking-widest text-[#737373] uppercase mb-1">
                        Oferta Exclusiva
                      </span>
                      <div className="flex items-baseline gap-3">
                        <span className="text-3xl font-light text-[#0A0A0A]">
                          ${producto.priceOffer}
                        </span>
                        <span className="text-sm text-[#A3A3A3] line-through">
                          ${producto.price}
                        </span>
                      </div>
                    </div>
                  ) : (
                    // CASO NORMAL
                    <div className="flex flex-col">
                      <span className="text-[10px] tracking-widest text-[#737373] uppercase mb-1">
                        Precio Regular
                      </span>
                      <span className="text-3xl font-light text-[#171717]">
                        ${producto.price}
                        <span className="text-xs text-[#737373] ml-1 font-normal">
                          USD
                        </span>
                      </span>
                    </div>
                  )}
                </div>

                {/* Botón de Acción (Mantiene tamaño grande pero con estilo minimalista) */}
                <Link
                  to={`/detallesProducto/${producto.id}`} // O el link dinámico que uses
                  state={{ from: location.pathname + location.search }}
                  className="
          w-full block text-center py-4
          text-sm font-bold tracking-wider uppercase
          bg-[#171717] text-white            /* Negro Profundo (900) */
          border border-[#171717]
          rounded-xl
          hover:bg-white hover:text-[#171717] /* Inversión de colores al hover */
          transition-all duration-300
          shadow-md hover:shadow-none
        "
                >
                  Ver Detalles
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Fin Lista de productos destacados */}
    </section>
  );
};

export default ProdDestacados;
