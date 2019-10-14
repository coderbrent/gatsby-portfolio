import React from 'react';
import Layout from '../components/layout'
import Link from 'gatsby-link'
import './blog.css'

const BlogPage = ({ data }) => (
    <>
      <Layout>
        <div>
          <h1 className="heading">Latest Posts</h1>
          { data.allMarkdownRemark.edges.map(post => {
            return <div key={post.node.id}>
            <div className="blog">
              <h3 className="blog-title">{post.node.frontmatter.title}</h3>
                <div className="entry-body">
                  <small style={{ fontWeight: 'lighter'}}>
                    Posted by: <p style={{ fontWeight: 700, margin: 0 }}>{ post.node.frontmatter.author }</p> <br/> 
                    on: { post.node.frontmatter.date }
                  </small>
                    <p style={{ textDecoration: 'none' }}><Link to={post.node.frontmatter.path}>Read More...</Link></p>
                </div>
                </div>
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

