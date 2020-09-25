import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { getTheme } from '../utils/theme';

const blogData = graphql`
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
`

const Blog = () => {
  const gqlBlogData = useStaticQuery(blogData);
  const { theme } = useContext(ThemeContext);
  const { background, secondary, color, primary, muted } = getTheme(theme);
  
  return (
    <>
    <h3 
      css={{ 
        fontFamily: 'lora',
        fontStyle: 'italic',
        fontSize: '2rem',
      }}
    >
      ...and now for something <span css={{ fontWeight: 'bold', color: secondary }}>completely different!</span>
    </h3>
    <div 
      css={{ 
        display: 'flex',
        flexDirection: 'column',
        marginTop: '1rem', 
        width: '100%'
      }}
    >
    {gqlBlogData.allMarkdownRemark.edges.map(post => (
  <div css={{ margin: '1.5rem 0rem' }} key={post.node.id}>
  <Link to={post.node.frontmatter.path}>
    <h2 
      css={{
        color: secondary,
        fontFamily: 'Trocchi',
        marginBottom: '.5rem',
        fontSize: '1.75rem',
        textDecoration: 'underline',
        textDecorationStyle: 'dotted',
        textDecorationThickness: '1px',
        textDecorationSkipInk: 'auto',
        textUnderlinePosition: 'under',
      }}
    >
      {post.node.frontmatter.title}
    </h2>
  </Link>
    <small css={{ color: primary}}>
      Posted by: {post.node.frontmatter.author} on {post.node.frontmatter.date}
    </small>
    <p css={{ color }}>{post.node.excerpt}</p>
    <Link 
      css={{
        display: 'flex',
        color: primary,
        textDecorationStyle: 'dashed',
        textDecorationSkipInk: 'auto',
        textUnderlinePosition: 'under',
      }} 
      to={post.node.frontmatter.path}>
      <p 
        css={{
          color: primary,
        }}
      >
        ...read more!
      </p>
    </Link>
</div>
))}
</div>
</>    
)}

export default Blog;

