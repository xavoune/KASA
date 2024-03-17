import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Cards({ id, title, cover }) {
  // Destructuration des props pour utilisation directe
  return (
    <article className="cardWrapper">
      <Link to={`/Accommodations/${id}`}>
        <div className="cardWrapper__title">{title}</div>{' '}
        {/* Utilisation de la prop title */}
        <img src={cover} alt={title} className="cardWrapper__img" />{' '}
        {/* Utilisation de la prop cover pour le src de l'image */}
      </Link>
    </article>
  )
}

// Correction des PropTypes
Cards.propTypes = {
  title: PropTypes.string.isRequired, // Correction : "title" au lieu de "label"
  cover: PropTypes.string.isRequired, // Correction : "cover" au lieu de "picture"
}

export default Cards
