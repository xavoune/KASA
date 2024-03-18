/* React import */
import { Link, useLocation } from 'react-router-dom'
/* Asset import */
import logoHeader from '../../assets/Kasa_Logo_Light.svg'

/**
 * @summary generate the header
 *
 */

function Header() {
  const location = useLocation()

  // Fonction pour déterminer si le lien doit être activé
  const isActive = (pathname) => location.pathname === pathname

  return (
    <header>
      <div className="kasa-logo">
        <img src={logoHeader} alt="logo kasa header" />
      </div>
      <nav>
        <Link to="/" className={isActive('/') ? 'link-active' : ''}>
          Accueil
        </Link>
        <Link to="/about" className={isActive('/about') ? 'link-active' : ''}>
          A Propos
        </Link>
      </nav>
    </header>
  )
}

export default Header
