import { Inicio } from "./pages/Inicio";
import { Productos } from "./components/Productos";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="*" element={<Productos />} />
    </Routes>
  );
};

export default App;
