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
          Hi! I'm <span css={{ color: "#fcae79" }}>Brent</span> - A former{" "}
          <span css={{ color: "#fcae79" }}>Business Owner</span> turned{" "}
          <span css={{ color: "#fcae79" }}>Bootcamper</span> turned{" "}
          <span css={{ color: "#fcae79" }}>Web Developer</span>!
        </h2>
        <div css={{ textAlign: "justify" }}>
          <p>
            I believe a truly awesome web developer blog should be part
            technical, part inspirational. I've personally gained so much from
            great web dev blogs, such as those from Dmitri Pavlutin, Kent C.
            Dodds and Josh W. Comeau. So my goal for this blog is to evolve into
            something similar - a place where I can share what I know, but from
            my own unique perspective!
          </p>

          <h3>
            A little about my{" "}
            <span css={{ color: "#fcae79" }}>professional background...</span>
          </h3>

          <p>
            I'm a bootcamping career-changer! Like so many others building for
            the web these days, I did not take a traditional path towards this
            career. Yet as seemingly impossible as it always felt, I'm proud to
            say I've been able to secure employment as a developer with a
            fantastic company - <strong>Medscape</strong>!
          </p>

          <p>Feel free to reach out to me by clicking one of the links above or below!</p>

          <div css={{ display: "flex", gap: "1rem", width: "100%" }}>
            <a
              href="mailto:brent.abruzese@gmail.com"
              css={{ textDecoration: "none", color: "inherit" }}
            >
              <Button>E-Mail Me!</Button>
            </a>

            <a
              href={"https://drive.google.com/file/d/1okM5JbbE5oB_eiWQ72jn9pS-F8h6FfWV/view?usp=sharing"}
              type="application/pdf"
              css={{ textDecoration: "none", color: "inherit" }}
            >
              <Button>Download my Resume!</Button>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
