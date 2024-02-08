import { Link } from 'react-router-dom'
import logoHeader from '../../assets/Kasa_Logo_Light.svg'

function Header() {
  return (
    <nav>
      <div>
        <img src={logoHeader} alt="kasaLogo" />
      </div>
      <Link to="/">Accueil</Link>
      <Link to="/about">A Propos</Link>
    </nav>
  )
}

export default Header
