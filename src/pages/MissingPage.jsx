import { Link } from "react-router-dom";

const MissingPage = () => {
  return (
    <div className="MissingPage">
      <div className="error">
        <h1>404</h1>
      </div>
      <p>{"Oups! La page que vous demandez n'existe pas."}</p>
      <Link to="/" className="link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
};

export default MissingPage;
