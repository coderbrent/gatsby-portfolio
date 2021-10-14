import React, { useContext } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import ThemeContext from "../context/ThemeContext"
import NavLink from "./NavLink"
import { CUBIC_BEZIER_TRANSITION, getTheme } from "../utils/theme"

const Header = ({ siteTitle }) => {
  const { theme, color } = useContext(ThemeContext)

  return (
    <header>
      <div
        css={{
          display: `flex`,
          alignItems: "left",
          width: "100%",
          flexWrap: "wrap",
          flexDirection: "column",
        }}
      >
        <h1
          css={{
            margin: 0,
            padding: 0,
            fontFamily: "Roboto Slab",
            fontSize: `4.25rem`,
            color,
            fontWeight: `bold`,
            marginRight: `.75rem`,
            "@media (max-width: 576px)": {
              fontSize: `3.75rem`,
              transition: `${CUBIC_BEZIER_TRANSITION}`,
            },
          }}
        >
          <Link
            to="/"
            style={{
              boxShadow: `none`,
              color: `inherit`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <nav>
          <NavLink dest="/" text="home" theme={getTheme(theme)} />
          <NavLink dest="/blog" text="blog" theme={getTheme(theme)} />
          <NavLink dest="/projects" text="projects" theme={getTheme(theme)} />
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: PropTypes.string,
}

export default Header
