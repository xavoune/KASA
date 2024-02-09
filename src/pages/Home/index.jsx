import Banner from '../../components/Banner'
import '../../styles/pages/Home.scss'
import imgBannerHome from '../../assets/Kasa_Home.png'

function Home() {
  return (
    <div className="bodyMain">
      <Banner>
        <img src={imgBannerHome} alt="bannière" className="kasa-banner__img" />
        <div className="kasa-banner__overlay"></div>
        <h1 className="kasa-banner__title">Chez vous, partout et ailleurs</h1>
      </Banner>
    </div>
  )
}

export default Home
