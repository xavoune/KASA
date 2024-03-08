import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import accommodationsData from '../../datas/logements.json' // Assurez-vous d'ajuster le chemin selon votre structure de projet
import Slideshow from '../../components/Carousel'
import StarRating from '../../components/starRating'
import Tags from '../../components/Tags'
import '../../styles/pages/Accommodations.scss'

function Accommodation() {
  const { id } = useParams() // Récupère l'ID du paramètre URL
  const [accommodation, setAccommodation] = useState(null)

  useEffect(() => {
    // Trouvez le logement correspondant par ID
    const foundAccommodation = accommodationsData.find((item) => item.id === id)
    setAccommodation(foundAccommodation)
  }, [id]) // Recharge le composant lorsque l'ID change

  if (!accommodation) {
    // Ajout d'une vérification ici pour gérer l'état null
    // Vous pouvez choisir de rendre quelque chose de différent ici, comme un spinner de chargement ou simplement rien.
    return <div>Chargement...</div> // Ou <div></div> si vous ne voulez rien afficher
  }

  return (
    <div className="accommodationBody">
      <Slideshow images={accommodation.pictures} />

      {/* Maintenant, cette ligne ne causera pas d'erreur car elle est exécutée seulement si accommodation n'est pas null */}
      <div className="accommodationBody__title">
        <div className="accommodationBody__title--location">
          <h1>{accommodation.title}</h1>
          <p>{accommodation.location}</p>
          <Tags tags={accommodation.tags} />
        </div>
        <div className="accommodationBody__title--host">
          <p>{accommodation.host.name}</p>
          <img src={accommodation.host.picture} alt={accommodation.host.name} />
          <StarRating rating={accommodation.rating} />
        </div>
        {/* Et ainsi de suite pour les autres propriétés de l'accommodation */}
      </div>
    </div>
  )
}

export default Accommodation
