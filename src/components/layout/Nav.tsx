import React, { useState } from "react";
import { CircleX, Menu } from "lucide-react";

interface menuItemsP {
  src: string;
  name: string;
}

const menuItems: menuItemsP[] = [
  { src: "/", name: "Inicio" },
  { src: "/sobre-nosotros", name: "Sobre Nosotros" },
  { src: "/catalogo?oferta=1", name: "Ofertas" },
  { src: "/catalogo", name: "Catálogo" },
  { src: "/contacto", name: "Contactos" },
];

interface LinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

// Componente Link simulado para el ejemplo
const Link = ({ to, children, onClick, className }: LinkProps) => (
  <a href={to} onClick={onClick} className={className}>
    {children}
  </a>
);

export const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <nav
        id="header"
        className="fixed items-center justify-center top-0 z-20 w-full bg-linear-to-r from-[#0A0A0A] via-[#171717] to-[#0A0A0A] p-1 font-sans box-border shadow-lg backdrop-blur-sm border-b border-[#262626]"
      >
        <div className="px-4 text-lg max-w-[750px] mx-auto w-full lg:max-w-[850px]">
          {/* Menu modo escritorio */}
          <div className="flex justify-between items-center lg:gap-5">
            {/* Logo del menu (nav) */}
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-r from-[#404040] to-[#737373] rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <img
                className="relative w-10 h-10 rounded-2xl border-2 border-[#404040] group-hover:border-[#737373] transition-all duration-300 hover:scale-105"
                src="https://i.pinimg.com/1200x/b2/e4/a8/b2e4a89b64ab128f8332d906966be401.jpg"
                alt="logo"
              />
            </div>
            {/* Fin logo del menu (nav) */}

            {/* Menu modo escritorio */}
            <ul className="hidden md:flex gap-2 text-[#D4D4D4] lg:gap-5">
              {menuItems.map((item) => (
                <li
                  key={item.name}
                  id="item-menu"
                  className="relative p-3 hover:text-white transition-colors duration-200 group"
                >
                  {item.src.includes("#") ? (
                    <a href={item.src} className="relative z-10">
                      {item.name}
                    </a>
                  ) : (
                    <Link to={item.src} className="relative z-10">
                      {item.name}
                    </Link>
                  )}
                  {/* Efecto hover underline */}
                  <div className="absolute bottom-2 left-3 right-3 h-0.5 bg-linear-to-r from-[#737373] to-[#A3A3A3] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                  {/* Badge especial para Ofertas */}
                  {item.name === "Ofertas" && (
                    <span className="absolute top-2 -right-1 w-2 h-2 bg-linear-to-r from-[#737373] to-[#525252] rounded-full animate-pulse"></span>
                  )}
                </li>
              ))}
            </ul>
            {/* Fin menu modo escritorio */}

            {/* boton que abre el menu mobile */}
            <button
              onClick={handleOpenMenu}
              id="btn-open"
              className="cursor-pointer md:hidden bg-linear-to-br from-[#E6E6E6] to-[#D4D4D4] p-2 rounded-lg hover:from-white hover:to-[#E6E6E6] transition-all duration-200 active:scale-95 shadow-md border border-[#A3A3A3]"
            >
              <Menu className="text-[#171717]" />
            </button>
            {/* Fin boton open menu mobile */}
          </div>
          {/*  <!-- Fin menu modo escritorio --> */}
        </div>
      </nav>

      {/* Menu modo mobile */}
      {openMenu && (
        <div
          id="menu"
          className="fixed z-50 inset-0 w-full h-screen bg-black/60 backdrop-blur-sm"
          style={{ animation: "fadeIn 0.3s ease-out" }}
        >
          <div
            className="h-full bg-linear-to-b from-[#FAFAFA] to-[#F5F5F5] w-72 fixed p-4 right-0 shadow-2xl border-l border-[#E6E6E6]"
            style={{ animation: "slideInRight 0.3s ease-out" }}
          >
            {/* icono de cierre del menu */}
            <button
              onClick={handleOpenMenu}
              id="btn-close"
              className="flex justify-end cursor-pointer mb-4 p-2 rounded-full hover:bg-[#E6E6E6] transition-all duration-200 active:scale-95 ml-auto"
            >
              <CircleX className="text-[#404040] hover:text-[#171717] transition-colors w-6 h-6" />
            </button>
            {/* fin icono de cierre del menu */}

            {/* Logo en mobile menu */}
            <div className="flex justify-center mb-8">
              <img
                className="w-16 h-16 rounded-2xl border-2 border-[#D4D4D4] shadow-lg"
                src="https://i.pinimg.com/1200x/b2/e4/a8/b2e4a89b64ab128f8332d906966be401.jpg"
                alt="logo"
              />
            </div>

            {/* lista del menu mobile */}
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li
                  key={item.name}
                  id="item-menu"
                  className="group"
                  style={{
                    animation: `slideInItem 0.3s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="relative">
                    {item.src.includes("#") ? (
                      <a
                        href={item.src}
                        onClick={handleOpenMenu}
                        className="flex items-center p-4 text-[#404040] rounded-xl hover:bg-linear-to-r hover:from-[#E6E6E6] hover:to-[#D4D4D4] transition-all duration-200 group-hover:text-[#171717] font-medium border border-transparent hover:border-[#D4D4D4] hover:shadow-md"
                      >
                        <span className="relative">
                          {item.name}
                          {item.name === "Ofertas" && (
                            <span className="absolute -top-1 -right-4 w-2 h-2 bg-linear-to-r from-[#737373] to-[#525252] rounded-full animate-pulse"></span>
                          )}
                        </span>
                      </a>
                    ) : (
                      <Link
                        to={item.src}
                        onClick={handleOpenMenu}
                        className="flex items-center p-4 text-[#404040] rounded-xl hover:bg-linear-to-r hover:from-[#E6E6E6] hover:to-[#D4D4D4] transition-all duration-200 group-hover:text-[#171717] font-medium border border-transparent hover:border-[#D4D4D4] hover:shadow-md"
                      >
                        <span className="relative">
                          {item.name}
                          {item.name === "Ofertas" && (
                            <span className="absolute -top-1 -right-4 w-2 h-2 bg-linear-to-r from-[#737373] to-[#525252] rounded-full animate-pulse"></span>
                          )}
                        </span>
                      </Link>
                    )}
                    {/* Indicador lateral */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-linear-to-b from-[#737373] to-[#525252] rounded-r group-hover:h-8 transition-all duration-300"></div>
                  </div>
                </li>
              ))}
            </ul>
            {/* fin lista del menu mobile */}

            {/* Decoración inferior */}
            <div className="absolute bottom-8 left-4 right-4">
              <div className="h-px bg-linear-to-r from-transparent via-[#D4D4D4] to-transparent mb-4"></div>
              <p className="text-center text-sm text-[#737373]">
                TechZone © 2024
              </p>
            </div>
          </div>
        </div>
      )}
      {/* fin menu modo mobile */}

      <style>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInItem {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};
