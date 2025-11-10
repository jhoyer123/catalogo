import { Hero } from "./components/Hero";
import { Productos } from "./components/Productos";
import { Footer } from "./components/Footer";
import { Mapa } from "./components/Mapa";
import { ContactAction } from "./components/ContactAction";
import { Contact } from "./components/Contact";
import { SocialRed } from "./components/SocialRed";

const App = () => {
  return (
    <>
      <Hero />
      <Productos />
      <Contact />
      <SocialRed />
      <Mapa />
      <Footer />
      <ContactAction />
    </>
  );
};

export default App;
