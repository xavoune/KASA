import logoFooter from '../../assets/Kasa_Logo_Dark.svg'
import '../../styles/layouts/footer.scss'

function Footer() {
  return (
    <footer>
      <img src={logoFooter} alt="kasaLogo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
