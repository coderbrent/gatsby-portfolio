import React, { useContext } from 'react';
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import classes from '../pages/blogPage.module.css'
import ThemeProvider from '../context/ThemeProvider'
import ThemeContext from '../context/ThemeContext'
import { getTheme } from '../utils/theme'

const BlogPage = ({ data }) => {
  const { theme } = useContext(ThemeContext);
  const { color, secondary } = getTheme(theme);
  
  return (
  <ThemeProvider>
    <Layout>
      <div className={classes.container}>
        {data.allMarkdownRemark.edges.map(post => (
          <div css={{ background: ``}} key={post.node.id}>
            <h3 className={classes.blogTitle}>{post.node.frontmatter.title}</h3>
              <small style={{ marginLeft: '1em'}}>
                Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}
              </small>
              <br />
              <p className={classes.content}>{post.node.excerpt}</p>
              <Link to={post.node.frontmatter.path}>
                <button className={classes.button}>
                  ...Read More
                </button>
              </Link>
              <br />
          </div>
        ))}
        </div>
    </Layout>
  </ThemeProvider>
  )
}

export const pageQuery = graphql`
  query BlogIndexQuery {
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

export default BlogPage;