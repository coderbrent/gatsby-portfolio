import React from "react"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <div
        css={{
          display: "flex",
          flexWrap: "nowrap",
          flexDirection: "column",
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
            "@media (max-width: 576px)": {
              textAlign: "center",
            },
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
    </Layout>
  )
}

export default IndexPage
