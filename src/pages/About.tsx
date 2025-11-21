import { Eye, Lightbulb, ShieldMinus } from "lucide-react";

const aboutItems = [
  {
    icon: Eye,
    title: "Misión",
    description:
      "Ofrecer productos tecnológicos de alta calidad con un servicio rápido, seguro y cercano.",
  },
  {
    icon: Lightbulb,
    title: "Visión",
    description:
      "Ser la tienda de tecnología líder en innovación, confianza y atención al cliente en todo el país.",
  },
  {
    icon: ShieldMinus,
    title: "Valores",
    description:
      "Compromiso, honestidad, excelencia, innovación y servicio humano.",
  },
];

export const About = () => {
  return (
    <section className="py-24 bg-[#FAFAFA] w-full font-inter relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* ======================================================
            1. TÍTULO Y DESCRIPCIÓN
        ======================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-black font-ubuntu tracking-tight text-[#0A0A0A]">
            Acerca de <span className="text-[#404040]">TechZone</span>
          </h2>

          <p className="text-lg text-[#555] leading-relaxed">
            Conectamos personas con la mejor tecnología del mercado. Creemos en
            soluciones reales, precios justos y una atención que marque la
            diferencia.
          </p>
        </div>

        {/* ======================================================
            2. HISTORIA
        ======================================================= */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center mb-14">
          {/* Imagen */}
          <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-lg group">
            <img
              src="https://i.pinimg.com/1200x/ad/65/2b/ad652b68a8da4fb6311990ba03e5801e.jpg"
              alt="TechZone Store"
              className="w-full h-[460px] object-cover transform group-hover:scale-105 transition duration-700"
            />
          </div>

          {/* Texto */}
          <div className="w-full lg:w-1/2 max-w-xl space-y-5">
            <h3 className="text-3xl font-extrabold text-[#171717] tracking-tight">
              Nuestra Historia
            </h3>

            <p className="text-lg text-[#555] leading-relaxed">
              Nacimos con la visión de acercar la tecnología a cada hogar y
              negocio. Con esfuerzo y pasión, pasamos de ser un pequeño
              emprendimiento a una tienda reconocida por su{" "}
              <strong>compromiso</strong>, <strong>confianza</strong> y{" "}
              <strong>atención al detalle</strong>. Hoy seguimos creciendo,
              impulsados por nuestros clientes.
            </p>

            <div className="w-28 h-1 bg-[#D4D4D4]"></div>

            <p className="text-sm italic text-[#999]">
              “La tecnología no espera, nosotros tampoco.”
            </p>
          </div>
        </div>

        {/* ======================================================
            3. MISIÓN - VISIÓN - VALORES
        ======================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {aboutItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="
                  bg-white rounded-xl p-8 shadow-sm border border-[#EAEAEA]
                  hover:shadow-xl hover:border-[#D3D3D3]
                  transition-all duration-300 hover:-translate-y-1
                  text-center
                "
              >
                <div className="mx-auto w-14 h-14 rounded-full flex items-center justify-center bg-[#F5F5F5] mb-5">
                  <Icon className="w-7 h-7 text-[#0A0A0A]" />
                </div>

                <h3 className="text-xl font-semibold text-[#0A0A0A] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#555] text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* ======================================================
            4. CTA FINAL
        ======================================================= */}
        <div className="text-center">
          <a
            href="/contacto"
            className="
              inline-block px-10 py-4 rounded-full
              text-white text-sm font-bold uppercase tracking-wide
              bg-[#171717] hover:bg-[#333]
              shadow-lg transition-all
            "
          >
            Contáctanos Hoy
          </a>
        </div>
      </div>
    </section>
  );
};
