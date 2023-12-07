import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Card = ({ id, title, cover }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/logement/${id}`);
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <img src={cover} alt={title} className="card-image" />
      <div className="card-title">{title}</div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default Card;
