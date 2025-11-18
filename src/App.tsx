import { Layout } from "../src/layout/Layout";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { DetailProduct } from "./pages/DetailProduct";
import { Inicio } from "./pages/Inicio";
import { Catalogo } from "./pages/Catalogo";
import { Routes, Route } from "react-router-dom";
import { ProductsProvider } from "./context/ProductsContext";

const App = () => {
  return (
    <Layout>
      <ProductsProvider>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre-nosotros" element={<About />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/detallesProducto/:id" element={<DetailProduct />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </ProductsProvider>
    </Layout>
  );
};

export default App;
