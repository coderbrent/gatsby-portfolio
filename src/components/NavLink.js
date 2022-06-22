import React from "react"
import { Link } from "gatsby"

const NavLink = ({ text, dest, theme }) => {
  return (
    <Link
      to={dest}
      css={{
        marginRight: "1rem",
        marginTop: ".25rem",
        textDecoration: "none",
        color: theme.primary,
        transition: ".5s color",
        ":hover&": {
          color: theme.color,
        },
      }}
    >
      {text}
    </Link>
  )
}

export default NavLink
