import { headerImage } from "../assets/images";
const Header = () => {
  return (
    <header className="header">
      <img src={headerImage} alt="Image de construction du site" className="logo" />
    </header>
  );
};

export default Header;
