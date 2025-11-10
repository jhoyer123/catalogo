import Tiktok from "../assets/icons/tiktok.svg";
import Facebook from "../assets/icons/Facebook.svg";
import Twitter from "../assets/icons/Twitter.svg";
import Instagram from "../assets/icons/Instagram.svg";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 font-inter">
      {/* logo */}
      <img
        src="https://i.pinimg.com/1200x/e6/44/a9/e644a9e8bc7664e783b74d5b63503662.jpg"
        alt="logo"
        className="w-13 h-13 mx-auto rounded-full my-4"
      />
      <h2 className="text-center">Nuestras Redes Sociales</h2>
      {/* iconos de redes sociales */}
      <div className="flex gap-10 justify-center my-6 border border-gray-700 p-4 rounded-lg mx-4">
        <a href="" className="text-white">
          <img src={Tiktok} alt="TikTok" className="w-10 h-10" />
        </a>
        <a href="" className="text-white">
          <img src={Facebook} alt="Facebook" className="w-10 h-10" />
        </a>
        <a href="" className="text-white">
          <img src={Twitter} alt="Twitter" className="w-10 h-10" />
        </a>
        <a href="" className="text-white">
          <img src={Instagram} alt="Instagram" className="w-10 h-10" />
        </a>
      </div>
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} SUPER HERO. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};
