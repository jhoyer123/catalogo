import { Mail, Phone, MapPin } from "lucide-react";

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
      className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 font-inter transition-colors duration-300"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[750px]">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="mt-2 text-3xl font-extrabold text-blue-700 dark:text-blue-400 sm:text-4xl uppercase">
            Contáctanos
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-md">
            Nuestro equipo de especialistas está listo para ayudarte.
          </p>
        </div>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Columna principal (datos de contacto) */}
          <div className="md:col-span-2 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-1">
              {contactDetails.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                >
                  <div className="shrink-0 text-blue-600 dark:text-blue-400 mr-4">
                    <item.icon size={30} strokeWidth={2} />
                  </div>
                  <div>
                    <dt className="text-lg font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </dt>
                    <dd className="mt-1 text-sm text-blue-600 dark:text-blue-300 wrap-break-words">
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

            {/* Horario de atención */}
            <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 dark:border-blue-400 rounded-lg shadow-sm">
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
          </div>

          {/* Columna adicional (opcional: mapa o mensaje corto) */}
          <div className="hidden lg:flex flex-col justify-center bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              ¿Dónde estamos?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Visítanos en nuestra tienda principal en La Paz o contáctanos por
              correo para atención personalizada.
            </p>
            <a
              href="https://maps.app.goo.gl/TUwzK62k8xNnN4S7A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition duration-300 text-center"
            >
              Ver en Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
