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
          columnGap: "50px",
          "@media (max-width: 576px)": {
            flexWrap: "wrap",
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
            }}
          >
            I make things for people with{" "}
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
            }}
          >
            Hello! My name is Brent - I'm a full stack web developer building
            things with <span css={{ color: "orange" }}>React</span>,
            <span css={{ color: "slateblue" }}> TypeScript</span>,{" "}
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
            "@media (max-width: 576px)": {
              order: 2,
              minWidth: "auto",
              justifySelf: "center",
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
