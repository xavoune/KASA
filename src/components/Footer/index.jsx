/* Asset import */
import logoFooter from '../../assets/Kasa_Logo_Dark.svg'

/**
 * @summary generate the footer
 *
 */

function Footer() {
  return (
    <footer>
      <img src={logoFooter} alt="logo kasa footer" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
