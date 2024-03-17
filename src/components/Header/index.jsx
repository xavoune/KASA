import { Link } from 'react-router-dom'
import logoHeader from '../../assets/Kasa_Logo_Light.svg'

function Header() {
  return (
    <header>
      <div className="kasaLogo">
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
