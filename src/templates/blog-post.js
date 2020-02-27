import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import ThemeProvider from '../context/ThemeProvider'
import ThemeContext from '../context/ThemeContext';
import { getTheme } from '../utils/theme'

//this is the blog TEMPLATE
export default function Template({ data }) {
  const post = data.markdownRemark

  return(
    <>
    <ThemeProvider>
    <ThemeContext.Consumer>
      {({ theme }) => (
        <Layout>
        <div>
          <h1>{post.frontmatter.title}</h1>
            <h4>
              Posted on {post.frontmatter.date}&nbsp;
            </h4>
            <div><div dangerouslySetInnerHTML={{ __html: post.html }} /></div>
              <Link to="/"><button>go back</button></Link>
          </div>
        </Layout>
      )}
      </ThemeContext.Consumer>
    </ThemeProvider>
    </>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: {path: { eq: $path }}) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`
