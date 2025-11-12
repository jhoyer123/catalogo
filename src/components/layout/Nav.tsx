import { CircleX, MenuIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface menuItemsP {
  src: string;
  name: string;
}

const menuItems: menuItemsP[] = [
  { src: "/", name: "Inicio" },
  { src: "/sobre-nosotros", name: "Sobre Nosotros" },
  { src: "/catalogo?oferta=true", name: "Ofertas" },
  { src: "/catalogo", name: "Catálogo" },
  { src: "/contacto", name: "Contactos" },
];

export const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav
      id="header"
      className="fixed items-center justify-center top-0 z-20 w-full bg-black p-1"
    >
      <div className="px-4 text-lg max-w-[750px] mx-auto">
        {/* Menu modo escritorio */}
        <div className="flex justify-between items-center">
          {/* Logo del menu (nav) */}
          <img
            className="w-10 h-10 rounded-2xl"
            src="https://i.pinimg.com/1200x/b2/e4/a8/b2e4a89b64ab128f8332d906966be401.jpg"
            alt="logo"
          />
          {/* Fin logo del menu (nav) */}
          {/* Menu modo escritorio */}
          <ul className="hidden md:flex gap-8 text-gray-200 font-medium">
            {menuItems.map((item) => (
              <li
                key={item.name}
                id="item-menu"
                className="p-3 hover:text-blue-400"
              >
                {item.src.includes("#") ? (
                  <a href={item.src}>{item.name}</a>
                ) : (
                  <Link to={item.src}>{item.name}</Link>
                )}
              </li>
            ))}
          </ul>
          {/* Fin menu modo escritorio */}
          {/* boton que habre el menu mobile */}
          <button
            onClick={handleOpenMenu}
            id="btn-open"
            className="cursor-pointer md:hidden bg-amber-50 p-2 rounded-lg "
          >
            <MenuIcon />
          </button>
          {/* Fin boton open menu mobile */}
        </div>
        {/*  <!-- Fin menu modo escritorio --> */}
        {/* Menu modo mobile */}
        {openMenu && (
          <div
            id="menu"
            className="fixed z-50 inset-0 w-screen h-screen bg-black/50"
          >
            <div className="h-full bg-white w-2xs fixed p-4 right-0">
              {/* icono de cierre del menu */}
              <button
                onClick={handleOpenMenu}
                id="btn-close"
                className="flex justify-end cursor-pointer"
              >
                <CircleX />
              </button>
              {/* fin icono de cierre del menu */}
              {/* lista del menu mobile */}
              <ul className="pt-10">
                {menuItems.map((item) => (
                  <li
                    key={item.name}
                    id="item-menu"
                    className="p-3 text-gray-600 "
                  >
                    {item.src.includes("#") ? (
                      <a href={item.src} onClick={handleOpenMenu}>
                        {item.name}
                      </a>
                    ) : (
                      <Link to={item.src} onClick={handleOpenMenu}>
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              {/* fin lista del menu mobile */}
            </div>
          </div>
        )}
        {/* fin menu modo mobile */}
      </div>
    </nav>
  );
};
