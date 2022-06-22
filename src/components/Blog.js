import React, { useContext } from "react"
import ThemeContext from "../context/ThemeContext"
import { graphql, useStaticQuery, Link } from "gatsby"
import { CUBIC_BEZIER_TRANSITION, getTheme } from "../utils/theme"

const blogData = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          excerpt
          id
          frontmatter {
            path
            author
            date
            title
          }
        }
      }
    }
  }
`

const Blog = () => {
  const gqlBlogData = useStaticQuery(blogData)
  const { theme } = useContext(ThemeContext)
  const { color, primary, other } = getTheme(theme)

  return (
    <>
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          gap: '3.5rem',
          width: '80%'
        }}
      >
        {gqlBlogData.allMarkdownRemark.edges.map(post => (
          <div css={{ margin: "1rem 0rem", width: "100%" }} key={post.node.id}>
            <h2
              css={{
                color: primary,
                fontFamily: "Roboto Slab",
                marginBottom: "1rem",
              }}
            >
              {post.node.frontmatter.title}
            </h2>
            <small css={{ color: color, fontWeight: 'bold' }}>
              Posted by: {post.node.frontmatter.author} on{" "}
              {post.node.frontmatter.date}
            </small>
            <p
              css={{
                color,
                textAlign: "justify",
              }}
            >
              {post.node.excerpt}
            </p>
            <Link
              css={{
                textDecoration: "none",
                display: "inline-block",
              }}
              to={post.node.frontmatter.path}
            >
              <p
                css={{
                  margin: 0,
                  color: other,
                  border: `solid 1px ${color}`,
                  borderRadius: '30pt',
                  padding: '0.75rem 2rem',
                  "&:hover": {
                    transition: `${CUBIC_BEZIER_TRANSITION}`,
                    color,
                  },
                }}
              >
                Keep reading!
              </p>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default Blog
