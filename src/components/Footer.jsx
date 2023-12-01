import { Link } from "react-router-dom";

const Footer = () => {
  const anneeActuelle = new Date().getFullYear();
  const anneeDebut = 2023;
  let copyrightText = `© ${anneeDebut}`;

  if (anneeActuelle > anneeDebut) {
    copyrightText += ` - ${anneeActuelle}`;
  }

  copyrightText += ` Fabrice Magnan de Bellevue | FabWebProjects.fr | Tous droits réservés | `;

  return (
    <footer>
      <div className="footer-container">
        <div className="left-section">{/* Autres éléments du footer si nécessaire */}</div>
        <div className="right-section">
          {copyrightText}
          <Link to="/mentions-legales" className="legal-link">
            Mentions Légales
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
