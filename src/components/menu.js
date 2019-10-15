import React from 'react';
import { Link } from 'gatsby'
import '../components/menu.css'
import TwitterIcon from '../Icons/twitter.svg'
import GitHubIcon from '../Icons/github-logo.svg'

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
    </div>
  </>
)

export default Menu;