import React from 'react'
import { Link, graphql } from 'gatsby'
import bpTemplateStyles from '../templates/blog-post-template.module.css'

export default function Template({ data }) {
  const post = data.markdownRemark

  return(
    <>
    <div className={bpTemplateStyles.wrapper}>
      <h1 className={bpTemplateStyles.title}>{post.frontmatter.title}</h1>
        <h4 className={bpTemplateStyles.subtitle}>
        <div className={bpTemplateStyles.avatar} />
          Posted by {post.frontmatter.author}&nbsp;
          on {post.frontmatter.date}
        </h4>
        <div className={bpTemplateStyles.bodyContainer}><div dangerouslySetInnerHTML={{ __html: post.html }} /></div>
          <Link to="/blog"><button className={bpTemplateStyles.button}>go back</button></Link>
    </div>
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
