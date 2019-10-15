// import React from 'react'
// // import { Link } from 'gatsby-link'
// import { graphql } from 'gatsby'

// export default function Template({ data }) {
//     const { markdownRemark } = data
//     const { frontmatter, html } = markdownRemark

//     return (
//         <>
//             <div>
//                 {/* <Link to="/blog">Go Back</Link> */}
//                 <hr />
//                 <h1>{frontmatter.title}</h1>
//                 <h4>Posted by: {frontmatter.author} on {frontmatter.date}</h4>
//                 <div dangerouslySetInnerHTML={{ __html: html }} />
//             </div>
//         </>
//     )
// }

// export const postQuery = graphql`
//     query BlogPostByPath($path: String!) {
//         markdownRemark(frontmatter: { path:{ eq: $path } }){
//             html
//             frontmatter {
//                 path
//                 title
//                 author
//                 date
//             }
//         }
//     }
// `