/* eslint-disable react/prop-types */
const Card = ({ title, cover }) => {
  return (
    <div className="card">
      <img src={cover} alt={title} className="card-image" />
      <div className="card-title">{title}</div>
    </div>
  );
};

export default Card;
