import PropTypes from "prop-types";

const Rating = ({ value }) => {
  // Créer un tableau d'étoiles basé sur la valeur
  let stars = [];
  for (let i = 0; i < value; i++) {
    stars.push(
      <span key={i} className="star">
        ★
      </span>
    );
  }

  return <div className="description-rating">{stars}</div>;
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Rating;
