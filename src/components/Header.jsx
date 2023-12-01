import { Header_Logo } from "../assets/images";
import Banner from "./Banner";
import Navigation from "./Navigation";
const Header = () => {
  return (
    <header className="header">
      <div className="header_nav">
        <div className="logo">
          <img src={Header_Logo} alt="Logo Kasa" />
        </div>
        <Navigation />
      </div>
      <Banner />
    </header>
  );
};

export default Header;
