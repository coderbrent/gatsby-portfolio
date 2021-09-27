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
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "3rem",
        }}
      >
        <h3
          css={{
            fontFamily: "Roboto",
            fontSize: "1.5rem",
          }}
        >
          I make things for people with{" "}
          <span
            css={{
              fontWeight: "bold",
              color: "violet",
            }}
          >
            javascript
          </span>
          !
        </h3>
        <div
          css={{
            order: 1,
            flex: "10 1 auto",
            margin: "0rem 1rem",
            alignSelf: "baseline",
          }}
        >
          <BrentImage />
        </div>
        <p css={{ flex: "1 1 460px", marginRight: "1rem" }}>
          Hello! My name is Brent - I'm a former business owner turned full
          stack JavaScript developer! I enjoy building things with React,
          GraphQL, Node and Mongo, but I'm always open and eager to jump into
          new stacks and expand my knowledge in new directions. In my free time
          I love spending time with my family, watching TV (I love paranormal{" "}
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
