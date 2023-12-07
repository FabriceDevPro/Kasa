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

  const handleKeyDown = (e) => {
    if (document.activeElement.classList.contains("carousel")) {
      if (e.key === "ArrowLeft") {
        goToPreviousImage();
      } else if (e.key === "ArrowRight") {
        goToNextImage();
      }
    }
  };

  return (
    <div
      className="carousel"
      tabIndex="0" // Important pour rendre le div focusable
      onKeyDown={handleKeyDown}>
      {totalImages > 1 && (
        <button aria-label="Previous image" onClick={goToPreviousImage} className="arrow left">
          <FaAngleLeft />
        </button>
      )}
      <img className="carousel-img" src={images[currentImageIndex]} alt={title} />
      {totalImages > 1 && (
        <button aria-label="Next image" onClick={goToNextImage} className="arrow right">
          <FaAngleRight />
        </button>
      )}
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
