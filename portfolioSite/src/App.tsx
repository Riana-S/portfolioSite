import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />  {/* ← this is now your home page */}
        <Route path="/Projects" element={<Projects />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}

export default App
