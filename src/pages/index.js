import React from "react"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <div
        css={{
          display: "flex",
          flexWrap: "nowrap",
          columnGap: "1rem",
          "@media (max-width: 576px)": {
            order: 2,
          },
        }}
      >
        <div
          css={{
            display: "flex",
            flexWrap: "nowrap",
            flexDirection: "column",
            flexGrow: 3,
          }}
        >
          <h2
            css={{
              fontFamily: "Roboto Slab",
              "@media (max-width: 576px)": {
                textAlign: "left",
              },
            }}
          >
            Hello! My name is Brent <span></span> - I'm a front end web developer building
            things with React, TypeScript, GraphQL and Node!
          </h2>
          <p
            css={{
              fontWeight: "bold",
              margin: 0,
              padding: 0,
            }}
          >
            I got my start as a
            programmer writing .bas files for AOL progs (remember punters?) in
            the 90's! I took a 15 year hiatus to start a limo company before
            getting back into software development! I currently work at Medscape/WebMD doing front end development with React, JavaScript, HTML and CSS.

            In my free time I love hanging with my family, watching
            TV (I love paranormal{" "}
            <span role="img" aria-label="ghost">
              👻
            </span>{" "}
            shows!), reading and playing hockey.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
