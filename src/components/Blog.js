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
        alignItems: `baseline`,
        '@media (max-width: 576px)': {
          justifyContent: `center`,
          display: `flex`,
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
      '@media (max-width: 576px)': {
        marginBottom: `.25rem`,
        transition: `0.8s cubic-bezier(0.2, 0.8, 0.2, 1)`,
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
<div css={{ margin: '1rem 2.5rem'}}>
  {gqlBlogData.allMarkdownRemark.edges.map(post => (
  <div key={post.node.id}>
    <h2 
      css={{ 
        fontFamily: 'Trocchi',
        marginBottom: '.5rem',
        backgroundColor: 'slateblue',
        padding: '.5rem .2rem'
      }}
    >
      {post.node.frontmatter.title}
    </h2>
    <small css={{ color: 'slateblue'}}>
      Posted by: {post.node.frontmatter.author} on {post.node.frontmatter.date}
    </small>
    <br />
    <p>{post.node.excerpt}</p>
    <Link 
      css={{
        display: 'flex',
        color: 'white',
        textDecorationStyle: 'dashed',
        textDecorationSkipInk: 'auto',
        textUnderlinePosition: 'under',
      }} 
      to={post.node.frontmatter.path}>
      <p 
        css={{ 
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

