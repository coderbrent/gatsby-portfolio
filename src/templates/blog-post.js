import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import ThemeProvider from '../context/ThemeProvider'
import ThemeContext from '../context/ThemeContext';

//this is the blog TEMPLATE
export default function Template({ data }) {
  const post = data.markdownRemark

  return(
    <>
    <ThemeProvider>
    <ThemeContext.Consumer>
      {({ theme }) => (
        <Layout>
        <div 
          css={{ 
            display: 'flex',
            flexDirection: 'column',
            padding: '1rem 5rem', 
            margin: '.5rem 3rem'
          }}
        >
          <h1 css={{ fontFamily: 'Trocchi'}}>{post.frontmatter.title}</h1>
            <h4>
              Posted on - {post.frontmatter.date}&nbsp;
            </h4>
            <div><div dangerouslySetInnerHTML={{ __html: post.html }} /></div>
              <Link to="/">
                <button 
                  css={{
                    border: 'none',
                    background: 'slateblue',
                    color: 'white',
                    padding: '.5rem 1rem',
                    width: '100%'
                  }}
                >
                  go back
                </button>
              </Link>
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
