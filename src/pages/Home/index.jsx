import Banner from '../../components/Banner'
import Cards from '../../components/Cards' // Assure-toi que le chemin est correct
import accomodationsDatas from '../../datas/logements.json' // Vérifie le chemin d'accès
import '../../styles/pages/Home.scss'
import imgBannerHome from '../../assets/Kasa_Home.png'
import '../../styles/components/cards.scss'

function Home() {
  return (
    <div className="bodyMain">
      <Banner>
        <img src={imgBannerHome} alt="bannière" className="kasa-banner__img" />
        <div className="kasa-banner__overlay"></div>
        <h1 className="kasa-banner__title">Chez vous, partout et ailleurs</h1>
      </Banner>
      <div className="bodyMain__cardHolder">
        {accomodationsDatas.map((logement) => (
          <Cards
            key={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
