import React, { useState } from 'react';
import { Link } from 'gatsby'
import classes from '../menu/menu.module.css'
import GithubIcon from '../../Icons/github.svg'
import TwitterIcon from '../../Icons/twitter.svg'
import LinkedInLogo from '../../Icons/linkedin.svg'

const Menu = () => {
  const [isVisible, setVisible] = useState({ isVisible: false })
  
  const toggleMobile = () => {
    if(isVisible) {
      setVisible(false);
    } else {
      setVisible(true);
  }
}

  return (
    <>
    <nav className={classes.navWrapper}>
      <ul className={classes.navBar}>
        <li className={classes.navLink}>
          <Link className={classes.navBarItem} to="/">about</Link>
        </li>
        <li>
          <Link className={classes.navBarItem} to="/portfolio">portfolio</Link>
         </li>
         <li>
          <Link className={classes.navBarItem} to="/blog">blog</Link>
        </li>
      </ul>
      
      <ul className={classes.navSocial}>
      <li>
          <a href="https://www.twitter.com/brenta1283" 
            className={classes.navSocialItem}>
              <TwitterIcon 
                className={classes.navSocialLinks}
                fill={'white'} />
          </a>
        </li>
        <li>
          <a href="https://github.com/coderbrent"
            className={classes.navSocialItem}>
              <GithubIcon 
                className={classes.navSocialLinks}
                fill={'white'}/>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/brent-abruzese" 
            className={classes.navSocialItem}>
              <LinkedInLogo 
                className={classes.navSocialLinks} 
                fill={'white'}/>
          </a>
        </li>
        </ul>

        <ul className={classes.hamburgerMenu}>
          <p>Brent Abruzese</p>
          <button onClick={() => toggleMobile()} className={classes.hamburgerButton}>
              ☰
          </button>
        </ul>
    </nav>
    <div className={ isVisible ? classes.backUp : classes.dropDown }>
      <li className={classes.hamburgerMenuLinkContainers}>
        <Link className={classes.hamburgerMenuLinks} to="/">about</Link>
      </li>
      <li className={classes.hamburgerMenuLinkContainers}>
        <Link className={classes.hamburgerMenuLinks} to="/portfolio">portfolio</Link>
      </li>
      <li className={classes.hamburgerMenuLinkContainers}>
        <Link className={classes.hamburgerMenuLinks} to="/blog">blog</Link>
      </li>
    </div>
    </>
)}

export default Menu;