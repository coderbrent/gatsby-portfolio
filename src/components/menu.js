import React from 'react';
import { Link } from 'gatsby'

const Menu = () => (
  <>
    <div
      style={{
      background: 'black',
      paddingTop: '10px',
      marginBottom: '0',
      fontFamily: 'roboto',
      fontWeight: 'light'
    }}>

    <ul 
      style={{
      listStyle: 'none',
      display: 'flex',
      justifyContent: 'space-evenly',
    }}>

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
    </ul>
  </div>
  </>
)

export default Menu;