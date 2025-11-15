import { Link } from "react-router-dom";

const Warning = () => {
  return (
    <div className="bg-blue-50 dark:bg-yellow-900 pb-7 py-4 font-inter text-center px-10">
      <div className="flex flex-col gap-5 md:py-10 md:gap-10">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Lleva tu experiencia tecnológica al siguiente nivel
          </h2>
          <p className="m-4">
            Encuentra los mejores productos, ofertas exclusivas y la atención
            que mereces. ¡Descubre por qué somos la elección número uno en
            tecnología!
          </p>
        </div>
        <Link
          to="/ofertas"
          className="font-semibold bg-blue-700 text-white py-2 px-6 rounded-lg mx-auto shadow-md shadow-blue-500 hover:bg-blue-600 transition-colors duration-300 animate-bounce
          md:py-3 md:px-8"
        >
          Ver Ofertas
        </Link>
      </div>
    </div>
  );
};

export default Warning;
