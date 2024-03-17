/* Components + datas */
import Banner from '../../components/Banner'
import Cards from '../../components/Cards'
import accomodationsDatas from '../../datas/logements.json'
/* Styles + assets */
import imgBannerHome from '../../assets/Kasa_Home.png'

/* Génération de la page Home */
function Home() {
  return (
    <div className="home">
      {/* Component Banner version Home */}
      <Banner className="banner--home">
        <img src={imgBannerHome} alt="bannière" className="banner__img" />
        <div className="banner__overlay"></div>
        <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
      </Banner>
      <section className="home__card-holder">
        {accomodationsDatas.map((accommodation) => (
          // Component Cards qui génère une card par logement
          <Cards
            key={accommodation.id}
            id={accommodation.id}
            title={accommodation.title}
            cover={accommodation.cover}
          />
        ))}
      </section>
    </div>
  )
}

export default Home
