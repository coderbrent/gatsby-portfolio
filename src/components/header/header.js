import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import classes from '../header/header.module.css'

const Header = ({ siteTitle }) => (
  <header
    className={classes.background}
  >
    <div
      className={classes.header}
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
        <div className={classes.subtitle}>
          Full Stack JavaScript Developer
        </div>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
