import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="w-full max-h-dvh z-0 font-inter">
      {/* <!-- Fondo Hero --> */}
      <div className="absolute inset-0 bg-[url(https://i.pinimg.com/1200x/5f/8f/2f/5f8f2fd0c354d6494a4670f53ba84f36.jpg)] bg-cover bg-center min-h-dvh"></div>
      {/* <!-- Fin Fondo Hero --> */}
      {/* <!-- Contenido Hero --> */}
      <div className="p-4 relative z-10 flex flex-col items-center justify-center min-h-dvh text-white bg-gray-500/30 gap-20">
        {/* <!-- Titulo principal --> */}
        <div className="p-4 mx-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center font-ubuntu">
            SUPER HERO
          </h1>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-center font-ubuntu">
            Tu tienda de confianza
          </h2>
        </div>
        {/* <!-- Fin Titulo principal --> */}
        {/* logo */}
        <img
          src="https://i.pinimg.com/1200x/e6/44/a9/e644a9e8bc7664e783b74d5b63503662.jpg"
          alt="logo"
          className="w-18 h-18 mx-auto rounded-full my-4"
        />
        {/* contenido llamativo */}
        <div className="flex flex-col items-center px-4 text-gray-800">
          <p className="mt-4 text-xl text-center text-white">
            Explora nuestros productos y ofertas exclusivas
          </p>
          <Link
            to="/productos"
            className="mt-6 px-6 py-3 bg-black/90 rounded-lg hover:bg-gray-800 text-white font-inter transition-colors border border-white shadow-lg"
          >
            Ver Productos
          </Link>
        </div>
        {/* Fin contenido llamativo */}
      </div>
      {/* <!-- Fin Contenido Hero --> */}
    </section>
  );
};
