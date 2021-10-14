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
            height: "100%",
            display: "flex",
            flexDirection: "column",
            maxWidth: 760,
            flexWrap: "wrap",
            margin: "10rem auto",
            rowGap: "1rem",
            "@media (max-width: 576px)": {
              margin: "auto 1rem",
            },
          }}
        >
          <Header css={{ order: 0 }} siteTitle={data.site.siteMetadata.title} />
          <main css={{ order: 1, margin: "0rem auto" }}>{children}</main>
          <div
            css={{
              order: 2,
              display: "flex",
              flexWrap: "nowrap",
              columnGap: "3rem",
              "@media (max-width: 720px)": {
                width: "100%",
                flexWrap: "wrap",
                order: 1,
              },
            }}
          >
            <Sidebar data={data} />
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
