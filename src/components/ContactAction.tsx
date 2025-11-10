import Whatsapp from "../assets/icons/whatsapp.svg";

export const ContactAction = () => {
  return (
    <div className="fixed z-10 w-10 h-10 bottom-5 left-5 shadow-lg size-6 animate-bounce hover:bg-green-600 transition-colors">
      <a href="https://www.whatsapp.com/?lang=es">
        <img src={Whatsapp} alt="Whatsapp contacto" className="w-10 h-10" />
      </a>
    </div>
  );
};
