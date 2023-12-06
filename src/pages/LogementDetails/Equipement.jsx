import PropTypes from "prop-types";

const Equipments = ({ items }) => {
  return (
    <ul className="no-bullets">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

Equipments.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Equipments;
