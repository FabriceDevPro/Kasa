import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import accommodationsData from "../data/data.json";
import Collapsible from "../components/Collapsible";
import Tag from "./LogementDetails/Tag";
import Host from "./LogementDetails/Host";
import Rating from "./LogementDetails/Rating";
import Description from "./LogementDetails/Description";
import Equipments from "./LogementDetails/Equipement";
import Carousel from "./LogementDetails/Caroussel";
import PageTitle from "../components/PageTitle";

const LogementDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const accommodation = accommodationsData.find((item) => item.id === id);
    if (!accommodation) {
      navigate("/error404", { replace: true });
    }
  }, [id, navigate]);

  const accommodation = accommodationsData.find((item) => item.id === id);
  if (!accommodation) {
    return null;
  }

  return (
    <div className="LogementDetails">
      <PageTitle title="Kasa - Logement Description" />
      <Carousel images={accommodation.pictures} title={accommodation.title} />
      <div className="description">
        <div className="description-information">
          <div className="description-title-location-tag">
            <h1>{accommodation.title}</h1>
            <div className="location">
              <p>{accommodation.location}</p>
            </div>
            <div className="tags">
              {accommodation.tags.map((tag, index) => (
                <Tag key={index} text={tag} />
              ))}
            </div>
          </div>
          <div className="description-host-rating">
            <Host name={accommodation.host.name} picture={accommodation.host.picture} />
            <Rating value={parseInt(accommodation.rating, 10)} />
          </div>
        </div>
        <div className="description-collapse">
          <Collapsible title="Description">
            <Description text={accommodation.description} />
          </Collapsible>
          <Collapsible title="Équipements">
            <Equipments items={accommodation.equipments} />
          </Collapsible>
        </div>
      </div>
    </div>
  );
};

export default LogementDetails;
