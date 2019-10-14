import React from 'react';
import { Link } from 'gatsby'
import '../components/menu.css'

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
        <Link className="nav-links" to="/blog">toggle light</Link>
      </li>
    </div>
  </>
)

export default Menu;