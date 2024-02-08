import { Link } from 'react-router-dom'
import logoHeader from '../../assets/Kasa_Logo_Light.svg'
import '../../styles/layouts/header.scss'

function Header() {
  return (
    <header>
      <div>
        <img src={logoHeader} alt="kasaLogo" />
      </div>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </nav>
    </header>
  )
}

export default Header
