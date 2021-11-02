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
            flexWrap: "wrap",
            margin: "10rem auto",
            rowGap: "1rem",
            "@media (max-width: 576px)": {
              margin: "auto 1rem",
            },
            "@media (max-width: 360px)": {
              width: "100%",
              margin: "0rem 0rem",
              padding: "1rem",
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
            <Header
              css={{
                "@media (max-width: 360px)": {
                  margin: "0rem 0rem",
                  order: 2,
                },
              }}
              siteTitle={data.site.siteMetadata.title}
            />
            <div css={{ display: "flex", flexWrap: "wrap" }}>
              <main
                css={{
                  margin: "1rem 0rem",
                  flexGrow: 2,
                  flexShrink: 1,
                  flexBasis: "300px",
                  "@media (max-width: 360px)": {
                    margin: "0rem 0rem",
                    order: 0,
                  },
                }}
              >
                {children}
              </main>
              <div
                css={{
                  width: "75%",
                  flexGrow: 0,
                  flexShrink: 0,
                  flexBasis: "50px",
                  margin: "0rem 3rem",
                  "@media (max-width: 576px)": {
                    margin: "auto",
                    order: -1,
                    width: "100%",
                    alignSelf: "center",
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
