import { useState } from 'react';
import './Slideshow.scss';

const Slideshow = ({ pictures }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const hasMultiplePictures = pictures.length > 1;

  const goToPrevious = () => {
    setActiveIndex((activeIndex - 1 + pictures.length) % pictures.length);
  };

  const goToNext = () => {
    setActiveIndex((activeIndex + 1) % pictures.length);
  };

  return (
    <div className="slideshow">
      <img src={pictures[activeIndex]} alt="" className="slideshow__image" />
      {hasMultiplePictures && (
        <>
          <button
            className="slideshow__arrow slideshow__arrow--left"
            onClick={goToPrevious}
            aria-label="Image précédente"
          >
            ‹
          </button>
          <button
            className="slideshow__arrow slideshow__arrow--right"
            onClick={goToNext}
            aria-label="Image suivante"
          >
            ›
          </button>
          <div className="slideshow__counter">
            {activeIndex + 1}/{pictures.length}
          </div>
        </>
      )}
    </div>
  );
};

export default Slideshow;
