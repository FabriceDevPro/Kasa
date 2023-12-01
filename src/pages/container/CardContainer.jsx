import accommodationsData from "../../data/data.json"; // Ajustez le chemin si nécessaire
import Card from "../Card";

const CardContainer = () => {
  // Pas besoin d'utiliser useState si les données ne changent pas
  return (
    <div className="card-container">
      {accommodationsData.map((accommodation) => (
        <Card key={accommodation.id} title={accommodation.title} cover={accommodation.cover} />
      ))}
    </div>
  );
};

export default CardContainer;
