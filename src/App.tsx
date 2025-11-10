import { Hero } from "./components/Hero";
import { Productos } from "./components/Productos";
import { Footer } from "./components/Footer";
import { Mapa } from "./components/Mapa";
import { ContactAction } from "./components/ContactAction";

const App = () => {
  return (
    <>
      <Hero />
      <Productos />
      <Mapa />
      <Footer />
      <ContactAction />
    </>
  );
};

export default App;
