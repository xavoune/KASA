/* Component */
import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
/* Styles + assets */
import imgBannerAbout from '../../assets/Kasa_About.png'

function About() {
  return (
    <div className="about">
      <Banner className="banner--about">
        <img src={imgBannerAbout} alt="bannière" className="banner__img" />
        <div className="banner__overlay"></div>
      </Banner>
      <div className="about__collapse">
        <Collapse title="Fiabilité" className="collapse--about">
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </Collapse>
        <Collapse title="Respect" className="collapse--about">
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Collapse>
        <Collapse title="Service" className="collapse--about">
          <p>
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </p>
        </Collapse>
        <Collapse title="Sécurité" className="collapse--about">
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </Collapse>
      </div>
    </div>
  )
}

export default About
