import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import classes from '../templates/blog-post-template.module.css'
import ThemeProvider from '../context/ThemeProvider'

export default function Template({ data }) {
  const post = data.markdownRemark

  return(
    <>
    <ThemeProvider>
      <Layout>
        <div className={classes.wrapper}>
          <h1 className={classes.title}>{post.frontmatter.title}</h1>
            <h4 className={classes.subtitle}>
            <div className={classes.avatar} />
              Posted by {post.frontmatter.author}&nbsp;
              on {post.frontmatter.date}
            </h4>
            <div className={classes.bodyContainer}><div dangerouslySetInnerHTML={{ __html: post.html }} /></div>
              <Link to="/blog"><button className={classes.button}>go back</button></Link>
        </div>
      </Layout>
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
