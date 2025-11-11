import { Hero } from "../components/Hero";
import { Mapa } from "../components/Mapa";
import { ContactAction } from "../components/ContactAction";
import { Contact } from "../components/Contact";
import { SocialRed } from "../components/SocialRed";
import { About } from "../components/About";

export const Inicio = () => {
  return (
    <>
      <Hero />
      <About />
      <Contact />
      <SocialRed />
      <Mapa />
      <ContactAction />
    </>
  );
};
