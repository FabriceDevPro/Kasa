import { useLocation } from "react-router-dom";
import { Header_Logo } from "../assets/images";
import Banner from "./Banner";
import Navigation from "./Navigation";
const Header = () => {
  const location = useLocation(); // Ceci récupère l'objet de localisation qui représente l'URL courante

  // Affichez le composant Banner uniquement si le chemin n'est pas '/error404'
  const shouldDisplayBanner = location.pathname !== "/error404";

  return (
    <header className="header">
      <div className="header_nav">
        <div className="logo">
          <img src={Header_Logo} alt="Logo Kasa" />
        </div>
        <Navigation />
      </div>
      {shouldDisplayBanner && <Banner />}
    </header>
  );
};

export default Header;
