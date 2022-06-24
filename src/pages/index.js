import { Link } from "gatsby"
import React from "react"
import Button from "../components/Button"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <div
        css={{
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
          Hi! I'm <span css={{ color: "#fcae79" }}>Brent</span> - A former <span css={{ color: "#fcae79" }}>Business Owner</span> turned <span css={{ color: "#fcae79" }}>Bootcamper</span> turned <span css={{ color: "#fcae79" }}>Web Developer</span>!
        </h2>
        <div css={{ textAlign: 'justify' }}>
          <p>
            I believe a truly awesome web developer blog should be part technical, part inspirational.
            I've personally gained so much from great web dev blogs, such as those from Dmitri Pavlutin, Kent C. Dodds and Josh W. Comeau.
            So my goal for this blog is to evolve into something similar - a place where I can share what I know, but from my own unique perspective!
          </p>

          <h3 css={{ color: '#fcae79' }}>A little about my professional background...</h3>

          <p>
            I'm a bootcamper! Like so many others building for the web these days, I do not hail from a traditional college background. Yet I've been able to secure employment doing what I love with a fantastic company - <strong>Medscape</strong> (which if you aren't familiar with, is part of WebMD.)!
          </p>
          <p>
            I plan to blog more about my experience in landing my first non-freelance role, this, but I attribute virtually all of it to networking!
          </p>

          <div css={{ display: 'flex', gap: '1rem', width: '100%' }}>
            <a href="mailto:brent.abruzese@gmail.com" css={{ textDecoration: 'none', color: 'white' }}>
              <Button>E-Mail Me!</Button>
            </a>

            <a href="mailto:brent.abruzese@gmail.com" css={{ textDecoration: 'none', color: 'white' }}>
              <Button>Download my Resume!</Button>
            </a>
          </div>

        </div>
      </div>
    </Layout >
  )
}

export default IndexPage
