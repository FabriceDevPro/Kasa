import accommodationsData from "../../data/data.json";
import Card from "./Card";

const CardContainer = () => {
  return (
    <div className="card-container">
      {accommodationsData.map((accommodation) => (
        <Card key={accommodation.id} id={accommodation.id} title={accommodation.title} cover={accommodation.cover} />
      ))}
    </div>
  );
};

export default CardContainer;
