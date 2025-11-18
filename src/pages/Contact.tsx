import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Headphones,
  ShoppingBag,
} from "lucide-react";

export const Contact = () => {
  // Datos de contacto principales
  const contactDetails = [
    {
      icon: Mail,
      title: "Correo Electrónico",
      value: "contacto@technova.com",
      link: "mailto:contacto@technova.com",
      description: "Respuesta en 24 horas",
    },
    {
      icon: Phone,
      title: "Teléfono",
      value: "+591 755 43210",
      link: "tel:+59175543210",
      description: "Lun - Sáb: 9:00 - 18:00",
    },
    {
      icon: MapPin,
      title: "Oficina Central",
      value: "Av. Libertador #456, La Paz, Bolivia",
      link: "https://maps.app.goo.gl/TUwzK62k8xNnN4S7A",
      description: "Ver en Google Maps",
    },
  ];

  // Canales adicionales de contacto
  const additionalChannels = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+591 755 43210",
      link: "https://wa.me/59175543210",
      color: "from-[#25D366] to-[#128C7E]",
    },
    {
      icon: Headphones,
      title: "Soporte Técnico",
      value: "soporte@technova.com",
      link: "mailto:soporte@technova.com",
      color: "from-[#404040] to-[#737373]",
    },
    {
      icon: ShoppingBag,
      title: "Ventas Mayoristas",
      value: "ventas@technova.com",
      link: "mailto:ventas@technova.com",
      color: "from-[#525252] to-[#737373]",
    },
  ];

  return (
    <section
      id="contactos"
      className="pt-16 pb-10 md:py-24 bg-linear-to-b from-[#FAFAFA] to-[#F5F5F5] font-sans transition-colors duration-300"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-[#171717] mb-4">
              Contáctanos
            </h2>
            <div className="h-1.5 bg-linear-to-r from-[#737373] via-[#525252] to-[#737373] rounded-full"></div>
          </div>
          <p className="mt-6 text-lg text-[#525252] max-w-2xl mx-auto">
            Estamos aquí para ayudarte con cualquier consulta sobre nuestros
            productos, pedidos o servicios. ¡Contáctanos por tu canal preferido!
          </p>
        </div>

        {/* Contenido principal en grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Imagen */}
          <div className="relative group">
            <div className="absolute inset-0 bg-linear-to-br from-[#737373] to-[#525252] rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <img
              src="https://i.pinimg.com/1200x/18/50/47/185047d348b2b819786c034472fcb08d.jpg"
              alt="Atención al cliente"
              className="relative rounded-2xl border-2 border-[#E6E6E6] shadow-xl w-full h-full object-cover hover:scale-[1.02] transition-transform duration-300"
            />
          </div>

          {/* Tarjetas de contacto principales */}
          <div className="flex flex-col gap-5">
            {contactDetails.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-[#E6E6E6] hover:border-[#D4D4D4]"
              >
                <div className="flex items-start p-6">
                  <div className="shrink-0 mr-5">
                    <div className="w-14 h-14 bg-linear-to-br from-[#262626] to-[#171717] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#171717] mb-1">
                      {item.title}
                    </h3>
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
                      className="text-[#404040] hover:text-[#171717] transition-colors duration-200 font-medium block mb-2"
                    >
                      {item.value}
                    </a>
                    <p className="text-sm text-[#737373]">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Canales adicionales */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#171717] mb-6 text-center">
            Otros Canales de Comunicación
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalChannels.map((channel, index) => (
              <a
                key={index}
                href={channel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-[#E6E6E6] hover:border-[#D4D4D4] overflow-hidden"
              >
                {/* Fondo animado */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${channel.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>

                <div className="relative text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-[#F5F5F5] to-[#E6E6E6] rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <channel.icon className="w-8 h-8 text-[#404040]" />
                  </div>
                  <h4 className="text-lg font-bold text-[#171717] mb-2">
                    {channel.title}
                  </h4>
                  <p className="text-sm text-[#525252] font-medium">
                    {channel.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Horario y ubicación */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Horario de atención */}
          <div className="bg-linear-to-br from-white to-[#FAFAFA] rounded-2xl shadow-lg p-8 border-l-4 border-[#404040]">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-8 h-8 text-[#404040]" />
              <h3 className="text-2xl font-bold text-[#171717]">
                Horario de Atención
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-[#E6E6E6]">
                <span className="font-semibold text-[#404040]">
                  Lunes a Viernes:
                </span>
                <span className="text-[#171717] font-bold">9:00 - 18:00</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-[#E6E6E6]">
                <span className="font-semibold text-[#404040]">Sábados:</span>
                <span className="text-[#171717] font-bold">9:00 - 13:00</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="font-semibold text-[#404040]">Domingos:</span>
                <span className="text-[#737373]">Cerrado</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-linear-to-r from-[#F5F5F5] to-[#E6E6E6] rounded-xl">
              <p className="text-sm text-[#525252] text-center">
                <span className="font-bold text-[#171717]">Atención 24/7</span>{" "}
                por WhatsApp y correo electrónico
              </p>
            </div>
          </div>

          {/* Información adicional */}
          <div className="bg-linear-to-br from-[#171717] to-[#262626] rounded-2xl shadow-lg p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-5 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-5 rounded-full -ml-20 -mb-20"></div>

            <div className="relative">
              <h3 className="text-2xl font-bold mb-6">¿Dónde Estamos?</h3>
              <p className="text-[#D4D4D4] leading-relaxed mb-6">
                Visítanos en nuestra tienda principal en La Paz o contáctanos
                por correo para atención personalizada.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#A3A3A3] rounded-full"></div>
                  <span className="text-sm text-[#D4D4D4]">
                    Estacionamiento gratuito
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#A3A3A3] rounded-full"></div>
                  <span className="text-sm text-[#D4D4D4]">
                    Acceso para personas con movilidad reducida
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#A3A3A3] rounded-full"></div>
                  <span className="text-sm text-[#D4D4D4]">
                    Wi-Fi gratuito en tienda
                  </span>
                </div>
              </div>

              <div className="flex justify-center">
                <MapPin className="w-12 h-12 text-[#A3A3A3] animate-bounce" />
              </div>
            </div>
          </div>
        </div>

        {/* Componente de mapa (se importará por separado) */}
        <MapaComponent />
      </div>
    </section>
  );
};

// Componente de Mapa separado
function MapaComponent() {
  return (
    <div className="bg-linear-to-br from-[#171717] to-[#262626] rounded-2xl shadow-2xl overflow-hidden border border-[#404040] max-w-4xl mx-auto">
      <div className="p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Ubicación del Negocio
            </h2>
            <p className="text-[#A3A3A3] text-sm md:text-base">
              Cómo llegar a nuestra tienda
            </p>
          </div>
          <MapPin className="w-10 h-10 text-[#737373]" />
        </div>

        <div className="relative rounded-xl overflow-hidden shadow-xl border-2 border-[#404040]">
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
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#262626] rounded-lg p-4 border border-[#404040]">
            <p className="text-xs text-[#A3A3A3] mb-1">Transporte público</p>
            <p className="text-sm text-white font-semibold">Líneas 2, 7, 12</p>
          </div>
          <div className="bg-[#262626] rounded-lg p-4 border border-[#404040]">
            <p className="text-xs text-[#A3A3A3] mb-1">
              Distancia desde centro
            </p>
            <p className="text-sm text-white font-semibold">2.5 km aprox.</p>
          </div>
          <div className="bg-[#262626] rounded-lg p-4 border border-[#404040]">
            <p className="text-xs text-[#A3A3A3] mb-1">Referencias cercanas</p>
            <p className="text-sm text-white font-semibold">Plaza Principal</p>
          </div>
        </div>
      </div>
    </div>
  );
}
