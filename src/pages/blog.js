import React from 'react';
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import bpStyles from '../pages/blogPage.module.css'

const BlogPage = ({ data }) => (
  <>
    <Layout>
      <div className={bpStyles.container}>
      <h5 className="heading">Latest Posts</h5>
        {data.allMarkdownRemark.edges.map(post => (
          <div className={bpStyles.postPreview} key={post.node.id}>
            <h3 className={bpStyles.blogTitle}>{post.node.frontmatter.title}</h3>
              <small style={{ marginLeft: '1em'}}>
                Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}
              </small>
              <br />
              <p className={bpStyles.basic}>{post.node.excerpt}</p>
              <Link to={post.node.frontmatter.path}><button className={bpStyles.button}>...Read More</button></Link>
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