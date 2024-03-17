/* React import */
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

/**
 * @summary generating the Cards for accommodation from "logements.json"
 *
 * @param {string} id id from each accommodation
 * @param {string} title  title of the accommodation
 * @param {string} cover main picture of the accommodation
 *
 * @example <Cards>
 *
 */

function Cards({ id, title, cover }) {
  return (
    <article className="cardWrapper">
      {/* generate <a> with react router */}
      <Link to={`/Accommodations/${id}`}>
        <div className="cardWrapper__title">{title}</div>{' '}
        <img src={cover} alt={title} className="cardWrapper__img" />{' '}
      </Link>
    </article>
  )
}

// Security for PropTypes
Cards.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
}

export default Cards
