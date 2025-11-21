import { Link } from "react-router-dom";
import { type ProductoInt } from "../../interfaces/Producto";

import "./stylesPD.css";

const productos: ProductoInt[] = [
  {
    id: 1,
    nombre:
      "Estación de Carga Inalámbrica 3 en 1 y es lo mejor si vamos por lo mejor",
    precio: 45.99,
    imagen:
      "https://i.pinimg.com/1200x/84/2a/10/842a1049724bf438d6d2df75999fb845.jpg",
    descripcion:
      "Cargador rápido para teléfono, reloj inteligente y auriculares al mismo tiempo. Diseño compacto y minimalista. ssss ss esto nose no salta. dasdasd asdasd Cargador rápido para teléfono, reloj inteligente y auriculares al mismo tiempo. Diseño compacto y minimalista. ssss ss esto nose no salta. dasdasd asdasd /n Cargador rápido para teléfono, reloj inteligente y auriculares al mismo tiempo. Diseño compacto y minimalista. ssss ss esto nose no salta. dasdasd asdasd Cargador rápido para teléfono, reloj inteligente y auriculares al mismo tiempo. Diseño compacto y minimalista. ssss ss esto nose no salta. dasdasd asdasd Cargador rápido para teléfono, reloj inteligente y auriculares al mismo tiempo. Diseño compacto y minimalista. ssss ss esto nose no salta. dasdasd asdasd Cargador rápido para teléfono, reloj inteligente y auriculares al mismo tiempo. Diseño compacto y minimalista. ssss ss esto nose no salta. dasdasd asdasd Cargador rápido para teléfono, reloj inteligente y auriculares al mismo tiempo. Diseño compacto y minimalista. ssss ss esto nose no salta. dasdasd asdasd",
    categoria: "Accesorios Móviles",
    oferta: true,
    descOferta: "15% de descuento, ¡carga tu ecosistema!",
    nuevoPrecio: 39.09,
  },
  {
    id: 2,
    nombre: "Webcam 4K con Autoenfoque",
    precio: 129.0,
    imagen:
      "https://i.pinimg.com/1200x/ea/81/ab/ea81abbd0c34c69ac77b1eb857b04374.jpg",
    descripcion:
      "Cámara web con resolución Ultra HD 4K, micrófono con cancelación de ruido y lente gran angular. Perfecta para streaming y videollamadas.",
    categoria: "Periféricos",
    oferta: false,
    descOferta: "No aplica",
    nuevoPrecio: 129.0,
  },
  {
    id: 3,
    nombre: "Drone Plegable con GPS y Cámara 2.7K",
    precio: 350.75,
    imagen:
      "https://i.pinimg.com/736x/45/c9/e9/45c9e93a473a8f9579c06185d63c7995.jpg",
    descripcion:
      "Drone compacto y plegable con 30 minutos de vuelo, GPS para retorno automático y cámara estabilizada para videos aéreos.",
    categoria: "Gadgets",
    oferta: true,
    descOferta: "20% OFF en la versión Combo Fly More",
    nuevoPrecio: 280.6,
  },
  {
    id: 4,
    nombre:
      "Estación de Carga Inalámbrica 3 en 1 y es lo mejor si vamos por lo mejor sd de lo kmxcxcxcx xcxcx xcxc xcxc ejro ya que es ssss sss aaaaaaaaaaa ",
    precio: 45.99,
    imagen:
      "https://i.pinimg.com/1200x/84/2a/10/842a1049724bf438d6d2df75999fb845.jpg",
    descripcion:
      "Cargador rápido para teléfono, reloj inteligente y auriculares al mismo tiempo. Diseño compacto y minimalista. ssss ss esto nose no salta. dasdasd asdasd Cargador rápido para teléfono, reloj inteligente y auriculares al mismo tiempo. Diseño compacto y minimalista. ssss ss esto nose no salta. dasdasd asdasd /n Cargador rápido para teléfono, reloj inteligente y auriculares al mismo tiempo. Diseño compacto y minimalista. ssss ss esto nose no salta. dasdasd asdasd Cargador rápido para teléfono, reloj inteligente y auriculares al mismo tiempo. Diseño compacto y minimalista. ssss ss esto nose no salta. dasdasd asdasd Cargador rápido para teléfono, reloj inteligente y auriculares al mismo tiempo. Diseño compacto y minimalista. ssss ss esto nose no salta. dasdasd asdasd Cargador rápido para teléfono, reloj inteligente y auriculares al mismo tiempo. Diseño compacto y minimalista. ssss ss esto nose no salta. dasdasd asdasd Cargador rápido para teléfono, reloj inteligente y auriculares al mismo tiempo. Diseño compacto y minimalista. ssss ss esto nose no salta. dasdasd asdasd",
    categoria: "Accesorios Móviles",
    oferta: true,
    descOferta: "15% de descuento, ¡carga tu ecosistema!",
    nuevoPrecio: 39.09,
  },
  {
    id: 5,
    nombre: "Webcam 4K con Autoenfoque",
    precio: 129.0,
    imagen:
      "https://i.pinimg.com/1200x/ea/81/ab/ea81abbd0c34c69ac77b1eb857b04374.jpg",
    descripcion:
      "Cámara web con resolución Ultra HD 4K, micrófono con cancelación de ruido y lente gran angular. Perfecta para streaming y videollamadas.",
    categoria: "Periféricos",
    oferta: false,
    descOferta: "No aplica",
    nuevoPrecio: 129.0,
  },
  {
    id: 6,
    nombre: "Drone Plegable con GPS y Cámara 2.7K",
    precio: 350.75,
    imagen:
      "https://i.pinimg.com/736x/45/c9/e9/45c9e93a473a8f9579c06185d63c7995.jpg",
    descripcion:
      "Drone compacto y plegable con 30 minutos de vuelo, GPS para retorno automático y cámara estabilizada para videos aéreos.",
    categoria: "Gadgets",
    oferta: true,
    descOferta: "20% OFF en la versión Combo Fly More",
    nuevoPrecio: 280.6,
  },
];

const ProdDestacados = () => {
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
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-[#171717] text-white rounded-sm shadow-sm">
                  {producto.categoria}
                </span>
              </div>

              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            {/* --- 2. CUERPO DE LA TARJETA --- */}
            <div className="flex flex-col justify-between grow p-5 sm:p-6 bg-[#FFFFFF]">
              {/* Título y Decoración */}
              <div className="space-y-3">
                <h3 className="font-serif text-xl text-[#171717] leading-tight line-clamp-2 min-h-14">
                  {producto.nombre}
                </h3>
                {/* Línea decorativa: Gris claro a Negro al hacer hover */}
                <div className="w-12 h-0.5 bg-[#E5E5E5] group-hover:bg-[#171717] transition-colors duration-500"></div>
              </div>

              {/* Lógica de Precios y Botón */}
              <div className="mt-4 space-y-5">
                {/* Visualización de Precios (Lógica adaptada) */}
                <div>
                  {producto.oferta ? (
                    // CASO OFERTA (Alto Contraste)
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold tracking-widest text-[#737373] uppercase mb-1">
                        Oferta Exclusiva
                      </span>
                      <div className="flex items-baseline gap-3">
                        <span className="text-3xl font-light text-[#0A0A0A]">
                          ${producto.nuevoPrecio}
                        </span>
                        <span className="text-sm text-[#A3A3A3] line-through">
                          ${producto.precio}
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
                        ${producto.precio}
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
