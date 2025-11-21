import { Link } from "react-router-dom";

interface CategoriaInt {
  id: number;
  nombre: string;
  imagen: string;
}

const categoriasDestacadas: CategoriaInt[] = [
  {
    id: 1,
    nombre: "Laptops y Notebooks",
    imagen:
      "https://i.pinimg.com/1200x/d6/39/b8/d639b89d0a1e7ea5973e912d9c2e8b02.jpg",
  },
  {
    id: 2,
    nombre: "Computadoras de Escritorio",
    imagen:
      "https://i.pinimg.com/1200x/66/e8/65/66e865d3fc8fbddcdf1faf01e0c10a63.jpg",
  },
  {
    id: 3,
    nombre: "Periféricos",
    imagen:
      "https://i.pinimg.com/736x/d7/72/9c/d7729c8daa7b03948071af8d60475601.jpg",
  },
];

const CategDest = () => {
  return (
    // Sección principal: Fondo Gris Claro (FAFAFA)
    <section className="px-4 py-16 bg-[#FAFAFA] h-auto font-inter">
      {/* --- Título y Descripción --- */}
      <div className="text-center mb-12 max-w-3xl mx-auto px-4">
        <h2
          className="
          text-3xl sm:text-4xl lg:text-5xl font-extrabold font-ubuntu mb-4
          text-[#0A0A0A] 
        "
        >
          Categorías Destacadas
        </h2>
        <p
          className="
          mt-2 text-lg sm:text-xl text-[#737373] 
        "
        >
          Explora nuestras categorías más populares y encuentra el equipo
          perfecto para tu espacio de trabajo o gaming.
        </p>
      </div>

      {/* --- Lista de Categorías Destacadas (Grid Adaptable) --- */}
      <div
        className="
        flex flex-wrap justify-center gap-8 px-4 sm:px-0
      "
      >
        {categoriasDestacadas.map((categoria) => (
          <div
            key={categoria.id}
            className="
              group relative flex flex-col items-center justify-start
              w-full max-w-sm sm:max-w-md lg:max-w-[380px]
              p-6 sm:p-8 rounded-2xl
              bg-white                                      /* Fondo Blanco Limpio */
              shadow-lg border border-[#E5E5E5]             /* Borde y Sombra Sutil */
              hover:shadow-xl hover:border-[#D4D4D4]
              transition-all duration-300 ease-in-out
              hover:-translate-y-1                          /* Efecto Elevación */
            "
          >
            {/* Contenedor de Imagen (Para manejar mejor el hover) */}
            <div
              className="
                relative w-60 h-60 mb-6 
                rounded-full overflow-hidden 
                border-4 border-[#F5F5F5]
                shadow-inner shadow-[#A3A3A3]/20
            "
            >
              <img
                src={categoria.imagen}
                alt={`imagen de ${categoria.nombre}`}
                className="w-full h-full object-cover 
                    transform group-hover:scale-105 transition-transform duration-500
                  "
              />
              {/* Overlay sutil para la imagen */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>

            {/* Contenido de la Ficha */}
            <div className="flex flex-col justify-center items-center text-center w-full">
              <h3
                className="
                text-2xl font-semibold text-[#171717] leading-tight mb-2
                group-hover:text-[#0A0A0A] transition-colors duration-300
              "
              >
                {categoria.nombre}
              </h3>

              <p className="text-sm text-[#A3A3A3] mb-4 uppercase tracking-widest">
                {categoria.nombre.split(" ")[0]}
              </p>

              <Link
                to={`catalogo?cat=${categoria.nombre}`}
                state={{ from: location.pathname + location.search }}
                className="
                  inline-flex items-center justify-center 
                  text-sm font-bold uppercase tracking-wider
                  px-8 py-3 rounded-full mt-2 w-full max-w-[200px]
                  
                  /* Colores de Botón Alto Contraste (Light) */
                  bg-[#171717] text-white
                  hover:bg-[#404040] transition-colors duration-300
                  shadow-lg shadow-black/10
                "
              >
                Ver Equipos
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategDest;
