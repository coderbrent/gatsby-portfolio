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
            maxWidth: 860,
            flexWrap: "wrap",
            margin: "10rem auto",
            rowGap: "1rem",
            "@media (max-width: 576px)": {
              margin: "auto 1rem",
            },
          }}
        >
          <Header siteTitle={data.site.siteMetadata.title} />
          <div
            css={{
              display: "flex",
              width: "auto",
              flexWrap: "nowrap",
              flexDirection: "row",
              columnGap: "3rem",
              alignItems: "baseline",
              "@media (max-width: 720px)": {
                width: "100%",
                flexWrap: "wrap",
              },
            }}
          >
            <main css={{ margin: "0rem auto" }}>{children}</main>
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
