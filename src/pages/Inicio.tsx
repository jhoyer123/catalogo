import { Hero } from "../components/Hero";
import { ContactAction } from "../components/ContactAction";
import CategDest from "../components/CategDest";
import ProdDestacados from "../components/ProdDestacados";
import Benefits from "../components/Benefits";
import Warning from "../components/Warning";

export const Inicio = () => {
  return (
    <>
      <Hero />
      <CategDest />
      <ContactAction />
      <ProdDestacados />
      <Benefits />
      <Warning />
    </>
  );
};
