import { Eye, Lightbulb, ShieldMinus } from "lucide-react";

interface itemsAbout {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}

const aboutItems: itemsAbout[] = [
  {
    icon: Eye,
    title: "Misión",
    description:
      "ofrecer productos tecnológicos de alta calidad con un servicio rápido, seguro y cercano.",
  },
  {
    icon: Lightbulb,
    title: "Visión",
    description:
      "ser la tienda de tecnología líder en innovación, confianza y atención al cliente en todo el país.",
  },
  {
    icon: ShieldMinus,
    title: "Valores",
    description:
      "compromiso, honestidad, excelencia, innovación y servicio humano.",
  },
];

export const About = () => {
  return (
    <section className="pt-10 bg-gray-50 dark:bg-gray-900 h-auto w-full font-inter">
      {/* imgen portada */}
      <img
        src="https://i.pinimg.com/1200x/8d/c2/f0/8dc2f090577b59234560a901e4f05c8c.jpg"
        alt="fondo about us technova imagen de una computadora moderna"
        className="w-full mb-6"
      />
      {/* Fin imagen portada */}
      <div className="max-w-[750px] mx-auto px-4">
        {/* Titulo y descripcion seccion acerca de */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-blue-700 font-ubuntu">
            Acerca de{" "}
            <span className="text-gray-900 dark:text-white">TechNova</span>
          </h2>
          <p className="mt-2 text-md text-gray-900 dark:text-gray-300 max-w-sm mx-auto">
            Conectando personas con la mejor tecnología, creemos que la
            innovación debe estar al alcance de todos. Desde nuestros inicios,
            trabajamos para ofrecer productos de calidad, precios justos y
            atención personalizada.
          </p>
        </div>
        {/* Fin Titulo y descripcion seccion acerca de */}

        {/* Contenido principal Historia*/}
        <div className="flex flex-col gap-8 items-center text-center mb-8">
          <img
            src="https://i.pinimg.com/736x/12/52/0e/12520e6a9648abb7c452545d6d836b3e.jpg"
            alt="imagen de la tienda technova"
          />
          <div className="flex flex-col px-4 gap-5">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Nuestra historia
            </h2>
            <p className="mt-2 text-md text-gray-900 dark:text-gray-300 max-w-sm mx-auto">
              Nacimos con la visión de acercar la tecnología a cada hogar y
              negocio. Con esfuerzo y pasión, pasamos de un pequeño
              emprendimiento a una tienda reconocida por su compromiso,
              confianza y atención al detalle. Hoy seguimos creciendo,
              impulsados por la satisfacción de nuestros clientes y la confianza
              que depositan en nosotros.
            </p>
          </div>
        </div>
        {/* Fin historia */}

        {/* Mision vision */}
        <div className="grid grid-col-1 gap-4">
          {aboutItems.map((item) => (
            <div
              key={item.title}
              className="text-center p-6 bg-white rounded-lg shadow-md"
            >
              <item.icon className="mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-800 mb-6">{item.description}</p>
            </div>
          ))}
        </div>
        {/* Fin mision vision */}

        {/* Llamada a la acción */}
        <div className="text-center pt-4 pb-8">
          <a
            href="/contacto"
            className="inline-block px-8 py-3 text-base font-medium rounded-full text-white bg-blue-700 shadow-md shadow-blue-500 mt-4 animate-bounce"
          >
            Contáctanos Hoy
          </a>
        </div>
      </div>
    </section>
  );
};
