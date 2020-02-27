import React from 'react'
import { node } from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header/header"

const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div 
        css={{ 
          height: `100%`, 
          maxWidth: 960, 
          margin: `0 auto`,
          padding: `0 1rem`,
        }}
      >
        <main>{ children }</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: node.isRequired,
}

export default Layout