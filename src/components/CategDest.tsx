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
    nombre: "Accesorios y Periféricos",
    imagen:
      "https://i.pinimg.com/736x/d7/72/9c/d7729c8daa7b03948071af8d60475601.jpg",
  },
];

const CategDest = () => {
  return (
    <section className="px-4 py-10 bg-blue-50 dark:bg-gray-900 min-h-screen font-inter">
      {/* Titulo y descripcion seccion categorias destacadas */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-blue-400 font-ubuntu mb-7">
          Categorías Destacadas
        </h2>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300 max-w-sm mx-auto">
          Explora nuestras categorías más populares y encuentra el equipo
          perfecto para ti.
        </p>
      </div>
      {/* Fin Titulo y descripcion seccion categorias destacadas */}
      {/*  Lista de categorias destacadas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {categoriasDestacadas.map((categoria) => (
          <div
            key={categoria.id}
            className="flex flex-col justify-center items-center w-full py-4 px-2 rounded-lg shadow-md bg-gray-700"
          >
            <img
              src={categoria.imagen}
              alt={`imagen de ${categoria.nombre}`}
              className="w-60 h-60 object-cover mb-6 rounded-full  shadow-xl shadow-cyan-100/50"
            />
            <h3 className="text-xl text-center font-semibold text-white/80 dark:text-gray-200">
              {categoria.nombre}
            </h3>
            <Link
              to={`/categorias/${categoria.id}`}
              className="text-white hover:underline bg-blue-700 px-8 py-2 rounded-2xl mt-4"
            >
              Ver más
            </Link>
          </div>
        ))}
      </div>
      {/* Fin Lista de categorias destacadas */}
    </section>
  );
};

export default CategDest;
