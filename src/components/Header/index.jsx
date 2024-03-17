/* React import */
import { Link } from 'react-router-dom'
/* Asset import */
import logoHeader from '../../assets/Kasa_Logo_Light.svg'

/**
 * @summary generate the header
 *
 */

function Header() {
  return (
    <header>
      <div className="kasa-logo">
        <img src={logoHeader} alt="logo kasa header" />
      </div>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </nav>
    </header>
  )
}

export default Header
