import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { PRIMARY_COLOR } from "../utils/theme"

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <div
        css={{
          display: "flex",
          flexFlow: "column wrap",
          width: "100%",
        }}
      >
        <h2 css={{ fontFamily: "Roboto Slab", fontWeight: 400 }}>
          {post.frontmatter.title}
        </h2>
        <h4 css={{ fontFamily: "lato" }}>
          Posted on {post.frontmatter.date}&nbsp;
        </h4>
        <div
          css={{
            display: "flex",
          }}
        >
          {post.frontmatter.tags
            ? post.frontmatter.tags.map(tag => (
                <div
                  css={{
                    color: "white",
                    margin: "1rem .25rem",
                    backgroundColor:
                      tag === "interviewing" ? "darkred" : "slategrey",
                    padding: ".25rem 1rem",
                    borderRadius: "8pt",
                  }}
                  key={tag}
                >
                  {tag}
                </div>
              ))
            : null}
        </div>
        <div
          css={{ textAlign: "justify" }}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <Link to="/blog">
          <button
            css={{
              border: "none",
              background: PRIMARY_COLOR,
              color: "white",
              padding: ".5rem 1rem",
              width: "100%",
            }}
          >
            go back
          </button>
        </Link>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
        tags
        img
      }
    }
  }
`
