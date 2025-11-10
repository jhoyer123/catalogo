import { Layout } from "../src/layout/Layout";
import { DetailProduct } from "./pages/DetailProduct";
import { Inicio } from "./pages/Inicio";
import { Productos } from "./pages/Productos";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/DetailProduct" element={<DetailProduct />} />
      </Routes>
    </Layout>
  );
};

export default App;
