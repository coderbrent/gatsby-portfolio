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
            display: "flex",
            flexDirection: "column",
            maxWidth: 760,
            flexWrap: "nowrap",
            margin: "10rem auto",
            "@media (max-width: 576px)": {
              margin: "auto",
              width: "100%",
            },
          }}
        >
          <div
            css={{
              display: "flex",
              flexDirection: "column",
              gap: "0rem",
            }}
          >
            <Header siteTitle={data.site.siteMetadata.title} />
            <div css={{ display: "flex", flexWrap: "wrap" }}>
              <main
                css={{
                  margin: "1rem 0rem",
                  flexGrow: 2,
                  flexShrink: 1,
                  flexBasis: "300px",
                  "@media (max-width: 576px)": {
                    margin: "0rem auto",
                    order: 0,
                    textAlign: "justify",
                  },
                }}
              >
                {children}
              </main>
              <div
                css={{
                  flexGrow: 0,
                  flexShrink: 0,
                  flexBasis: "50px",
                  margin: "0rem 3rem",
                  "@media (max-width: 576px)": {
                    margin: "auto",
                    order: -1,
                  },
                }}
              >
                <Sidebar data={data} />
              </div>
            </div>
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
