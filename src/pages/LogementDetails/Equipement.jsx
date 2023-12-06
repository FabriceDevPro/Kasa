import PropTypes from "prop-types";

const Equipments = ({ text }) => {
  return <p>{text}</p>;
};

Equipments.propTypes = {
  text: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Equipments;
