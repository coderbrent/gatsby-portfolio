import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import { FiSun, FiMoon } from 'react-icons/fi';
import { 
  BACKGROUND_TRANSITION_TIME, 
  getTheme, 
  CUBIC_BEZIER_TRANSITION 
} from '../../utils/theme';
import Button from '../Button';
import GeekSvg from '../../Icons/geek.svg';
import BrentImage from '../BrentImage';

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
        margin: '3rem .5rem',
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
          margin: `0rem 1rem`,
          fontFamily: 'Trocchi',
          fontSize: `4rem`,
          color: secondary,
          fontWeight: `bold`,
          marginRight: `.75rem`,
          '@media (max-width: 576px)': {
            fontSize: `3.25rem`,
            transition: `${CUBIC_BEZIER_TRANSITION}`,
            marginLeft: `.75rem`
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
          display: `flex`,
          alignItems: `center`,
          borderRadius: `50%`, 
          padding: `.25rem`,
          transition: CUBIC_BEZIER_TRANSITION,
          '@media (max-width: 576px)': {
            display: `none`
          }
        }}
      >
        {/* <GeekSvg 
          css={{ 
            '@media (max-width: 576px)': {
              width: `2.75rem`,
              height: `2.75rem`,
              transition: `${CUBIC_BEZIER_TRANSITION}`,
            }
           }} 
        /> */}
        <BrentImage />
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
          transitionDelay: 
            theme === 'dark' ? '0s' : 
            BACKGROUND_TRANSITION_TIME,
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
