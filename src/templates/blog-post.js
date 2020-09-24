import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import { 
  PRIMARY_COLOR,
} from '../utils/theme';
import ThemeProvider from '../context/ThemeProvider';
import ThemeContext from '../context/ThemeContext';

export default function Template({ data }) {
  const post = data.markdownRemark
  
  return(
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ theme }) => (
      <Layout>
      <div 
        css={{ 
          margin: '0rem 0rem',
          display: 'flex',
          flexDirection: 'column',
          width: '90%'
        }}
      >
        <h1 css={{ fontFamily: 'Trocchi' }}>{post.frontmatter.title}</h1>
          <h4 css={{ fontFamily: 'lora', textDecoration: 'underline' }}>
            Posted on {post.frontmatter.date}&nbsp;
          </h4>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <Link to="/blog">
              <button 
                css={{
                  border: 'none',
                  background: PRIMARY_COLOR,
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
