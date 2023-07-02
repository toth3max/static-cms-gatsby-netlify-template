import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";

const Layout = ({ children }) => {


  return (
    <div id="page">
      <div id="logo">
        <a href="/">
          <StaticImage src="../images/logo.mappia.colorfull.png" alt="Mappia" />
        </a>
      </div>

      <div id="login-button">
        <a href="https://app.mappia.se/login">Logga in</a>
      </div>

      <nav id="nav-main">
        <ul>
          <li id="order-button">
            <Link to="https://www.logistikteamet.se/pluggamedbilder">Beställ här</Link>
          </li>
          {/* <li>
            <Link to="/pedagogik">Pedagogik</Link>
          </li>
          <li>
            <Link to="/om-mappia">Om Mappia</Link>
          </li> */}
          <li>
            <Link to="/sagt-om-oss">Sagt om oss</Link>
          </li>
        </ul>
      </nav>

      {children}

      <footer className="wrap-main-bg-footer-color">
        <article>
          <div id="footer-logo">
            <StaticImage src="../images/logo.mappia.dark.png" alt="Mappia" />
          </div>
          <div>
            <h3>Kontakt:</h3>
            <p>info@mappia.se</p>
            <p>info@pluggamedbilder.se</p>
            <p>Tel 070 672 77 80</p>
          </div>
          <div>
            <h3>Följ oss:</h3>
            <p>Instagram</p>
            <p>Facebook</p>
          </div>
        </article>
      </footer>
    </div>
  )
}

export default Layout
