import PropTypes from "prop-types";

const Tag = ({ text }) => {
  return <span className="tag">{text}</span>;
};

Tag.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Tag;
