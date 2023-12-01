import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  // Définir le basename en fonction de l'environnement
  const basename = import.meta.env.MODE === "production" ? "/Kasa/" : "";

  return (
    <div className="Page">
      <BrowserRouter basename={basename}>
        <Header />
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
