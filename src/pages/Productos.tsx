import { Plus, Search, SlidersHorizontal } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

/* datos de prueba */
interface Producto {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  descripcion: string;
  categoria: string;
  oferta: boolean;
  descOferta?: string;
  nuevoPrecio?: number;
}

const productos: Producto[] = [
  {
    id: 1,
    nombre:
      "Estación de Carga Inalámbrica 3 en 1 y es lo mejor si vamos por lo mejor asdddddddddddddddddddddddd sss dsssssssssssssssss",
    precio: 45.99,
    imagen:
      "https://i.pinimg.com/1200x/84/2a/10/842a1049724bf438d6d2df75999fb845.jpg",
    descripcion:
      "Cargador rápido para teléfono, reloj inteligente y auriculares al mismo tiempo. Diseño compacto y minimalista. ssss ss esto nose no salta. dasdasd asdasd Cargador rápido para teléfono, reloj inteligente y auriculares al mismo tiempo. Diseño compacto y minimalista. ssss ss esto nose no salta. dasdasd asdasd /n Cargador rápido para teléfono, reloj inteligente y auriculares al mismo tiempo. Diseño compacto y minimalista. ssss ss esto nose no salta. dasdasd asdasd Cargador rápido para teléfono, reloj inteligente y auriculares al mismo tiempo. Diseño compacto y minimalista. ssss ss esto nose no salta. dasdasd asdasd Cargador rápido para teléfono, reloj inteligente y auriculares al mismo tiempo. Diseño compacto y minimalista. ssss ss esto nose no salta. dasdasd asdasd Cargador rápido para teléfono, reloj inteligente y auriculares al mismo tiempo. Diseño compacto y minimalista. ssss ss esto nose no salta. dasdasd asdasd Cargador rápido para teléfono, reloj inteligente y auriculares al mismo tiempo. Diseño compacto y minimalista. ssss ss esto nose no salta. dasdasd asdasd",
    categoria: "Periféricos",
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
    nombre: "Reloj Inteligente Deportivo (Serie 6)",
    precio: 199.99,
    imagen:
      "https://i.pinimg.com/736x/c8/d0/37/c8d037dcb31703f2ae3371271be69a39.jpg",
    descripcion:
      "Smartwatch con medición de oxígeno en sangre, GPS integrado, monitoreo de sueño y más de 100 modos deportivos.",
    categoria: "Wearables",
    oferta: false,
    descOferta: "No aplica",
    nuevoPrecio: 199.99,
  },
  {
    id: 5,
    nombre: "Disco Duro Externo USB-C 2TB",
    precio: 89.9,
    imagen:
      "https://i.pinimg.com/736x/1f/f2/af/1ff2af83f587193b768792b9153ca83f.jpg",
    descripcion:
      "Unidad de almacenamiento portátil de 2TB con conexión USB 3.1 Tipo C para transferencias ultrarrápidas. Resistente a golpes.",
    categoria: "Almacenamiento",
    oferta: true,
    descOferta: "10% de ahorro por tiempo limitado",
    nuevoPrecio: 80.91,
  },
  {
    id: 6,
    nombre: "Mini Proyector LED Portátil",
    precio: 215.5,
    imagen:
      "https://i.pinimg.com/736x/2c/74/c1/2c74c189d1f192645b8a1663fd7bd188.jpg",
    descripcion:
      "Proyector con resolución nativa 1080p, corrección trapezoidal automática y sistema operativo Android TV integrado.",
    categoria: "Audio/Video",
    oferta: false,
    descOferta: "No aplica",
    nuevoPrecio: 215.5,
  },
  {
    id: 7,
    nombre: "Tarjeta Gráfica de Alto Rendimiento",
    precio: 999.99,
    imagen:
      "https://i.pinimg.com/736x/ab/57/3a/ab573a33d6639ac814bd3deaa9a56cfe.jpg",
    descripcion:
      "Tarjeta gráfica de última generación con 16GB VRAM, DLSS 4.0 y Ray Tracing avanzado. Rendimiento extremo para gaming 4K.",
    categoria: "Componentes",
    oferta: false,
    descOferta: "¡Bundle con juego gratis!",
    nuevoPrecio: 999.99,
  },
  {
    id: 8,
    nombre: "Mouse Vertical Ergonómico",
    precio: 35.0,
    imagen:
      "https://i.pinimg.com/1200x/5a/a4/fd/5aa4fd2765b55f3cf3d2d9a3ec55ae9c.jpg",
    descripcion:
      "Mouse de diseño vertical que reduce la tensión en la muñeca, con conexión inalámbrica y sensibilidad DPI ajustable.",
    categoria: "Periféricos",
    oferta: false,
    descOferta: "25% de descuento por ser producto ergonómico",
    nuevoPrecio: 26.25,
  },
  {
    id: 9,
    nombre: "Sistema de Sonido 5.1 con Subwoofer",
    precio: 299.0,
    imagen:
      "https://i.pinimg.com/736x/d4/e8/fc/d4e8fcac119b3b350568c1e392b01f34.jpg",
    descripcion:
      "Home Cinema 5.1 con 500W de potencia pico, audio envolvente y conectividad Bluetooth y óptica.",
    categoria: "Audio/Video",
    oferta: false,
    descOferta: "No aplica",
    nuevoPrecio: 299.0,
  },
  {
    id: 10,
    nombre: "Batería Externa 20000 mAh PD",
    precio: 55.99,
    imagen:
      "https://i.pinimg.com/736x/11/93/5f/11935fcce180f4098c699350b4fde9be.jpg",
    descripcion:
      "Power bank de alta capacidad con Power Delivery (PD) de 65W, capaz de cargar laptops, tabletas y teléfonos rápidamente.",
    categoria: "Accesorios Móviles",
    oferta: false,
    descOferta: "30% OFF, ¡llévala contigo a donde vayas!",
    nuevoPrecio: 39.19,
  },
  {
    id: 11,
    nombre: "Router Gaming Tri-Banda (Wi-Fi 7)",
    precio: 450.0,
    imagen:
      "https://i.pinimg.com/736x/79/ba/f9/79baf93f5caaf3afd6f34107c3cd880c.jpg",
    descripcion:
      "Router de próxima generación Wi-Fi 7 con tres bandas para una latencia ultrabaja y máxima cobertura para gaming en línea.",
    categoria: "Redes",
    oferta: false,
    descOferta: "No aplica",
    nuevoPrecio: 450.0,
  },
  {
    id: 12,
    nombre: "Tablet 11 pulgadas Pro (12GB RAM)",
    precio: 799.0,
    imagen:
      "https://i.pinimg.com/736x/50/65/a2/5065a23ebd93ae4662c23df5ede12a86.jpg",
    descripcion:
      "Tablet de alto rendimiento con pantalla AMOLED de 120Hz, 12GB de RAM y soporte para lápiz óptico.",
    categoria: "Tabletas",
    oferta: false,
    descOferta: "10% de descuento y funda de regalo",
    nuevoPrecio: 719.1,
  },
  {
    id: 13,
    nombre: "Auriculares In-Ear con Cancelación Activa de Ruido",
    precio: 169.99,
    imagen:
      "https://i.pinimg.com/736x/a9/27/b8/a927b83a22f71c072812dca7090f1dc6.jpg",
    descripcion:
      "Audífonos TWS (True Wireless Stereo) con ANC (Active Noise Cancellation) y 8 horas de batería.",
    categoria: "Audio",
    oferta: false,
    descOferta: "20% OFF en todos los colores",
    nuevoPrecio: 135.99,
  },
  {
    id: 14,
    nombre: "Kit de Iluminación RGB Inteligente",
    precio: 69.95,
    imagen:
      "https://i.pinimg.com/1200x/72/02/fc/7202fcaa411fe0c6ea52a570a0feb9f3.jpg",
    descripcion:
      "Tira LED de 5 metros con Wi-Fi, control por voz y millones de colores personalizables para ambientar tu setup.",
    categoria: "Hogar Inteligente",
    oferta: false,
    descOferta: "No aplica",
    nuevoPrecio: 69.95,
  },
  {
    id: 15,
    nombre: "Memoria RAM DDR5 32GB (2x16GB)",
    precio: 159.0,
    imagen:
      "https://i.pinimg.com/736x/d5/29/fb/d529fb1d87fbbbfd6c6f7814454dbad8.jpg",
    descripcion:
      "Kit de memoria RAM DDR5 de 32GB (6400 MHz) con disipador de calor y optimización para Intel/AMD.",
    categoria: "Componentes",
    oferta: false,
    descOferta: "Compra el kit y obtén 10% de rebaja",
    nuevoPrecio: 143.1,
  },
  {
    id: 16,
    nombre: "Máquina de Café Inteligente con Wi-Fi",
    precio: 185.0,
    imagen:
      "https://i.pinimg.com/736x/8d/a2/e1/8da2e12ee0f3cbdc62f4642d747d3513.jpg",
    descripcion:
      "Cafetera programable con conexión Wi-Fi. Inicia tu café desde la app o con comandos de voz.",
    categoria: "Hogar Inteligente",
    oferta: false,
    descOferta: "No aplica",
    nuevoPrecio: 185.0,
  },
  {
    id: 17,
    nombre: "Impresora 3D de Gran Volumen",
    precio: 650.0,
    imagen:
      "https://i.pinimg.com/1200x/9c/3e/f5/9c3ef5b2cf77b998eb11c96c505ee7bd.jpg",
    descripcion:
      "Impresora 3D con área de impresión de 300x300x400 mm y nivelación automática. Para aficionados y profesionales.",
    categoria: "Gadgets",
    oferta: false,
    descOferta: "Financiación sin intereses a 12 meses",
    nuevoPrecio: 650.0,
  },
  {
    id: 18,
    nombre: "Mousepad Gaming XL",
    precio: 29.99,
    imagen:
      "https://i.pinimg.com/1200x/0a/bb/64/0abb6482953bdb64e07f4737c18d2d01.jpg",
    descripcion:
      "Mousepad extragrande con base antideslizante, bordes cosidos y superficie de microfibra optimizada para sensores de alta precisión.",
    categoria: "Periféricos",
    oferta: false,
    descOferta: "No aplica",
    nuevoPrecio: 29.99,
  },
  {
    id: 19,
    nombre: "Cargador para Laptop USB-C 100W",
    precio: 64.99,
    imagen:
      "https://i.pinimg.com/736x/af/a2/fd/afa2fda9aa745fee38d7d44e1eb96c28.jpg",
    descripcion:
      "Adaptador de corriente compacto de 100W con tecnología GaN (Nitruro de Galio) para una carga más rápida y segura.",
    categoria: "Accesorios Móviles",
    oferta: false,
    descOferta: "Cupón de 10% adicional por ser accesorio",
    nuevoPrecio: 58.49,
  },
  {
    id: 20,
    nombre: "Kit de Seguridad para el Hogar",
    precio: 249.0,
    imagen:
      "https://i.pinimg.com/1200x/5a/a4/fd/5aa4fd2765b55f3cf3d2d9a3ec55ae9c.jpg",
    descripcion:
      "Sistema de alarma con cámara Wi-Fi, sensores de puertas y ventanas, y control desde la aplicación móvil.",
    categoria: "Hogar Inteligente",
    oferta: false,
    descOferta: "No aplica",
    nuevoPrecio: 249.0,
  },
  {
    id: 21,
    nombre: "Volante y Pedales para Simulador de Carreras",
    precio: 499.0,
    imagen:
      "https://i.pinimg.com/1200x/79/75/e3/7975e3160bc2abd7687ac18f71463fd6.jpg",
    descripcion:
      "Volante con Force Feedback y pedales de metal ajustables. Compatible con PC, Xbox y PlayStation.",
    categoria: "Gaming",
    oferta: true,
    descOferta: "Precio reducido por Black Friday",
    nuevoPrecio: 399.2,
  },
  {
    id: 22,
    nombre: "Lector de Libros Electrónicos (E-Reader)",
    precio: 139.99,
    imagen:
      "https://i.pinimg.com/1200x/08/1f/16/081f1678e83633e752856e3c226187f2.jpg",
    descripcion:
      "E-Reader con pantalla de tinta electrónica de 7 pulgadas, luz frontal ajustable y resistente al agua. 32GB de almacenamiento.",
    categoria: "Gadgets",
    oferta: false,
    descOferta: "No aplica",
    nuevoPrecio: 139.99,
  },
  {
    id: 23,
    nombre: "Software de Edición de Video (Licencia Anual)",
    precio: 99.0,
    imagen:
      "https://i.pinimg.com/736x/e1/95/1d/e1951d2942329f0995abae68c8b3a0a8.jpg",
    descripcion:
      "Licencia de 1 año para software profesional de edición de video, con herramientas de IA y efectos especiales.",
    categoria: "Software",
    oferta: false,
    descOferta: "50% de descuento en la primera suscripción",
    nuevoPrecio: 49.5,
  },
  {
    id: 24,
    nombre: 'Monitor Curvo Ultrawide 34"',
    precio: 599.99,
    imagen:
      "https://i.pinimg.com/736x/ca/bd/d3/cabdd3b4f50e47c4313de178c87f02e5.jpg",
    descripcion:
      "Monitor curvo Ultrawide (21:9) de 34 pulgadas, resolución WQHD (3440x1440), 144Hz de tasa de refresco y panel VA.",
    categoria: "Periféricos",
    oferta: false,
    descOferta: "Descuento por liquidación de stock (15% OFF)",
    nuevoPrecio: 509.99,
  },
  {
    id: 25,
    nombre: "Minicomponente Bluetooth de Alta Fidelidad",
    precio: 279.0,
    imagen:
      "https://i.pinimg.com/1200x/9f/05/90/9f0590775c740abf39b4572afd6c8ef9.jpg",
    descripcion:
      "Sistema de audio Hi-Fi con reproductor de CD, radio FM/DAB+ y streaming Bluetooth de alta resolución.",
    categoria: "Audio",
    oferta: false,
    descOferta: "No aplica",
    nuevoPrecio: 279.0,
  },
];

interface Categoria {
  id: number;
  nombre: string;
}

const categorias: Categoria[] = [
  { id: 1, nombre: "Computadoras" },
  { id: 2, nombre: "Periféricos" },
  { id: 3, nombre: "Componentes" },
];

interface estadoProd {
  id: number;
  nombre: string;
}

const estadosProd: estadoProd[] = [{ id: 2, nombre: "oferta" }];
/* fin datos de prueba */

export const Productos = () => {
  /* estados de parametors */
  const [searchParams] = useSearchParams();
  /* estados para los estilos */
  //const [isSearch, setIsSearch] = useState(false);
  /* estado para la búsqueda y filtrado */
  const [terminoBusqueda, setTerminoBusqueda] = useState("");
  const [categoria, setCategoria] = useState("");
  const [estadoProd, setEstadoProd] = useState("");
  /* estado para abrir modal de filtro */
  const [openFilter, setOpenFilter] = useState(false);
  /* estado para la paginación */
  const [pagina, setPagina] = useState(1);
  /* estado para los productos filtrados */
  const [productosFiltrados, setProductosFiltrados] =
    useState<Producto[]>(productos);

  /* variable que indica el límite de productos por página */
  const limitePorPagina = 10;

  /* funcion de filtro */
  const filtrarProductos = () => {
    const filtrados = productos.filter((producto) => {
      return (
        (categoria === producto.categoria || categoria === "") &&
        (producto.nombre
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
          terminoBusqueda === "") &&
        (estadoProd === "" || producto.oferta)
      );
    });
    return filtrados;
  };

  /* aplicar filtro */
  const cancelarfiltro = () => {
    setCategoria("");
    setEstadoProd("todos");
    setPagina(1);
  };

  /* efecto para filtrar productos */
  useEffect(() => {
    setProductosFiltrados(filtrarProductos());
    setPagina(1);
  }, [terminoBusqueda, categoria, estadoProd]);

  /* use effect para filtros desde parametros */
  useEffect(() => {
    const mostrarOfertas = searchParams.get("oferta") === "true";
    if (mostrarOfertas) {
      setProductosFiltrados(productos.filter((p) => p.oferta));
    } else {
      setProductosFiltrados(productos);
    }
  }, [searchParams, productos]);

  /* total de páginas */
  const totalPaginas = Math.ceil(productosFiltrados.length / limitePorPagina);

  /* productos de la página actual */
  const productosPagina = productosFiltrados.slice(
    (pagina - 1) * limitePorPagina,
    pagina * limitePorPagina
  );

  /* función para ir a la siguiente página */
  const siguientePagina = () => {
    if (pagina < totalPaginas) {
      setPagina(pagina + 1);
    }
  };

  /* función para ir a la página anterior */
  const paginaAnterior = () => {
    if (pagina > 1) {
      setPagina(pagina - 1);
    }
  };

  /* efecto para el scroll suave al inicio de la pagina o al inicio de la seccion de productos*/
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pagina, terminoBusqueda]);

  useEffect(() => {
    if (pagina === 1) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [categoria]);

  const navigate = useNavigate();

  const handleDetailProduct = (producto: Producto) => {
    /* antes limpiar sesionstorage productoDetalle */
    sessionStorage.removeItem("productoDetalle");
    sessionStorage.setItem("productoDetalle", JSON.stringify(producto));
    navigate("/detallesProducto");
  };

  return (
    <>
      <div
        id="productos"
        className="pb-6 bg-white h-auto font-inter mt-12 w-full"
      >
        {/* <h2 className="text-2xl font-bold text-center text-white mb-4 font-ubuntu">
        Nuestros Productos
      </h2> */}
        <div className="min-h-dvh">
          {/* Inicio Header barra de busqueda y filtrado */}
          <div className="flex flex-col gap-1 justify-center w-full sticky top-12 z-10 bg-gray-300 mb-1  items-center">
            <div className="px-2 py-2 max-w-[500px] w-full sm:max-w-[600px]">
              <div className="flex gap-3 w-full">
                {/* Botón de busqueda*/}
                <button
                  // Estilos para el botón circular de la izquierda (gris, redondeado)
                  className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shrink-0"
                >
                  <Search />
                </button>
                {/* Input de Búsqueda */}
                <input
                  type="text"
                  className="bg-white gray-950 text-black px-3 py-1 rounded-full w-full m-0 
         placeholder-gray-300 focus:outline-none focus:ring-1 transition-all duration-300 max-w-[400px]"
                  placeholder="Buscar productos..."
                  value={terminoBusqueda}
                  onChange={(e) => setTerminoBusqueda(e.target.value)}
                />
                {/* boton de filtrado */}
                <button
                  onClick={() => {
                    console.log("abrir modal de filtro");
                    setOpenFilter(!openFilter);
                  }}
                  className="bg-white text-black rounded-md w-10 h-10 flex items-center justify-center px-1.5"
                >
                  <SlidersHorizontal />
                </button>
              </div>
            </div>
          </div>
          {/* Fin Header barra de busqueda y filtrado */}

          {/* Inicio grid productos */}
          <div
            className="grid grid-cols-1 gap-1.5 px-6 py-1.5 max-w-[420px] mx-auto
        /* estilos para tablets */
        sm:grid-cols-2 sm:gap-2.5 sm:p-1 sm:max-w-[800px]
        /* estilos para pantallas grandes */
        md:grid-cols-3 md:max-w-[1100px]"
          >
            {productosPagina.map((producto) => (
              /* Card de producto */
              <div
                key={producto.id + "-" + producto.nombre}
                className="bg-white rounded-xl shadow-lg flex flex-col 
            border border-gray-200 overflow-hidden my-1 h-auto"
              >
                <div className="w-full h-65 flex justify-center items-center mb-4 bg-gray-100 rounded-lg">
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="w-full h-full object-fill rounded-lg"
                  />
                </div>

                <div className="flex flex-col px-4 text-left text-gray-800 w-full mb-1 h-auto line-clamp-3">
                  {!producto.oferta && (
                    <p className="text-gray-900 font-bold text-xl ">
                      ${producto.precio.toFixed(2)}
                    </p>
                  )}
                  <div className="flex justify-between">
                    {producto.oferta && (
                      <div>
                        <div className="flex justify-between w-full">
                          <p className="text-gray-900 font-bold text-xl line-through">
                            ${producto.precio.toFixed(2)}
                          </p>
                          <p className="text-blue-700 font-bold text-xl ">
                            ${producto.nuevoPrecio?.toFixed(2)}
                          </p>
                        </div>
                        <div className="bg-red-500 px-2 py-1 rounded-md mb-2 w-auto">
                          <span className="text-sm text-white ">
                            {producto.descOferta}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="pr-15">
                    <h2 className="line-clamp-4">{producto.nombre}</h2>
                  </div>
                </div>

                <div
                  className="flex justify-between items-center w-full px-1 mt-auto 
            relative p-1"
                >
                  <button
                    onClick={() => handleDetailProduct(producto)}
                    className="bg-gray-900 text-white border border-white rounded-tl-lg rounded-br-xl w-10 h-10 flex justify-center items-center absolute bottom-0 right-0 z-0"
                    aria-label="Añadir al carrito"
                  >
                    <Plus />
                  </button>
                </div>
              </div>
              /* Fin Card de producto */
            ))}
          </div>
          {/* Fin grid productos */}
        </div>
        {/* Inicio Paginación botones */}
        <div className="flex gap-2.5 justify-center mt-4">
          <button
            className="bg-blue-800 text-white py-1 px-2 rounded-md hover:bg-blue-600 disabled:bg-gray-400 border border-gray-200"
            onClick={paginaAnterior}
            disabled={pagina === 1}
          >
            Anterior
          </button>
          <span className="text-lg bg-white border border-black-500 p-1 rounded-md">
            Página {pagina} de {totalPaginas}
          </span>
          <button
            className="bg-blue-800 text-white py-1 px-2 rounded-md hover:bg-blue-600 disabled:bg-gray-400 border border-gray-200"
            onClick={siguientePagina}
            disabled={pagina === totalPaginas}
          >
            Siguiente
          </button>
        </div>
        {/* Fin Paginación botones */}
      </div>
      {/* Modal del filtro   (Deberia ser un formulario si hay mas de 300 productos y el filtrado se hace complejo) */}
      {openFilter && (
        <>
          <div className="fixed inset-0 z-10 bg-black opacity-70"></div>
          <div className="h-80 w-90 p-4 fixed top-0 bottom-0 left-0 right-0 my-auto mx-auto z-10 bg-gray-900 border border-gray-900 rounded-md shadow-lg flex flex-col gap-4 text-white">
            <h2>Filtro de productos</h2>
            <div className="flex flex-col gap-2">
              <label htmlFor="categoria">Categoría:</label>
              <select
                id="categoria"
                name="categoria"
                className="border border-gray-700 rounded-md p-1 bg-gray-800 text-white"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              >
                <option value="">Todos</option>
                {categorias.map((categoria) => (
                  <option key={categoria.id} value={categoria.nombre}>
                    {categoria.nombre}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="estado">Estado:</label>
              <select
                id="categoria"
                name="categoria"
                className="border border-gray-700 rounded-md p-1 bg-gray-800 text-white"
                value={estadoProd}
                onChange={(e) => setEstadoProd(e.target.value)}
              >
                <option value="">Todos</option>
                {estadosProd.map((estado) => (
                  <option key={estado.id} value={estado.nombre}>
                    {estado.nombre}
                  </option>
                ))}
              </select>
            </div>
            {/* botones */}
            <div className="flex justify-between gap-2 mt-auto">
              <button
                onClick={() => {
                  cancelarfiltro();
                  setOpenFilter(false);
                }}
                className="bg-gray-700 text-white py-1 px-3 rounded-md hover:bg-gray-600"
              >
                Cancelar y quitar
              </button>
              <button
                onClick={() => {
                  setOpenFilter(false);
                }}
                className="bg-blue-700 text-white py-1 px-3 rounded-md hover:bg-gray-600"
              >
                Aplicar Filtros
              </button>
            </div>
          </div>
        </>
      )}
      {/* Fin modal del filtro */}
    </>
  );
};
