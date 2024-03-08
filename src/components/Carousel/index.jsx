import '../../styles/components/carousel.scss'
import React, { useState } from 'react'

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1,
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const SvgArrow = ({ className, onClick, isNext = true }) => (
    <button className={`slide-button ${className}`} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="80"
        viewBox="0 0 48 80"
        fill="none"
        style={{ transform: isNext ? 'none' : 'rotate(180deg)' }}
      >
        <path
          d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
          fill="white"
        />
      </svg>
    </button>
  )

  // Compteur de navigation
  const counterText = `${currentIndex + 1}/${images.length}`

  return (
    <div className="slideshow-container">
      {images && images.length > 0 && (
        <>
          <SvgArrow
            className="previous-button"
            onClick={goToPrevious}
            isNext={false}
          />
          <img
            className="slide-image"
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
          />
          <div className="slide-counter">{counterText}</div>{' '}
          {/* Ajout du compteur ici */}
          <SvgArrow className="next-button" onClick={goToNext} />
        </>
      )}
    </div>
  )
}

export default Slideshow

// ajouter défilement auto (3sec)
