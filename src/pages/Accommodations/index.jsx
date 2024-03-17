/* React import */
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
/* Datas import */
import accommodationsData from '../../datas/logements.json'
/* Components imports */
import SlideShow from '../../components/SlideShow'
import Tags from '../../components/Tags'
import StarRating from '../../components/StarRating'
import Collapse from '../../components/Collapse'

/**
 * @summary generate the Accommodation pages
 *
 */

function Accommodation() {
  // id recuperation from the URL for each accommodations
  const { id } = useParams()
  const navigate = useNavigate()
  const [accommodation, setAccommodation] = useState(null)

  useEffect(() => {
    //seach of the id in datas
    const foundAccommodation = accommodationsData.find((item) => item.id === id)
    // if there is an error with the id
    if (!foundAccommodation) {
      navigate('/404', { replace: true })
      return
    }
    setAccommodation(foundAccommodation)
  }, [id, navigate])

  // in case of long loading time
  if (!accommodation) {
    return <div>Chargement...</div>
  }

  return (
    <div className="accommodation">
      {/* SlideShow component */}
      <SlideShow images={accommodation.pictures} />
      <div className="accommodation__title">
        <div className="accommodation__title-location">
          <h1>{accommodation.title}</h1>
          <p>{accommodation.location}</p>
          {/* Tags component */}
          <Tags tags={accommodation.tags} />
        </div>
        <div className="accommodation__title-host">
          <div className="accommodation__host-info">
            <p>{accommodation.host.name}</p>
            <img
              src={accommodation.host.picture}
              alt={accommodation.host.name}
            />
          </div>
          {/* StarRating component */}
          <StarRating rating={accommodation.rating} />
        </div>
      </div>
      <div className="accommodation__description">
        {/* Collapse component with modification for Accommodation page display */}
        <Collapse title="Description" className="collapse--accommodation">
          <p>{accommodation.description}</p>
        </Collapse>
        {/* Collapse component with modification for Accommodation page display */}
        <Collapse title="Équipements" className="collapse--accommodation">
          <ul>
            {accommodation.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  )
}

export default Accommodation
