import React from 'react';
import { Link } from 'gatsby'
import '../components/menu.css'
import Icon from '../Icons/twitter.svg'

const Menu = () => (
  <>
    <div className="nav-bar">
      <li>
        <Link className="nav-links" to="/">about</Link>
      </li>
      <li>
        <Link className="nav-links" to="/contact">contact</Link>
      </li>
      <li>
        <Link className="nav-links" to="/portfolio">portfolio</Link>
      </li>
      <li>
        <Link className="nav-links" to="/blog">blog</Link>
      </li>
      <li>
        <Icon width="10%" viewBox="0 0 1000 1000"/>
      </li>
    </div>
  </>
)

export default Menu;