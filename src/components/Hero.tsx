export const Hero = () => {
  return (
    <div className="w-full min-h-dvh font-inter flex flex-col justify-center items-center overflow-hidden">
      {/* Fondo Hero */}
      <div className="absolute inset-0 bg-[url(https://i.pinimg.com/1200x/5f/8f/2f/5f8f2fd0c354d6494a4670f53ba84f36.jpg)] bg-cover bg-center"></div>
      {/* Fin Fondo Hero */}
      {/* Contenido Hero */}
      <div className="p-4 z-10 flex flex-col items-center justify-center min-h-dvh text-white bg-gray-500/30">
        {/* Titulo principal */}
        <div className="mb-3">
          <h1 className="text-5xl min-[320px]:text-6xl font-ubuntu text-center font-semibold">
            SUPER HERO
          </h1>
          <h2 className="text-3xl font-ubuntu text-center mt-2">
            Tu tienda de confianza
          </h2>
        </div>
        {/* lo que hace el negocio */}
        <div>
          <img
            src="https://i.pinimg.com/1200x/e6/44/a9/e644a9e8bc7664e783b74d5b63503662.jpg"
            alt="Logo Super Hero"
            className="w-20 h-20 mb-4 rounded-full mx-auto border-4 border-white shadow-lg"
          />
          <div className="px-4 text-center">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              error maxime. Assumenda vero officiis cupiditate inventore illum
              rem repellat officia dignissimos debitis dolor.
            </p>
          </div>
        </div>

        {/* Fin Titulo principal */}
        <div className="bottom-10 flex flex-col items-center px-4 text-gray-800">
          <p className="mt-4 text-xl text-center text-white">
            Explora nuestros productos y ofertas exclusivas
          </p>
          <a
            href="#productos"
            className="mt-6 px-6 py-3 bg-black/90 rounded-lg hover:bg-gray-800 text-white font-inter transition-colors border border-white shadow-lg animate-[wiggle_1s_ease-in-out_infinite]"
          >
            Ver Productos
          </a>
        </div>
      </div>
      {/* Fin Contenido Hero */}
    </div>
  );
};
