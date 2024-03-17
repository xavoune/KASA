/* Components import */
import Banner from '../../components/Banner'
import Cards from '../../components/Cards'
/* Datas import */
import accomodationsDatas from '../../datas/logements.json'
/* Assets import */
import imgBannerHome from '../../assets/Kasa_Home.png'

/**
 * @summary generate the Home page
 *
 */

function Home() {
  return (
    <div className="home">
      {/* Banner component with modification for Home page display */}
      <Banner className="banner--home">
        <img src={imgBannerHome} alt="bannière" className="banner__img" />
        <div className="banner__overlay"></div>
        <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
      </Banner>
      <section className="home__card-holder">
        {accomodationsDatas.map((accommodation) => (
          // Cards component
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
