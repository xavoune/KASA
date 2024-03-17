import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import accommodationsData from '../../datas/logements.json'
import Slideshow from '../../components/Carousel'
import StarRating from '../../components/starRating'
import Tags from '../../components/Tags'
import Collapse from '../../components/Collapse'

function Accommodation() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [accommodation, setAccommodation] = useState(null)

  useEffect(() => {
    const foundAccommodation = accommodationsData.find((item) => item.id === id)
    if (!foundAccommodation) {
      navigate('/404', { replace: true })
      return
    }
    setAccommodation(foundAccommodation)
  }, [id, navigate])

  if (!accommodation) {
    return <div>Chargement...</div>
  }

  return (
    <div className="accommodation">
      <Slideshow images={accommodation.pictures} />
      <div className="accommodation__title">
        <div className="accommodation__title-location">
          <h1>{accommodation.title}</h1>
          <p>{accommodation.location}</p>
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
          <StarRating rating={accommodation.rating} />
        </div>
      </div>
      <div className="accommodation__description">
        <Collapse title="Description" className="collapse--accommodation">
          <p>{accommodation.description}</p>
        </Collapse>
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
