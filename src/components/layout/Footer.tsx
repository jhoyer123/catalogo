import { SocialRed } from "../contact/SocialRed";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 font-sans text-sm md:text-lg relative bottom-0 w-full">
      <div className="container mx-auto text-center">
        {/* bloque informativo */}
        <div className="flex flex-col">
          <h3 className="mb-2">TechZone</h3>
          <p>Av. Principal #123, Zona Centro, La Paz - Bolivia</p>
          <a
            href="mailto:contacto@tutienda.com"
            className="text-white hover:underline"
          >
            contacto@tutienda.com
          </a>
          <a href="tel:+59170000000" className="text-white hover:underline">
            +591 700 000 000
          </a>
        </div>
        <SocialRed />
        {/* Fin bloque informativo */}
        <hr className="my-3 border-gray-700" />
        <p className="text-sm">
          &copy; {new Date().getFullYear()} TechZone. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};
