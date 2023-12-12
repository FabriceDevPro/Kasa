import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import MissingPage from "./pages/MissingPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LogementDetails from "./pages/LogementDetails";

function App() {
  // Définir le basename en fonction de l'environnement
  const basename = import.meta.env.MODE === "production" ? "/Kasa/" : "";

  return (
    <>
      <BrowserRouter basename={basename}>
        <Header />
        <Routes>
          {/* Redirection de la racine vers /Accueil */}
          <Route path="/" element={<Navigate to="/Accueil" replace />} />
          <Route path="/Accueil" element={<Home />} />
          <Route path="/logement/:id" element={<LogementDetails />} />
          {/* Redirection de /about vers /APropos */}
          <Route path="/about" element={<Navigate to="/APropos" replace />} />
          <Route path="/APropos" element={<About />} />
          <Route path="/error404" element={<MissingPage />} />
          {/* Redirection vers `/error404` pour tout autre chemin non reconnu */}
          <Route path="*" element={<Navigate to="/error404" replace />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
