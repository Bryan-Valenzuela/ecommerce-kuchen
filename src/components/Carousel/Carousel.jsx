import React, { useEffect, useState } from 'react';
import './Carousel.css';

export const Carousel = ({ images = [], interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(autoSlide);
  }, [images.length, interval]);

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div
        className="carousel__slide"
        style={{ backgroundImage: `url(${images[currentIndex].url})` }}
      >
        {/* Optional overlay or text */}
        <div className="carousel__caption">
          {images[currentIndex].caption}
        </div>
      </div>

      <div className="carousel__indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`carousel__dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
