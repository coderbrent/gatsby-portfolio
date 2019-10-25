import React, { useState } from 'react';
import { Link } from 'gatsby'
import menuStyles from '../menu/menu.module.css'
import GithubIcon from '../../Icons/github.svg'
import TwitterIcon from '../../Icons/twitter.svg'
import LinkedInLogo from '../../Icons/linkedin.svg'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const Menu = () => {
  const [isVisible, setVisible] = useState({ isVisible: null })
  
  const toggleMobile = () => {
    if(isVisible) {
      setVisible(false);
      return console.log('false')
    }
      setVisible(true);
      return console.log('true')
  }

  return (
    <ThemeToggler>
        {({ theme, toggleTheme }) => (
    <>
    <nav className={menuStyles.navWrapper}>
      <ul className={menuStyles.navBar}>
        <li className={menuStyles.navLink}>
          <Link className={menuStyles.navBarItem} to="/">about</Link>
        </li>
        <li>
          <Link className={menuStyles.navBarItem} to="/contact">contact</Link>
        </li>
        <li>
          <Link className={menuStyles.navBarItem} to="/portfolio">portfolio</Link>
         </li>
         <li>
          <Link className={menuStyles.navBarItem} to="/blog">blog</Link>
        </li>
      </ul>
      <ul className={menuStyles.navSocial}>
      {/* <label>
        <input
          type="checkbox"
          onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
          checked={theme === 'dark'}
        />{' '}
        Dark mode
      </label> */}
      <li>
          <a href="https://www.twitter.com/brenta1283" 
            className={menuStyles.navSocialItem}>
              <TwitterIcon 
                className={menuStyles.navSocialLinks}
                fill={'white'} />
          </a>
        </li>
        <li>
          <a href="https://github.com/coderbrent"
            className={menuStyles.navSocialItem}>
              <GithubIcon 
                className={menuStyles.navSocialLinks}
                fill={'white'}/>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/brent-abruzese" 
            className={menuStyles.navSocialItem}>
              <LinkedInLogo 
                className={menuStyles.navSocialLinks} 
                fill={'white'}/>
          </a>
        </li>
        </ul>

        <ul className={menuStyles.hamburgerMenu}>
          <p>Brent Abruzese</p>
          <button onClick={() => toggleMobile()} className={menuStyles.hamburgerButton}>
              ☰
          </button>
        </ul>
    </nav>
    <div className={ isVisible ? menuStyles.backUp : menuStyles.dropDown }>
      <li className={menuStyles.hamburgerMenuLinks}>
        <Link to="/">about</Link>
        </li>
        <li className={menuStyles.hamburgerMenuLinks}>
          <Link to="/contact">contact</Link>
        </li>
        <li className={menuStyles.hamburgerMenuLinks}>
          <Link to="/portfolio">portfolio</Link>
        </li>
        <li className={menuStyles.hamburgerMenuLinks}>
          <Link to="/blog">blog</Link>
        </li>
      </div>
    </>
    )}
  </ThemeToggler>
  )
}
export default Menu;