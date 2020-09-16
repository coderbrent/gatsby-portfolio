import React from 'react';
import { FiBookOpen } from 'react-icons/fi';
import { graphql, useStaticQuery, Link } from 'gatsby';

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
 
  return (
    <>
    <div 
      css={{ 
        display: `flex`,
        alignItems: `center`,
        '@media (max-width: 576px)': {
          justifyContent: `center`,
          display: `flex`,
          width: '100%',
          transition: `0.8s cubic-bezier(0.2, 0.8, 0.2, 1)`,
        }
      }}
    >
  <h2 
    css={{ 
      fontFamily: `Trocchi`,
      fontWeight: `bolder`,
      marginBottom: `.5rem`,
      marginLeft: `2.5rem`,
      textDecoration: 'underline',
      textDecorationColor: 'slateblue',
      textUnderlinePosition: 'under',
      '@media (max-width: 576px)': {
        marginBottom: `.25rem`,
      }
    }}
  >
    My Blog
  </h2> 
  <FiBookOpen
    css={{ 
      marginLeft: `.5rem`, 
      fill: 'slateblue' 
    }} 
    size="1.5rem"
  />
</div>
<div 
  css={{ 
    margin: '2.5rem', 
    paddingRight: '10rem',
    '@media (max-width: 576px)': {
      width: '100%',
      transition: `0.8s cubic-bezier(0.2, 0.8, 0.2, 1)`,
    }
  }}>
  {gqlBlogData.allMarkdownRemark.edges.map(post => (
  <div key={post.node.id}>
    <h2 
      css={{ 
        fontFamily: 'Trocchi',
        marginBottom: '.5rem',
        backgroundColor: 'slateblue',
        padding: '.5rem .5rem'
      }}
    >
      {post.node.frontmatter.title}
    </h2>
    <small css={{ color: 'slateblue'}}>
      Posted by: {post.node.frontmatter.author} on {post.node.frontmatter.date}
    </small>
    <p css={{ margin: '.75rem .1rem'}}>{post.node.excerpt}</p>
    <Link 
      css={{
        display: 'flex',
        color: 'slateblue',
        textDecorationStyle: 'dashed',
        textDecorationSkipInk: 'auto',
        textUnderlinePosition: 'under',
      }} 
      to={post.node.frontmatter.path}>
      <p 
        css={{
          color: 'slateblue',
          marginBottom: '.5rem',
        }}
      >
        read more
      </p>
    </Link>
    <br/>
</div>
))}
</div>
</>    
)}

export default Blog;

