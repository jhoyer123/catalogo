import { SocialRed } from "../contact/SocialRed";
import { MapPin, Mail, Phone, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-[#171717] to-[#0A0A0A] text-white relative overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sección superior */}
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Columna 1: Info de la tienda */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 bg-linear-to-r from-white to-[#A3A3A3] bg-clip-text text-transparent">
                TechZone
              </h3>
              <div className="h-1 w-16 bg-linear-to-r from-[#A3A3A3] to-[#525252] rounded-full"></div>
            </div>

            <p className="text-[#D4D4D4] leading-relaxed text-sm md:text-base">
              Tu tienda de confianza para productos de calidad. Ofrecemos las
              mejores ofertas y atención personalizada.
            </p>
          </div>

          {/* Columna 2: Contacto */}
          <div className="space-y-5">
            <h4 className="text-lg md:text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-linear-to-b from-[#A3A3A3] to-[#525252] rounded-full"></div>
              Contáctanos
            </h4>

            <div className="space-y-3">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-[#D4D4D4] hover:text-white transition-colors duration-200 group"
              >
                <MapPin className="w-5 h-5 mt-1 shrink-0 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-sm md:text-base">
                  Av. Principal #123, Zona Centro
                  <br />
                  La Paz - Bolivia
                </span>
              </a>

              <a
                href="mailto:contacto@tutienda.com"
                className="flex items-center gap-3 text-[#D4D4D4] hover:text-white transition-colors duration-200 group"
              >
                <Mail className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-sm md:text-base">
                  contacto@tutienda.com
                </span>
              </a>

              <a
                href="tel:+59170000000"
                className="flex items-center gap-3 text-[#D4D4D4] hover:text-white transition-colors duration-200 group"
              >
                <Phone className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-sm md:text-base">+591 700 000 000</span>
              </a>
            </div>
          </div>

          {/* Columna 3: Redes Sociales */}
          <div className="space-y-5 md:col-span-2 lg:col-span-1">
            <h4 className="text-lg md:text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-linear-to-b from-[#A3A3A3] to-[#525252] rounded-full"></div>
              Síguenos
            </h4>
            <SocialRed />
            {/* Mensaje adicional */}
            <p className="text-[#737373] text-sm text-center lg:text-left mt-4">
              Entérate de nuestras ofertas exclusivas
            </p>
          </div>
        </div>

        {/* Línea divisoria con lineare */}
        <div className="h-px bg-linear-to-r from-transparent via-[#404040] to-transparent"></div>

        {/* Sección inferior */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#A3A3A3] text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} TechZone. Todos los derechos
            reservados.
          </p>

          <div className="flex items-center gap-2 text-[#A3A3A3] text-sm">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 fill-[#737373] text-[#737373] animate-pulse" />
            <span>en Bolivia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
