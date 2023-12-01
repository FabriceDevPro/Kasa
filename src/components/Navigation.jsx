// Navigation.js
import { NavLink } from "react-router-dom";
import { FaHome, FaInfoCircle, FaLaptopCode } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";

const Navigation = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "bouton-projet nav-active" : "bouton-projet")}>
            <FaHome className="nav-icon" /> Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "bouton-projet nav-active" : "bouton-projet")}>
            <FaInfoCircle className="nav-icon" />À Propos
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "bouton-projet nav-active" : "bouton-projet")}>
            <MdContactMail className="nav-icon" />
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/personnel/ProjetPerso" className={({ isActive }) => (isActive ? "bouton-projet nav-active" : "bouton-projet")}>
            <FaLaptopCode className="nav-icon" />
            Projet Perso
          </NavLink>
        </li>
        <li>
          <NavLink to="/formation/ProjetFormation2" className={({ isActive }) => (isActive ? "bouton-projet nav-active" : "bouton-projet")}>
            <FaLaptopCode className="nav-icon" />
            Projet Formation
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
