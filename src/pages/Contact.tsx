import { Mail, Phone, MapPin, ArrowDown } from "lucide-react";
import { Mapa } from "../components/contact/Mapa";

export const Contact = () => {
  // Datos de contacto
  const contactDetails = [
    {
      icon: Mail,
      title: "Correo Electrónico",
      value: "contacto@technova.com",
      link: "mailto:contacto@technova.com",
    },
    {
      icon: Phone,
      title: "Teléfono",
      value: "+591 755 43210",
      link: "tel:+59175543210",
    },
    {
      icon: MapPin,
      title: "Oficina Central",
      value: "Av. Libertador #456, La Paz, Bolivia",
      link: "https://maps.app.goo.gl/TUwzK62k8xNnN4S7A",
    },
  ];

  return (
    <section
      id="contactos"
      className="pt-16 pb-10 md:py-24 bg-gray-50 dark:bg-gray-800 font-inter transition-colors duration-300
      md:text-xl"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1000px]">
        {/* Encabezado */}
        <div className="text-center mb-12 flex flex-col gap-6 md:gap-10">
          <div className="flex flex-col md:gap-8">
            <h2 className="mt-2 text-3xl font-extrabold text-blue-700 dark:text-blue-400 sm:text-4xl uppercase font-ubuntu">
              Ponte en contacto con nosotros
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300 text-md">
              Estamos aquí para ayudarte con cualquier consulta sobre nuestros
              productos, pedidos o servicios.
            </p>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="flex flex-wrap gap-6 items-center justify-center">
          <img
            src="https://i.pinimg.com/1200x/57/2e/14/572e1453e353f60c803bd01c4ea68a05.jpg"
            alt="imagen de atención al cliente"
            className="rounded-lg border max-w-[500px] mx-auto w-full"
          />
          <div className="flex flex-col gap-8">
            {contactDetails.map((item, index) => (
              <div
                key={index}
                className="flex w-full max-w-[400px]  py-4 px-15 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="shrink-0 text-blue-700 dark:text-blue-400 mr-4">
                  <item.icon size={30} strokeWidth={2} className="text-black" />
                </div>
                <div>
                  <dt className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </dt>
                  <dd className="mt-1 text-sm text-blue-700 dark:text-blue-300 wrap-break-words">
                    <a
                      href={item.link}
                      target={
                        item.link.startsWith("http") ||
                        item.link.startsWith("mailto") ||
                        item.link.startsWith("tel")
                          ? "_blank"
                          : "_self"
                      }
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {item.value}
                    </a>
                  </dd>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Horario de atención */}
        <div className="flex flex-col justify-center gap-6 items-center">
          <div className="flex flex-col justify-center gap-6 items-center lg:flex-row lg:gap-10 mt-10">
            <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 dark:border-blue-400 rounded-lg shadow-sm w-full">
              <p className="text-lg font-semibold text-blue-800 dark:text-blue-300">
                Horario de Atención:
              </p>
              <p className="mt-1 text-blue-700 dark:text-blue-200">
                Lunes a Viernes: 9:00 - 18:00
              </p>
              <p className="text-blue-700 dark:text-blue-200">
                Sábados: 9:00 - 13:00
              </p>
            </div>
            {/* Columna adicional (opcional: mapa o mensaje corto) */}
            <div className="lg:flex flex-col justify-center bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                ¿Dónde estamos?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-9">
                Visítanos en nuestra tienda principal en La Paz o contáctanos
                por correo para atención personalizada.
              </p>
              <ArrowDown className="mx-auto w-10 h-10 text-blue-700 dark:text-blue-400 animate-bounce" />
            </div>
          </div>
          <Mapa />
        </div>
      </div>
    </section>
  );
};
