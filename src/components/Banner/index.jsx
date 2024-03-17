/**
 * @summary generating the Banner in Home and About page
 *
 * @param {string} children banner content
 * @param {string} className class for special modification between pages
 *
 * @example <Banner className="content-class">
 *
 */

function Banner({ children, className }) {
  return <div className={`banner ${className}`}>{children}</div>
}

export default Banner
