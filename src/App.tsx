import { Layout } from "../src/layout/Layout";
import { Inicio } from "./pages/Inicio";
import { Productos } from "./pages/Productos";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="*" element={<Productos />} />
      </Routes>
    </Layout>
  );
};

export default App;
