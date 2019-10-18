import React from 'react';
import { Link } from 'gatsby'
import menuStyles from '../menu/menu.module.css'
import GithubIcon from '../../Icons/github.svg'
import TwitterIcon from '../../Icons/twitter.svg'
import LinkedInLogo from '../../Icons/linkedin.svg'

const Menu = () => (
  <>
    <nav className={menuStyles.navWrapper}>

      <ul className={menuStyles.navNewList}>
        <li>
          <Link className={menuStyles.navNewItem} to="/" target="_blank">about</Link>
        </li>
        <li>
          <Link className={menuStyles.navNewItem} to="/contact">contact</Link>
        </li>
        <li>
          <Link className={menuStyles.navNewItem} to="/portfolio">portfolio</Link>
         </li>
         <li>
          <Link className={menuStyles.navNewItem} to="/blog">blog</Link>
        </li>
      </ul>

      <ul className={menuStyles.navSocialGrid}>
        <li>
          <a href="https://www.twitter.com/brenta1283" 
            className={menuStyles.navSocialGridItem}>
              <TwitterIcon />
          </a>
        </li>

        <li>
          <a href="https://github.com/coderbrent"
            className={menuStyles.navSocialGridItem}>
              <GithubIcon fill={'white'}/>
          </a>
        </li>

        <li>
          <a href="https://www.linkedin.com/in/brent-abruzese" 
            className={menuStyles.navSocialGridItem}>
              <LinkedInLogo fill={'white'}/>
          </a>
        </li>
      </ul>
    </nav>
  </>
)

export default Menu;