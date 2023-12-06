import PropTypes from "prop-types";

const Description = ({ text }) => {
  return <p>{text}</p>;
};

Description.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Description;
