import React, { useContext } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import ThemeContext from "../context/ThemeContext"
import NavLink from "./NavLink"
import BrentImage from "./BrentImage"
import { CUBIC_BEZIER_TRANSITION, getTheme } from "../utils/theme"

const Header = ({ siteTitle }) => {
  const { theme, color } = useContext(ThemeContext)

  return (
    <header>
      <div
        css={{
          display: "flex",
          alignItems: "center",
          width: "75%",
          flexWrap: "nowrap",
          "@media (max-width: 576px)": {
            width: "100%",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
          },
        }}
      >
        <div
          css={{
            display: `flex`,
            alignItems: "left",
            width: "100%",
            flexWrap: "wrap",
            flexDirection: "column",
            "@media (max-width: 576px)": {
              alignContent: "center",
            },
          }}
        >
          <h1
            css={{
              margin: 0,
              padding: 0,
              fontFamily: "Roboto Slab",
              fontSize: `3.5rem`,
              color,
              fontWeight: `bold`,
              marginRight: `.75rem`,
              "@media (max-width: 576px)": {
                fontSize: `3.75rem`,
                textAlign: "center",
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
          <nav
            css={{
              display: "flex",
              "@media (max-width: 576px)": {
                alignSelf: "center",
                gap: "3rem",
                fontSize: "1.5rem",
              },
            }}
          >
            <NavLink dest="/" text="home" theme={getTheme(theme)} />
            <NavLink dest="/blog" text="blog" theme={getTheme(theme)} />
            <NavLink dest="/projects" text="projects" theme={getTheme(theme)} />
          </nav>
        </div>
        <BrentImage />
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
