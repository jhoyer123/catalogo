import { Phone, ShieldCheck, Truck, WalletMinimal } from "lucide-react";

interface Benefit {
  icono: React.ComponentType<any>;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icono: Truck,
    title: "Envíos rápidos a todo el país",
    description:
      "Recibe tus productos en la puerta de tu casa con entregas seguras y puntuales.",
  },
  {
    icono: ShieldCheck,
    title: "Garantía en todos los productos",
    description:
      "Todos nuestros artículos cuentan con garantía oficial y soporte especializado.",
  },
  {
    icono: WalletMinimal,
    title: "Pagos 100% seguros",
    description: "Protegemos tus datos con los métodos de pago más confiables.",
  },
  {
    icono: Phone,
    title: "Atención personalizada",
    description:
      "Nuestro equipo está disponible para ayudarte en cada paso de tu compra.",
  },
];

const Benefits = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-7 px-4 font-inter">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="text-center">
          {/* titulon y descripción de la sección */}
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Beneficios de Comprar con Nosotros ¿Por qué elegirnos?
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            En TechZone trabajamos para ofrecerte la mejor experiencia en
            tecnología. Cada compra está respaldada por nuestro compromiso con
            la calidad, la rapidez y la seguridad.
          </p>
          {/* Fin titulo y descripción de la sección */}
          {/* lista de beneficios */}
          <div className="grid grid-cols-1 gap-5 pt-6">
            {benefits.map((benefit) => (
              /* seccion de cards de beneficios */
              <div
                key={benefit.title}
                className="flex flex-col items-center justify-center text-center p-6 bg-white shadow-md shadow-black/10 rounded-lg space-y-4"
              >
                <benefit.icono className="w-10 h-10 text-blue-700" />
                <h3 className="font-ubuntu font-semibold text-lg">
                  {benefit.title}
                </h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
          {/* Fin lista de beneficios */}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
