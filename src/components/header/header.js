import React, { useContext } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import ThemeContext from "../../context/ThemeContext"
import NavLink from "../NavLink"
import Button from "../Button"
import { FiSun, FiMoon } from "react-icons/fi"
import {
  BACKGROUND_TRANSITION_TIME,
  CUBIC_BEZIER_TRANSITION,
  getTheme,
} from "../../utils/theme"

const Header = ({ siteTitle }) => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const { background, color } = getTheme(theme)
  const darkTheme = getTheme("dark")

  return (
    <header
      css={{
        display: `flex`,
        alignItems: "center",
        width: "100%",
        flexWrap: "wrap",
        flexDirection: "row",
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
            fontSize: `2.5rem`,
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
      <Button
        aria-label="toggle dark mode"
        circular
        onClick={toggleTheme}
        className="container"
        css={{
          marginTop: "1rem",
          background,
          transitionDuration: "0s",
          transitionProperty: "background-color, color",
          transitionDelay: theme === "dark" ? "0s" : BACKGROUND_TRANSITION_TIME,
          "@media (max-width: 576px)": {
            order: 2,
          },
        }}
      >
        {theme === "light" ? <FiSun /> : <FiMoon />}
        <div
          className={theme}
          css={{
            position: "absolute",
            background: darkTheme.background,
            borderRadius: "50%",
            width: 32,
            height: 32,
            zIndex: -1,
            transition: `transform ${BACKGROUND_TRANSITION_TIME} ease`,
            "&.dark": { transform: "scale(150)" },
          }}
        />
      </Button>
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
