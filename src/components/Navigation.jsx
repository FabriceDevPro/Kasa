import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <NavLink to="/Accueil" className={({ isActive }) => (isActive ? "nav-active" : "")}>
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/APropos" className={({ isActive }) => (isActive ? "nav-active" : "")}>
            A Propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
