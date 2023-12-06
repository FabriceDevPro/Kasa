import { useLocation } from "react-router-dom";
import { Banner_Accueil, Banner_APropos } from "../assets/images"; // Assurez-vous que ces images sont correctement importées

const Banner = () => {
  const location = useLocation();

  // Vérifiez si la page actuelle est soit /Accueil soit /APropos
  const shouldDisplayBanner = location.pathname === "/Accueil" || location.pathname === "/APropos";

  // Choisissez l'image en fonction de la page
  const image = location.pathname === "/Accueil" ? Banner_Accueil : Banner_APropos;

  // Affichez le texte seulement si vous êtes sur la page d'accueil
  const textContent = location.pathname === "/Accueil" ? <p>Chez vous, partout et ailleurs</p> : null;

  // Rendre le composant Banner ou null en fonction de la condition
  return shouldDisplayBanner ? (
    <div className="Banner" style={{ backgroundImage: `url(${image})` }}>
      {textContent}
    </div>
  ) : null;
};

export default Banner;
