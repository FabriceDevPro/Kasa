/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "../sass/layout/_banner.scss";

const Banner = ({ slides, bannerId }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const changeSlide = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    const timer = setInterval(changeSlide, 10000);
    return () => clearInterval(timer);
  }, [slides]);

  if (!slides || slides.length === 0) {
    return null;
  }

  const currentSlide = slides[currentIndex];

  const handleArrowClick = (direction) => {
    setCurrentIndex(direction === "left" ? (currentIndex === 0 ? slides.length - 1 : currentIndex - 1) : (currentIndex + 1) % slides.length);
  };

  return (
    <div id={bannerId} className="banner">
      <div className="banner-content">
        <a href={currentSlide.link} target="_blank" className="banner-link">
          <img src={currentSlide.image} alt="Banner" title="Cliquez-ici pour obtenir des informations" className="banner-img" />
        </a>
        <i className={`fa-solid fa-circle-chevron-left arrow_left`} onClick={() => handleArrowClick("left")}></i>
        <i className={`fa-solid fa-circle-chevron-right arrow_right`} onClick={() => handleArrowClick("right")}></i>
        <p className="description">
          {" "}
          {currentSlide.tagLine.text} <span>{currentSlide.tagLine.htmlContent}</span>
        </p>

        <div className="dots">
          {slides.map((_, index) => (
            <div key={index} className={`dot ${currentIndex === index ? "dot_selected" : ""}`} onClick={() => setCurrentIndex(index)}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
