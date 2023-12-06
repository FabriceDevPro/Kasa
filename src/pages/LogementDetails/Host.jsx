import PropTypes from "prop-types";

const Host = ({ name, picture }) => {
  return (
    <div className="description-host">
      <div className="host-name">{name}</div>
      <img src={picture} alt={`Photo de ${name}`} className="host-picture" />
    </div>
  );
};

Host.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default Host;
