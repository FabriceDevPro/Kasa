import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import accommodationsData from "../data/data.json";
import Collapsible from "../components/Collapsible";
import Tag from "./LogementDetails/Tag";
import Host from "./LogementDetails/Host";
import Rating from "./LogementDetails/Rating";
import Description from "./LogementDetails/Description";
import Equipments from "./LogementDetails/Equipement";

const LogementDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  const totalImages = accommodation.pictures.length;

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? totalImages - 1 : prevIndex - 1));
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === totalImages - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="LogementDetails">
      <div className="carousel">
        {totalImages > 1 && <FaAngleLeft className="arrow left" onClick={goToPreviousImage} />}
        <img className="carousel-img" src={accommodation.pictures[currentImageIndex]} alt={accommodation.title} />
        {totalImages > 1 && <FaAngleRight className="arrow right" onClick={goToNextImage} />}
        <div className="image-counter">
          {currentImageIndex + 1} / {totalImages}
        </div>
      </div>
      <div className="description">
        <div className="description-information">
          <div className="description-title-location-tag">
            <h1>{accommodation.title}</h1>
            <div className="location">{accommodation.location}</div>
            <div className="tags">
              {accommodation.tags.map((tag, index) => (
                <Tag key={index} text={tag} />
              ))}
            </div>
          </div>
          <div className="description-host-rating">
            <div className="description-host">
              <Host name={accommodation.host.name} picture={accommodation.host.picture} />
            </div>
            <div className="description-rating">
              <Rating value={parseInt(accommodation.rating, 10)} />
            </div>
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
        {/* Autres détails du logement */}
      </div>
    </div>
  );
};

export default LogementDetails;
