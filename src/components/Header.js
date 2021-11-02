import React, { useContext } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import ThemeContext from "../context/ThemeContext"
import NavLink from "./NavLink"
import { CUBIC_BEZIER_TRANSITION, getTheme } from "../utils/theme"
import BrentImage from "./BrentImage"

const Header = ({ siteTitle }) => {
  const { theme, color } = useContext(ThemeContext)

  return (
    <header>
      <div
        css={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          css={{
            "@media (max-width: 576px)": {
              alignContent: "center",
            },
          }}
        >
          <h1
            css={{
              width: "100%",
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
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            css={{
              flexGrow: 1,
              "@media (max-width: 576px)": {
                display: "none",
              },
            }}
          >
            <div css={{ clipPath: "circle(90px at center)" }}>
              <BrentImage />
            </div>
          </div>
        </div>
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
