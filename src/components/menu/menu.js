import React from 'react';
import { Link } from 'gatsby'
import menuStyles from '../menu/menu.module.css'

const Menu = () => (
  <>
    <nav>
      <ul className={menuStyles.navList}>
        <li>
          <Link className={menuStyles.navItem} to="/">about</Link>
        </li>
        <li>
          <Link className={menuStyles.navItem} to="/contact">contact</Link>
        </li>
        <li>
          <Link className={menuStyles.navItem} to="/portfolio">portfolio</Link>
        </li>
      </ul>
    </nav>
  </>
)

export default Menu;