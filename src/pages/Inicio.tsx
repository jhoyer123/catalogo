import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { Mapa } from "../components/Mapa";
import { ContactAction } from "../components/ContactAction";
import { Contact } from "../components/Contact";
import { SocialRed } from "../components/SocialRed";

export const Inicio = () => {
  return (
    <>
      <Hero />
      <Contact />
      <SocialRed />
      <Mapa />
      <Footer />
      <ContactAction />
    </>
  );
};
