import React from 'react';
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = ({ data }) => (
  <>
    <Layout>
      <h5 className="heading">Latest Posts</h5>
        {data.allMarkdownRemark.edges.map(post => (
          <div key={post.node.id}>
            <h3 className="sub-heading">{post.node.frontmatter.title}</h3>
              <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
              <br />
              <br />
              {post.node.frontmatter.excerpt}
              <Link to={post.node.frontmatter.path}>Read More</Link>
              <br />
              <br />
              <hr />
          </div>
        ))}
        <Link to='/'>Head back home for now!</Link>
    </Layout>
  </>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
      allMarkdownRemark {
        edges {
          node {
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