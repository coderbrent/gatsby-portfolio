import React from 'react';
import { Link } from 'gatsby';

const NavLink = ({ text, dest, theme }) => {
  return (
    <Link 
      to={dest}
      css={{
        marginRight: '1rem',
        color: theme.secondary,
        transition: '.3s all',
        ':hover&': {
          color: theme.primary,
        }
      }}
    >
      {text}
    </Link>
  )
};

export default NavLink;