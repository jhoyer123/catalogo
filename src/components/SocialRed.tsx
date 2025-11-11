import Tiktok from "../assets/icons/Tiktok.svg";
import Facebook from "../assets/icons/Facebook.svg";
import Twitter from "../assets/icons/Twitter.svg";
import Instagram from "../assets/icons/Instagram.svg";

const socialLinks = [
  {
    name: "Twitter",
    icon: Twitter,
    link: "https://twitter.com/technova",
  },
  {
    name: "Instagram",
    icon: Instagram,
    link: "https://instagram.com/technova",
  },
  {
    name: "Tiktok",
    icon: Tiktok,
    link: "https://tiktok.com/@technova",
  },
  {
    name: "Facebook",
    icon: Facebook,
    link: "https://facebook.com/technova",
  },
];

export const SocialRed = () => {
  return (
    <div className=" px-6 py-10 bg-white dark:bg-gray-800 shadow-lg font-inter transition-colors duration-300 border border-gray-100 dark:border-gray-700">
      <h3 className="text-center font-ubuntu text-3xl font-extrabold text-blue-700 dark:text-blue-400 border-b border-gray-200 dark:border-gray-700 pb-3 mb-6">
        Síguenos en Nuestras Redes
      </h3>

      <p className="text-gray-600 dark:text-gray-300 mb-8 text-center text-md max-w-md mx-auto">
        Únete a nuestra comunidad y mantente al día con las últimas tendencias,
        lanzamientos y ofertas exclusivas de <strong>TechNova</strong>.
      </p>

      {/* Lista de redes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-start px-6 py-4 bg-blue-50 dark:bg-gray-700 rounded-xl shadow-md hover:shadow-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 transition duration-300 transform hover:-translate-y-1"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-600">
              <img
                src={social.icon}
                alt={social.name}
                className="w-7 h-7 object-contain"
              />
            </div>
            <p className="ml-4 text-lg font-semibold text-gray-900 dark:text-white">
              {social.name}
            </p>
          </a>
        ))}
      </div>

      {/* Línea decorativa inferior */}
      <div className="mt-10 text-center">
        <span className="inline-block w-24 h-1 bg-blue-600 rounded-full"></span>
      </div>
    </div>
  );
};
