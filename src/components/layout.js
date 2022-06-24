import React from "react"
import { node } from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import ThemeProvider from "../context/ThemeProvider"
import Sidebar from "./Sidebar"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          social {
            email
            github
            linkedin
            resume
            stackoverflow
            twitter
          }
        }
      }
    }
  `)

  return (
    <>
      <ThemeProvider>
        <div
          id="layout-container"
          css={{
            minHeight: "100vh",
            margin: '1.5rem auto',
            maxWidth: '760px',
            "@media (max-width: 576px)": {
              margin: '1.5rem 1rem'
            },
          }}
        >
          <Header data={data} siteTitle={data.site.siteMetadata.title} />
          <Sidebar data={data} />
          <div>
            <main
              css={{
                marginTop: '2rem',
              }}
            >
              <h2 css={{ fontFamily: 'varela round' }}></h2>
              {children}
            </main>

          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: node.isRequired,
}

export default Layout
