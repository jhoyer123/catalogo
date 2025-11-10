import { CircleX, MenuIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface menuItemsP {
  src: string;
  name: string;
}

const menuItems: menuItemsP[] = [
  { src: "/", name: "Inicio" },
  { src: "/productos", name: "Productos" },
  { src: "/ofertas", name: "Ofertas" },
  { src: "/contactos", name: "Contactos" },
];

export const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
    console.log(openMenu);
  };

  return (
    <nav
      id="header"
      className="fixed top-0 z-20 w-full bg-linear-to-l from-black to-white font-sans p-1"
    >
      <div className="px-4 text-lg">
        {/* Menu modo escritorio */}
        <div className="flex justify-between items-center">
          <img
            className="w-10 h-10 rounded-2xl"
            src="https://i.pinimg.com/1200x/c7/85/68/c78568c446d383a7977dd19288b6c389.jpg"
            alt="logo"
          />
          <button
            onClick={handleOpenMenu}
            id="btn-open"
            className="cursor-pointer md:hidden bg-amber-50 p-2 rounded-lg "
          >
            <MenuIcon />
          </button>
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
                    <Link to={item.src} onClick={handleOpenMenu}>
                      {item.name}
                    </Link>
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
