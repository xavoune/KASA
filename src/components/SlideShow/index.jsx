/* React import */
import React, { useState } from 'react'

/**
 * @summary generating the Slideshow in Accommodation pages
 *
 * @param {string} images pictures form the accommodation
 *
 * @example <Slideshow>
 *
 */

function SlideShow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  /**
   * @summary change images on click event
   *
   */

  function goToPrevious() {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1,
    )
  }

  /**
   * @summary change images on click event
   *
   */

  function goToNext() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  /**
   * @summary generating an arrow svg to nagivate between the slideshow images
   *
   * @param {string} className class for the svg
   * @param {string} onClick function who will be executed
   * @param {string} isNext arrow direction
   *
   * @example <SvgArrow>
   *
   */

  function SvgArrow({ className, onClick, isNext = true }) {
    return (
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
  }

  // Navigation counter
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

export default SlideShow

// ajouter défilement auto (3sec)
