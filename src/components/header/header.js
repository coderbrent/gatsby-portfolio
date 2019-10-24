import { Link } from "gatsby"
import ThemeContext from "../../context/ThemeContext"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from '../header/header.module.css'

const Header = ({ siteTitle }) => (
  <ThemeContext.Consumer>
   { theme => (
  <header
    className={headerStyles.background}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#333`,
            textDecoration: `none`,
            fontSize: '2em',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
  )}
  </ThemeContext.Consumer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
