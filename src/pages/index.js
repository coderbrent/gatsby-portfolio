import React from "react"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <div
        css={{
          // display: "flex",
          // flexWrap: "nowrap",
          // columnGap: "1rem",
          "@media (max-width: 576px)": {
            order: 2,
          },
        }}
      >
        <h2
          css={{
            fontFamily: "Roboto Slab",
          }}
        >
          Hello! I'm <span css={{ color: "#fcae79" }}>Brent</span>: A former business owner turned <span css={{ color: "#fcae79" }}>Web Developer</span>!
        </h2>
        <div css={{ textAlign: 'justify' }}>
          <p>My start as a developer actually started out as a programmer writing highly unpopular .bas files in VB3 for people to make highly unpopular AOL progs (remember punters?) way back in
            the late 90's!</p>

          <p>Then, for some inexplicable reason, I decided to take a 15 year hiatus to start a limo company before
            finally making my way back into tech! I currently work at Medscape/WebMD doing front end development with React, JavaScript, HTML and CSS.</p>

          <p>In my free time I love hanging with my family, watching TV (I love paranormal{" "}
            <span role="img" aria-label="ghost">
              👻
            </span>{" "}
            shows!), reading and playing hockey.</p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
