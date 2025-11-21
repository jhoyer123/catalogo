import { Link } from "react-router-dom";

const Warning = () => {
  return (
    <section className="bg-[#F5F5F5] dark:bg-[#262626] py-8 pt-3 px-6 font-inter text-center">
      <div className="max-w-4xl mx-auto flex flex-col gap-6 md:py-12 md:gap-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A0A0A] dark:text-[#FFFFFF] leading-tight">
            Lleva tu experiencia tecnológica al siguiente nivel
          </h2>
          <p className="text-base md:text-lg text-[#525252] dark:text-[#D4D4D4] max-w-2xl mx-auto leading-relaxed">
            Encuentra los mejores productos, ofertas exclusivas y la atención
            que mereces. ¡Descubre por qué somos la elección número uno en
            tecnología!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-2">
          <Link
            to="/catalogo?oferta=1"
            className="font-semibold bg-[#404040] dark:bg-[#525252] text-[#FFFFFF] py-3 px-10 rounded-lg shadow-lg shadow-[#A3A3A3]/30 hover:bg-[#525252] dark:hover:bg-[#737373] transition-all duration-300 transform hover:scale-105
            md:py-4 md:px-12 md:text-lg"
          >
            Ver Ofertas Especiales
          </Link>

          <Link
            to="/catalogo"
            className="font-semibold bg-transparent border-2 border-[#404040] dark:border-[#737373] text-[#404040] dark:text-[#E5E5E5] py-3 px-10 rounded-lg hover:bg-[#404040] hover:text-[#FFFFFF] dark:hover:bg-[#737373] transition-all duration-300
            md:py-4 md:px-12 md:text-lg"
          >
            Explorar Productos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Warning;
