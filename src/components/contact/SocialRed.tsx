import Tiktok from "../../assets/icons/Tiktok.svg";
import Facebook from "../../assets/icons/Facebook.svg";
import Twitter from "../../assets/icons/Twitter.svg";
import Instagram from "../../assets/icons/Instagram.svg";

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
    <div className=" px-6 py-2 bg-gray-800 dark:bg-gray-800 shadow-lg font-inter transition-colors duration-300  dark:border-gray-700">
      <p className="mb-6">Síguenos en nuestras redes sociales</p>
      <div className="flex justify-center gap-6">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-start"
          >
            <img
              src={social.icon}
              alt={social.name}
              className="w-7 h-7 object-contain"
            />
          </a>
        ))}
      </div>
      {/* Línea decorativa inferior */}
      <div className="mt-5 text-center">
        <span className="inline-block w-24 h-1 bg-blue-600 rounded-full"></span>
      </div>
    </div>
  );
};
