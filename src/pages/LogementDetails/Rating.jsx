import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa6";

const Rating = ({ value }) => {
  const totalStars = 5;

  // Créer une liste d'étoiles basée sur la note
  const stars = Array.from({ length: totalStars }, (_, index) => {
    return <FaStar key={index} className={index < value ? "star filled" : "star"} />;
  });

  return <div className="description-rating">{stars}</div>;
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Rating;
