import { Link } from "react-router-dom";
import { type ProductoInt } from "../interfaces/Producto";

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
    <section className=" bg-white dark:bg-gray-900 min-auto font-inter py-6">
      {/* Titulo y descripcion seccion productos destacados */}
      <div className="text-center mb-8 px-7">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-blue-400 font-ubuntu mb-7">
          Productos Destacados
        </h2>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300 max-w-sm mx-auto">
          Conoce los equipos más elegidos por nuestros clientes. Rendimiento,
          calidad y el mejor precio garantizado.
        </p>
      </div>
      {/* Fin Titulo y descripcion seccion productos destacados */}
      {/* Lista de productos destacados */}
      <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory py-3 px-4 h-[600px] hide-scrollbar font-inter scroll-smooth">
        {productos.map((producto) => (
          <div
            key={producto.id}
            // CLAVE: Usamos 'flex-col' aquí para apilar el contenido dentro de la tarjeta
            className="snap-center w-[90%] shrink-0 h-full flex flex-col rounded-2xl overflow-hidden shadow-lg border border-gray-300 bg-gray-100"
          >
            {/* 1. Imagen - Ocupa la parte superior */}
            <img
              src={producto.imagen}
              className="object-cover w-full h-[380px] rounded-t-2xl mb-4"
            />

            {/* 2. Cuerpo - Usamos 'flex-grow' para que ocupe el espacio vertical restante */}
            <div className="flex flex-col justify-between grow px-2">
              {/* Información de Precio/Nombre - Se mantiene arriba */}
              <div className="flex flex-col h-auto px-3">
                <h3 className="text-blue-800 text-2xl font-semibold dark:text-gray-300 mb-2 block">
                  {producto.precio}$
                </h3>
                <p className="line-clamp-3">{producto.nombre}</p>
              </div>

              {/* Botón - Es empujado hacia abajo por la lógica 'justify-between' o 'mt-auto' */}
              <Link
                to={`/productos/${producto.id}`}
                className="text-center p-3 mt-4 w-full text-white rounded-2xl bg-blue-700 block mb-2"
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
