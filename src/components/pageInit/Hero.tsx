import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full z-0">
      {/* <!-- Fondo Hero --> */}
      <div className="absolute inset-0 bg-[url(https://i.pinimg.com/1200x/ad/e8/86/ade8868b13ce7dfa53e259099a5f78a4.jpg)] bg-cover opacity-90"></div>
      {/* <!-- Fin Fondo Hero --> */}
      {/* <!-- Contenido Hero --> */}
      <div className="p-4 relative z-10 flex flex-col items-center justify-center h-screen text-white bg-gray-500/30 gap-20">
        {/* <!-- Titulo principal --> */}
        <div className="p-4 mx-4">
          <h1 className="text-5xl sm:text-4xl lg:text-5xl font-bold text-center font-ubuntu mb-3 md:text-6xl">
            TechZone
          </h1>
          <h2 className="text-xl sm:text-4xl lg:text-5xl font-bold text-center font-ubuntu">
            Innovación en tus manos
          </h2>
        </div>
        {/* <!-- Fin Titulo principal --> */}
        {/* contenido llamativo */}
        <div className="flex flex-col items-center p-4 text-gray-800 relative">
          <div className="absolute inset-0 opacity-30 bg-black rounded-lg"></div>
          <p className="mt-4 text-xl text-center text-white font-ubuntu z-10 max-w-md mb-10">
            Bienvenido a TechZone Tecnología de última generación a tu alcance.
            Encuentra las mejores laptops, PCs y accesorios.
          </p>
          <Link
            to="/catalogo"
            className="z-10 mt-6 px-6 py-3 bg-black/90 rounded-lg hover:bg-gray-800 text-white font-inter transition-colors border border-white shadow-lg animate-bounce"
          >
            Ver Catálogo
          </Link>
        </div>
        {/* Fin contenido llamativo */}
      </div>
      {/* <!-- Fin Contenido Hero --> */}
    </section>
  );
};
