import Tiktok from "../assets/icons/Tiktok.svg";
import Facebook from "../assets/icons/Facebook.svg";
import Twitter from "../assets/icons/Twitter.svg";
import Instagram from "../assets/icons/Instagram.svg";

const socialLinks = [
  {
    name: "Twitter",
    icon: Twitter,
    link: "https://twitter.com/superhero",
  },
  {
    name: "Instagram",
    icon: Instagram,
    link: "https://instagram.com/superhero",
  },
  {
    name: "Tiktok",
    icon: Tiktok,
    link: "https://tiktok.com/@superhero",
  },
  {
    name: "Facebook",
    icon: Facebook,
    link: "https://facebook.com/superhero",
  },
];

export const SocialRed = () => {
  return (
    <div className="md:mt-0 px-4 py-8 bg-gray-100 rounded-lg shadow-md max-w-2xl mx-auto font-inter">
      <h3 className="text-center font-ubuntu text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
        Síguenos en Nuestras Redes Sociales
      </h3>
      <p className="text-gray-600 mb-6 text-center text-md">
        Conéctate con nosotros en nuestras plataformas sociales para estar al
        tanto de las últimas novedades.
      </p>

      <div className="space-y-4">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center py-3 px-10 border border-gray-200 rounded-lg text-white bg-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition duration-300 shadow-sm"
          >
            <img src={social.icon} alt={social.name} className="w-10 h-10" />
            <p className="ml-4">{social.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
};
