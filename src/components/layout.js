import React from 'react'
import { node } from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header/header"
import ThemeProvider from '../context/ThemeProvider'

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
    <ThemeProvider>
      <div 
        css={{ 
          height: `100%`, 
          maxWidth: 960, 
          margin: `0 auto`,
          padding: `0rem 1rem`,
        }}
      >
      <Header siteTitle={data.site.siteMetadata.title} />
        <main>{ children }</main>
      </div>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: node.isRequired,
}

export default Layout