import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const handleDetailProduct = (producto: ProductoInt) => {
    /* antes limpiar sesionstorage productoDetalle */
    sessionStorage.removeItem("productoDetalle");
    sessionStorage.setItem("productoDetalle", JSON.stringify(producto));
    navigate("/detallesProducto");
  };

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
            producto-card
            w-[85vw]          /* MÓVIL: 85% del ancho */
            snap-center       /* Centra el 'snap' */
            shrink-0          /* ¡Esencial! Evita que se encoja */
            max-w-[400px]
            h-full
            flex flex-col
            rounded-2xl 
            overflow-hidden 
            shadow-xl
            border border-gray-700 
            bg-gray-800       /* Fondo oscuro para la tarjeta */
            hover:scale-105 transition-transform duration-300
          "
          >
            {/* 1. Imagen */}
            <div className="w-full h-[380px] overflow-hidden">
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>

            {/* 2. Cuerpo - 'grow' hace que ocupe el espacio restante */}
            <div className="flex flex-col justify-between grow p-4">
              {/* Info de Precio/Nombre - Se mantiene arriba */}
              <div className="flex flex-col">
                <h3 className="text-blue-400 text-2xl font-bold mb-2 block">
                  ${producto.precio}
                </h3>
                <p className="text-gray-200 text-lg line-clamp-3">
                  {producto.nombre}
                </p>
              </div>

              {/* Botón - 'justify-between' lo empuja abajo */}
              <Link
                onClick={() => handleDetailProduct(producto)}
                to={`/detallesProducto`}
                className="
                text-center p-3 mt-4 w-full 
                text-white text-md font-semibold
                rounded-xl 
                bg-blue-600 
                hover:bg-blue-500
                transition-colors duration-300
                block
              "
              >
                Ver Producto
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* Fin Lista de productos destacados */}
    </section>
  );
};

export default ProdDestacados;
