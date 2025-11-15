import Whatsapp from "../assets/icons/Whatsapp1.svg";

export const ContactAction = () => {
  return (
    // Contenedor principal: Fijo, visible y con animación
    <div
      className="fixed z-50 bottom-8 right-8 
                 bg-green-500 rounded-full p-2 
                 shadow-xl hover:shadow-2xl transition-shadow 
                 size-14 animate-bounce hover:animate-none"
    >
      <a
        href="https://wa.me/TU_NUMERO_DE_TELEFONO_AQUI" // 💡 ¡Importante! Usa wa.me
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <img
          src={Whatsapp}
          alt="Icono de WhatsApp"
          className="w-10 h-10" // El icono siempre será blanco, no necesita contraste.
        />
      </a>
    </div>
  );
};
