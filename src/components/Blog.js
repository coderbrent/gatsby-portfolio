import React, { useContext } from "react"
import ThemeContext from "../context/ThemeContext"
import { graphql, useStaticQuery, Link } from "gatsby"
import { getTheme } from "../utils/theme"

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
  const { secondary, color, primary, other } = getTheme(theme)

  return (
    <>
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
          marginTop: "1rem",
        }}
      >
        {gqlBlogData.allMarkdownRemark.edges.map(post => (
          <div css={{ width: "100%" }} key={post.node.id}>
            <Link to={post.node.frontmatter.path}>
              <h2
                css={{
                  color: primary,
                  fontFamily: "Roboto Slab",
                  marginBottom: ".5rem",
                  textDecoration: "none",
                }}
              >
                {post.node.frontmatter.title}
              </h2>
            </Link>
            <small css={{ color: secondary }}>
              Posted by: {post.node.frontmatter.author} on{" "}
              {post.node.frontmatter.date}
            </small>
            <p css={{ color, textAlign: "justify" }}>{post.node.excerpt}</p>
            <Link
              css={{
                display: "inline-block",
              }}
              to={post.node.frontmatter.path}
            >
              <p
                css={{
                  margin: 0,
                  color: other,
                }}
              >
                ...read more!
              </p>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default Blog
