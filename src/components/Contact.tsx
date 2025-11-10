import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export const Contact = () => {
  // Datos de Contacto
  const contactDetails = [
    {
      icon: Mail, // Usamos el componente del icono directamente
      title: "Correo Electrónico",
      value: "hola@superheroshop.com",
      link: "mailto:hola@superheroshop.com",
    },
    {
      icon: Phone, // Usamos el componente del icono directamente
      title: "Teléfono",
      value: "+591 755 12345",
      link: "tel:+59175512345",
    },
    {
      icon: MapPin, // Usamos el componente del icono directamente
      title: "Oficina Central",
      value: "Av. Principal #123, Ciudad Metrópolis",
      link: "https://maps.app.goo.gl/TUwzK62k8xNnN4S7A", // Ejemplo de Google Maps link
    },
  ];

  // Datos de Redes Sociales
  const socialLinks = [
    { name: "Twitter", icon: Twitter, link: "https://twitter.com/superhero" },
    {
      name: "Instagram",
      icon: Instagram,
      link: "https://instagram.com/superhero",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      link: "https://linkedin.com/company/superhero",
    },
  ];

  return (
    <section id="contacto" className="py-16 md:py-24 bg-gray-50 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl uppercase">
            Contáctanos
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Estamos disponibles para ayudarte con cualquier consulta.
          </p>
        </div>

        {/* Contenido: Grid de Información */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Columna 1 & 2: Detalles de Contacto */}
          <div className="md:col-span-2 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactDetails.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
                >
                  <div className="shrink-0 text-indigo-600 mr-4">
                    {/* Renderizamos el componente de icono de Lucide */}
                    <item.icon size={30} strokeWidth={2} />
                  </div>
                  <div>
                    <dt className="text-lg font-medium text-gray-900">
                      {item.title}
                    </dt>
                    <dd className="mt-1 text-base text-indigo-600 truncate">
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

            {/* Horario (Información Adicional) */}
            <div className="mt-8 p-6 bg-indigo-50 border-l-4 border-indigo-500 rounded-lg">
              <p className="text-lg font-semibold text-indigo-800">
                Horario de Atención:
              </p>
              <p className="mt-1 text-indigo-700">
                Lunes a Viernes: 9:00 - 18:00 (GMT-4)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
