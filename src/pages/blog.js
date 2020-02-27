import React, { useContext } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby'
import ThemeProvider from '../context/ThemeProvider'
import ThemeContext from '../context/ThemeContext'
import { getTheme, CUBIC_BEZIER_TRANSITION } from '../utils/theme'
import { FiArrowRightCircle, FiBook } from 'react-icons/fi';
import Layout from '../components/layout'

//This is the blog display component
const Blog = () => {
  // const { theme } = useContext(ThemeContext);
  // const { color, secondary, background } = getTheme(theme);

  const data = useStaticQuery(graphql`
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
`)
  
  return (
    <ThemeProvider>
      <Layout>
      <div css={{ display: `flex` }}>
        <h3 
          css={{ 
            fontFamily: `fira mono`,
            marginRight: `.5rem`
          }}
        >
          My Blog
        </h3>
          <FiBook size="1.5rem"/>
      </div>
        {data.allMarkdownRemark.edges.map(post => (
          <div css={{
            background: 'black'
          }}>
          {post.node.frontmatter.title}
          </div>
        ))}
      </Layout>
      {/* <div css={{ maxWidth: 670, background: background}}>
      <div css={{ display: `flex` }}>
        <h3 
          css={{ 
            fontFamily: `fira mono`,
            marginRight: `.5rem`
          }}
        >
          My Blog
        </h3>
          <FiBook size="1.5rem"/>
      </div>
        {data.allMarkdownRemark.edges.map(post => (
          <div 
            css={{ 
              marginBottom: `.25rem`,
            }} 
            key={post.node.id}
          >
            <h2 
              css={{ 
                fontFamily: `varela round`,
                color: color, 
                borderBottom: `1px dashed ${color}`, 
                width: `100%` 
              }}
            >
              {post.node.frontmatter.title}
            </h2>
              <small css={{ color: secondary }}>
                Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}
              </small>
              <br />
              <p css={{ color: color }}>{post.node.excerpt}</p>
              <Link css={{ textDecoration: `none` }} to={post.node.frontmatter.path}>
                <div css={{ display: `flex`, alignItems: `center`, margin: `0rem 0rem`}}>
                <p css={{
                  color: secondary, 
                  textDecoration: `none`,
                  paddingRight: `.5rem`,
                  margin: 0,
                  }}>
                  ...read more
                </p>
                <FiArrowRightCircle 
                  css={{ 
                    ":hover": { 
                      transform: `rotate(90deg)`, 
                      transition: `${CUBIC_BEZIER_TRANSITION}`
                    }
                  }} 
                  color={secondary} 
                />
                </div>
              </Link>
              <br/>
          </div>
        ))}
      </div> */}
    </ThemeProvider>
  )
}

export default Blog;