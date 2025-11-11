import { Laptop, Truck, ShieldCheck } from "lucide-react";

interface AboutUsProps {}

/**
 * Sección "Acerca de Nosotros" para una tienda de tecnología.
 * Optimizada para vista móvil, con iconos de Lucide React y estilo moderno.
 */
export const About = ({}: AboutUsProps) => {
  // Características principales de la tienda
  const features = [
    {
      icon: Laptop,
      title: "Expertos en Tecnología",
      description:
        "En TechNova seleccionamos cuidadosamente computadoras, laptops y periféricos de alto rendimiento, ideales para profesionales, estudiantes y gamers exigentes.",
    },
    {
      icon: Truck,
      title: "Envío Rápido y Seguro",
      description:
        "Enviamos a todo el país con seguimiento en tiempo real. Empaques reforzados y entregas garantizadas en menos de 72 horas.",
    },
    {
      icon: ShieldCheck,
      title: "Soporte y Garantía",
      description:
        "Cada equipo cuenta con garantía oficial y soporte técnico personalizado. Nuestro compromiso es tu tranquilidad postventa.",
    },
  ];

  return (
    <section
      id="about"
      className="p-4 bg-gray-50 dark:bg-gray-900 min-h-screen"
    >
      {/* Encabezado */}
      <div className="max-w-[750px] mx-auto">
        <div className="text-center mb-8 pt-8">
          <h2 className="text-3xl font-extrabold text-blue-700 dark:text-blue-400">
            Acerca de{" "}
            <span className="text-gray-900 dark:text-white">TechNova</span>
          </h2>
          <p className="mt-2 text-md text-gray-600 dark:text-gray-300 max-w-sm mx-auto">
            Innovación, rendimiento y confianza en cada equipo.
          </p>
        </div>

        {/* Contenido principal */}
        <div className="space-y-8">
          {/* Misión y visión */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg border-t-4 border-blue-500">
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-sm">
              En <strong>TechNova</strong> creemos que la tecnología impulsa el
              futuro. Desde 2018 nos dedicamos a ofrecer soluciones informáticas
              confiables, conectando a nuestros clientes con equipos potentes,
              duraderos y adaptados a sus necesidades.
            </p>
            <p className="mt-3 text-gray-700 dark:text-gray-200 leading-relaxed text-sm">
              Ya sea que busques una laptop profesional, un setup gamer o
              renovar tu oficina, nuestro equipo te asesora para encontrar la
              mejor opción. Apostamos por marcas líderes como ASUS, Lenovo, Dell
              y HP.
            </p>
            <div className="mt-4 border-t border-gray-200 dark:border-gray-600 pt-4">
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-300">
                Más que una tienda, somos tu aliado tecnológico.
              </p>
            </div>
          </div>

          {/* Características destacadas */}
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition duration-300"
              >
                <feature.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mt-1 shrink-0" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Llamada a la acción */}
          <div className="text-center pt-4 pb-8">
            <a
              href="/contacto"
              className="inline-block px-8 py-3 text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-lg transform hover:scale-105"
            >
              Contáctanos Hoy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
