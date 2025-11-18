import { MapPin, Navigation, Bus, Car } from "lucide-react";

export const Mapa = () => {
  return (
    <div className="bg-linear-to-br from-[#171717] to-[#262626] rounded-2xl shadow-2xl overflow-hidden border border-[#404040] max-w-4xl mx-auto">
      <div className="p-6 md:p-8">
        {/* Encabezado */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Ubicación del Negocio
            </h2>
            <p className="text-[#A3A3A3] text-sm md:text-base">
              Cómo llegar a nuestra tienda
            </p>
          </div>
          <div className="hidden md:block">
            <MapPin className="w-12 h-12 text-[#737373]" />
          </div>
        </div>

        {/* Iframe del mapa con efecto hover */}
        <div className="relative rounded-xl overflow-hidden shadow-xl border-2 border-[#404040] hover:border-[#525252] transition-colors duration-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.637710263899!2d-68.14855312393547!3d-16.493872440569426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edf8ae3a97a23%3A0xdf1338b48d8ed634!2sUyustus%2C%20La%20Paz!5e0!3m2!1ses-419!2sbo!4v1762729634599!5m2!1ses-419!2sbo"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          ></iframe>

          {/* Badge flotante */}
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg border border-[#E6E6E6]">
            <p className="text-xs text-[#525252] font-semibold flex items-center gap-2">
              <Navigation className="w-4 h-4 text-[#404040]" />
              La Paz, Bolivia
            </p>
          </div>
        </div>

        {/* Información adicional en grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Transporte público */}
          <div className="group bg-[#262626] hover:bg-[#2d2d2d] rounded-xl p-5 border border-[#404040] hover:border-[#525252] transition-all duration-300 cursor-default">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-linear-to-br from-[#404040] to-[#525252] rounded-lg p-2">
                <Bus className="w-5 h-5 text-white" />
              </div>
              <p className="text-xs text-[#A3A3A3] font-semibold uppercase tracking-wide">
                Transporte público
              </p>
            </div>
            <p className="text-base text-white font-bold">Líneas 2, 7, 12</p>
            <p className="text-xs text-[#737373] mt-1">Parada a 100m</p>
          </div>

          {/* Distancia */}
          <div className="group bg-[#262626] hover:bg-[#2d2d2d] rounded-xl p-5 border border-[#404040] hover:border-[#525252] transition-all duration-300 cursor-default">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-linear-to-br from-[#404040] to-[#525252] rounded-lg p-2">
                <Navigation className="w-5 h-5 text-white" />
              </div>
              <p className="text-xs text-[#A3A3A3] font-semibold uppercase tracking-wide">
                Desde el centro
              </p>
            </div>
            <p className="text-base text-white font-bold">2.5 km aprox.</p>
            <p className="text-xs text-[#737373] mt-1">8 minutos en auto</p>
          </div>

          {/* Estacionamiento */}
          <div className="group bg-[#262626] hover:bg-[#2d2d2d] rounded-xl p-5 border border-[#404040] hover:border-[#525252] transition-all duration-300 cursor-default">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-linear-to-br from-[#404040] to-[#525252] rounded-lg p-2">
                <Car className="w-5 h-5 text-white" />
              </div>
              <p className="text-xs text-[#A3A3A3] font-semibold uppercase tracking-wide">
                Estacionamiento
              </p>
            </div>
            <p className="text-base text-white font-bold">Disponible</p>
            <p className="text-xs text-[#737373] mt-1">
              Gratuito para clientes
            </p>
          </div>
        </div>

        {/* Referencias adicionales */}
        <div className="mt-6 bg-[#1a1a1a] rounded-xl p-5 border border-[#404040]">
          <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
            <div className="w-1 h-4 bg-linear-to-b from-[#737373] to-[#525252] rounded-full"></div>
            Referencias Cercanas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="text-center">
              <div className="w-2 h-2 bg-[#737373] rounded-full mx-auto mb-2"></div>
              <p className="text-xs text-[#A3A3A3]">Plaza Principal</p>
            </div>
            <div className="text-center">
              <div className="w-2 h-2 bg-[#737373] rounded-full mx-auto mb-2"></div>
              <p className="text-xs text-[#A3A3A3]">Banco Central</p>
            </div>
            <div className="text-center">
              <div className="w-2 h-2 bg-[#737373] rounded-full mx-auto mb-2"></div>
              <p className="text-xs text-[#A3A3A3]">Supermercado</p>
            </div>
            <div className="text-center">
              <div className="w-2 h-2 bg-[#737373] rounded-full mx-auto mb-2"></div>
              <p className="text-xs text-[#A3A3A3]">Centro Comercial</p>
            </div>
          </div>
        </div>

        {/* Botón de dirección */}
        <div className="mt-6 flex justify-center">
          <a
            href="https://maps.app.goo.gl/TUwzK62k8xNnN4S7A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-linear-to-r from-[#E6E6E6] to-[#D4D4D4] hover:from-white hover:to-[#E6E6E6] text-[#171717] font-bold px-8 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl border border-[#A3A3A3] hover:scale-105 active:scale-95"
          >
            <Navigation className="w-5 h-5" />
            Abrir en Google Maps
          </a>
        </div>
      </div>
    </div>
  );
};
