import { Hero } from "../components/pageInit/Hero";
import { ContactAction } from "../components/ContactAction";
import CategDest from "../components/pageInit/CategDest";
import ProdDestacados from "../components/pageInit/ProdDestacados";
import Benefits from "../components/pageInit/Benefits";
import Warning from "../components/pageInit/Warning";

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
