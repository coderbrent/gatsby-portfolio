import React from "react"
import Layout from "../components/layout"
import BrentImage from "../components/BrentImage"

const IndexPage = () => {
  return (
    <Layout>
      <div
        css={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          columnGap: "3rem",
          "@media (max-width: 576px)": {
            flexWrap: "wrap",
            gap: "0rem",
          },
        }}
      >
        <div
          css={{
            display: "flex",
            flexWrap: "nowrap",
            flexDirection: "column",
            flexGrow: 3,
            "@media (max-width: 576px)": {
              order: 2,
            },
          }}
        >
          <h3
            css={{
              fontFamily: "Roboto Slab",
              "@media (max-width: 576px)": {
                textAlign: "center",
              },
            }}
          >
            I make cool things for people with{" "}
            <span
              css={{
                fontWeight: "bold",
                color: "violet",
                margin: 0,
                padding: 0,
              }}
            >
              javascript
            </span>
            !
          </h3>
          <p
            css={{
              textAlign: "justify",
              fontSize: "1rem",
              margin: "0rem auto",
            }}
          >
            Hello! My name is Brent - I'm a front end web developer building
            things with <span css={{ color: "orange" }}>React</span>,
            <span css={{ color: "dodgerblue" }}> TypeScript</span>,{" "}
            <span css={{ color: "violet" }}>GraphQL</span> and{" "}
            <span css={{ color: "lightgreen" }}>Node!</span> In my free time I
            love hanging with my family, watching TV (I love paranormal{" "}
            <span role="img" aria-label="ghost">
              👻
            </span>{" "}
            shows!), reading and playing hockey.
          </p>
        </div>
        <div
          css={{
            flexGrow: 1,
            "@media (max-width: 576px)": {
              order: 1,
              textAlign: "center",
            },
          }}
        >
          <BrentImage />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
