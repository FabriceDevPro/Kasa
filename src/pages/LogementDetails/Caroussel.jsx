import { useState } from "react";
import PropTypes from "prop-types";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Carousel = ({ images, title }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const totalImages = images.length;

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? totalImages - 1 : prevIndex - 1));
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === totalImages - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      {totalImages > 1 && <FaAngleLeft className="arrow left" onClick={goToPreviousImage} />}
      <img className="carousel-img" src={images[currentImageIndex]} alt={title} />
      {totalImages > 1 && <FaAngleRight className="arrow right" onClick={goToNextImage} />}
      {totalImages > 1 && (
        <div className="image-counter">
          {currentImageIndex + 1} / {totalImages}
        </div>
      )}
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Carousel;
