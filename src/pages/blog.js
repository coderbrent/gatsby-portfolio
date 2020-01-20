import React from 'react';
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import classes from '../pages/blogPage.module.css'

const BlogPage = ({ data }) => (
  <>
    <Layout>
      <div className={classes.container}>
      <h1 className={classes.header}>Latest Posts</h1>
        {data.allMarkdownRemark.edges.map(post => (
          <div className={classes.postPreview} key={post.node.id}>
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
  </>
)

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