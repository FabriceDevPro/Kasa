import { Footer_Logo } from "../assets/images";

const Footer = () => {
  const anneeActuelle = new Date().getFullYear();

  const copyrightText = ` © ${anneeActuelle} Kasa. All rights reserved `;

  return (
    <footer>
      <div className="footer-container">
        <img src={Footer_Logo} alt="Logo Kasa" className="logo" />
        <p>{copyrightText}</p>
      </div>
    </footer>
  );
};

export default Footer;
