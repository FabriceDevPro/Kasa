import { useNavigate } from "react-router-dom";

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

export default Card;
