import Banner from '../../components/Banner'
import imgBannerAbout from '../../assets/Kasa_About.png'

function About() {
  return (
    <div className="bodyMain">
      <Banner>
        <img src={imgBannerAbout} alt="bannière" className="kasa-banner__img" />
        <div className="kasa-banner__overlay"></div>
      </Banner>
    </div>
  )
}

export default About
