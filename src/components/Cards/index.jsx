import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../../styles/components/cards.scss'

function Cards({ id, title, cover }) {
  // Destructuration des props pour utilisation directe
  return (
    <Link to={`/Accommodations/${id}`}>
      <div className="cardWrapper">
        <div className="cardWrapper__title">{title}</div>{' '}
        {/* Utilisation de la prop title */}
        <img src={cover} alt={title} className="cardWrapper__img" />{' '}
        {/* Utilisation de la prop cover pour le src de l'image */}
      </div>
    </Link>
  )
}

// Correction des PropTypes
Cards.propTypes = {
  title: PropTypes.string.isRequired, // Correction : "title" au lieu de "label"
  cover: PropTypes.string.isRequired, // Correction : "cover" au lieu de "picture"
}

export default Cards
