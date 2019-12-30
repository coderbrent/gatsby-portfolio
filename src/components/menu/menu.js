import React, { useState } from 'react';
import { Link } from 'gatsby'
import menuStyles from '../menu/menu.module.css'
import GithubIcon from '../../Icons/github.svg'
import TwitterIcon from '../../Icons/twitter.svg'
import LinkedInLogo from '../../Icons/linkedin.svg'

const Menu = () => {
  const [isVisible, setVisible] = useState({ isVisible: null })
  
  const toggleMobile = () => {
    if(isVisible) {
      setVisible(false);
    } else { 
      setVisible(true);
  }
}

  return (
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

export default Menu;