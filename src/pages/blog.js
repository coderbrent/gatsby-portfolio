import React from 'react';
import Layout from '../components/layout'
import Link from 'gatsby-link'
import './blog.css'

const BlogPage = ({ data }) => (

    <>
      <Layout>
        <div>
          <h1>Latest Posts</h1>
          { data.allMarkdownRemark.edges.map(post => {
            return <div key={post.node.id}>
              <h3 className="blog-title nav-links">{post.node.frontmatter.title}</h3>
                <div className="entry-body">
                  <small style={{ fontWeight: 'bold'}}>
                    Posted by: { post.node.frontmatter.author } <br/> 
                    on: { post.node.frontmatter.date }
                  </small>
                    <p style={{ textDecoration: 'none' }}><Link to={post.node.frontmatter.path}>Read More...</Link></p>
                </div>
                
                <br/>
                <br/>
                <hr/>
            </div>
            })}
        </div>
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
              title
              date
              author
            }
          }
        }
      }
    }
`

export default BlogPage

