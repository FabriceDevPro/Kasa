import { useLocation } from "react-router-dom";
import { Banner_Accueil, Banner_APropos } from "../assets/images"; // Importez une autre image pour la page À Propos

const Banner = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const image = isHomePage ? Banner_Accueil : Banner_APropos; // Choisissez l'image en fonction de la page
  const textContent = isHomePage ? <p>Chez vous, partout et ailleurs</p> : null; // Affichez le texte seulement si vous êtes sur la page d'accueil

  return (
    <div className="Banner" style={{ backgroundImage: `url(${image})` }}>
      {textContent}
    </div>
  );
};

export default Banner;
