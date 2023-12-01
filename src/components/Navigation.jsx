import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "nav-active" : "")}>
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-active" : "")}>
            A Propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
