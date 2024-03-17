/* React import */
import { Link } from 'react-router-dom'
/* Asset import */
import errorImg from '../../assets/Kasa_404.png'

/**
 * @summary generate the content of 404 page
 *
 */

function Error() {
  return (
    <div className="error__container">
      <div className="error__body">
        <div className="error__message">
          <img
            src={errorImg}
            alt="erreur 404"
            className="error__message__img"
          />
          <h1 className="error__message__title">
            Oups! La page que vous demandez n'existe pas.
          </h1>
        </div>
        <Link to="/">Retourner a la page d'accueil</Link>
      </div>
    </div>
  )
}

export default Error
