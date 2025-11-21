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
    <section
      className="bg-[#FAFAFA] dark:bg-[#171717] py-12 px-4 font-inter
    md:py-16"
    >
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div
          className="flex flex-col gap-3 text-center
        md:gap-6"
        >
          {/* titulo y descripción de la sección */}
          <div className="space-y-3 mb-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A0A0A] dark:text-[#FFFFFF] leading-tight">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-base md:text-lg text-[#525252] dark:text-[#D4D4D4] max-w-3xl mx-auto leading-relaxed">
              En TechZone trabajamos para ofrecerte la mejor experiencia en
              tecnología. Cada compra está respaldada por nuestro compromiso con
              la calidad, la rapidez y la seguridad.
            </p>
          </div>
          {/* Fin titulo y descripción de la sección */}

          {/* lista de beneficios */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4
          md:gap-8 max-w-[700px] mx-auto
          lg:max-w-[1200px]"
          >
            {benefits.map((benefit) => (
              /* seccion de cards de beneficios */
              <div
                key={benefit.title}
                className="flex flex-col items-center justify-start text-center p-8 bg-[#FFFFFF] dark:bg-[#262626] shadow-lg shadow-[#A3A3A3]/20 dark:shadow-[#0A0A0A]/40 rounded-xl space-y-4
                hover:scale-105 hover:shadow-xl hover:shadow-[#737373]/30 dark:hover:shadow-[#0A0A0A]/60 transition-all duration-300 w-full
                border border-[#E5E5E5] dark:border-[#404040]"
              >
                <div className="bg-[#F5F5F5] dark:bg-[#404040] p-4 rounded-full">
                  <benefit.icono className="w-10 h-10 text-[#525252] dark:text-[#E5E5E5]" />
                </div>
                <h3 className="font-ubuntu font-bold text-lg md:text-xl text-[#0A0A0A] dark:text-[#FFFFFF]">
                  {benefit.title}
                </h3>
                <p className="text-[#525252] dark:text-[#D4D4D4] leading-relaxed">
                  {benefit.description}
                </p>
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
