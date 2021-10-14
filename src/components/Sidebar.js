import React, { useContext } from "react"
import Button from "../components/Button"
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiSun,
  FiMoon,
} from "react-icons/fi"
import { FaFilePdf } from "react-icons/fa"
import { BACKGROUND_TRANSITION_TIME, getTheme } from "../utils/theme"
import ThemeContext from "../context/ThemeContext"

const Sidebar = props => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const { background } = getTheme(theme)
  const darkTheme = getTheme("dark")
  const { social } = props.data.site.siteMetadata

  return (
    <>
      <aside
        css={{
          display: "flex",
          flexDirection: "row",
          columnGap: "1.25rem",
          "@media (max-width: 726px)": {
            columnGap: "2rem",
          },
        }}
      >
        <Button
          aria-label="toggle dark mode"
          circular
          className="container"
          onClick={toggleTheme}
          css={{
            marginTop: "1rem",
            background,
            transitionDuration: "0s",
            transitionProperty: "background-color, color",
            transitionDelay:
              theme === "dark" ? "0s" : BACKGROUND_TRANSITION_TIME,
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
        <Button
          className="container"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="link to my github page"
          as="a"
          circular
          css={{
            marginTop: "1rem",
          }}
          href={social.github}
        >
          <FiGithub />
        </Button>
        <Button
          className="container"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="my linkedin page"
          circular
          as="a"
          css={{
            marginTop: "1rem",
          }}
          href={social.linkedin}
        >
          <FiLinkedin />
        </Button>
        <Button
          className="container"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="my twitter page"
          circular
          as="a"
          css={{
            marginTop: "1rem",
          }}
          href={social.twitter}
        >
          <FiTwitter />
        </Button>
        <Button
          aria-label="send me an email"
          circular
          as="a"
          css={{
            marginTop: "1rem",
          }}
          href={social.email}
        >
          <FiMail />
        </Button>
        <Button
          target="_blank"
          rel="noopener noreferrer"
          aria-label="link to my resume"
          circular
          as="a"
          css={{
            marginTop: "1rem",
          }}
          href={social.resume}
        >
          <FaFilePdf />
        </Button>
      </aside>
    </>
  )
}

export default Sidebar
