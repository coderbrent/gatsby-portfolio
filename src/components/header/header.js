import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import ThemeContext from "../../context/ThemeContext"
import { FiSun, FiMoon } from 'react-icons/fi'
import { BACKGROUND_TRANSITION_TIME, getTheme, CUBIC_BEZIER_TRANSITION } from '../../utils/theme'
import Button from '../Button';
import GeekSvg from '../../Icons/geek.svg'

const Header = ({ siteTitle }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { background, secondary } = getTheme(theme);
  const darkTheme = getTheme('dark');

  return (
    <header 
      css={{
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-between`,
        margin: `2rem auto`,
        maxWidth: 960,
      }}>
      <div 
        css={{ 
          display: `flex`, 
          alignItems: `center`,
          width: `100%`,
        }}
      >
      <h1 
        css={{ 
          margin: 0, 
          fontSize: `3rem`,
          fontWeight: `bold`,
          marginRight: `.75rem`,
          '@media (max-width: 576px)': {
            fontSize: `1.5rem`,
            transition: `${CUBIC_BEZIER_TRANSITION}`
          }
        }}>
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
      <div 
        css={{ 
          backgroundColor: `${secondary}`, 
          display: `flex`, 
          alignItems: `center`,
          borderRadius: `50%`, 
          padding: `.25rem`,
          transition: CUBIC_BEZIER_TRANSITION
        }}
      >
        <GeekSvg />
      </div>
      </div>
      <Button
        aria-label="light and dark switch"
        circular
        onClick={toggleTheme}
        className="container"
        css={{
          marginRight: `1rem`,
          background,
          transitionDuration: '0s',
          transitionDelay: theme === 'dark' ? '0s' : BACKGROUND_TRANSITION_TIME,
          transitionProperty: 'background-color, color',
        }}
      >
        { theme === 'light' ? <FiSun/> : <FiMoon /> }
      <div 
        className={theme}
        css={{
          position: 'absolute',
          background: darkTheme.background,
          borderRadius: '50%',
          width: 32,
          height: 32,
          zIndex: -1,
          transition: 
            `transform ${BACKGROUND_TRANSITION_TIME} ease`, 
            '&.dark': { transform: 'scale(150)' }, 
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
