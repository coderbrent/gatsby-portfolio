import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BrentImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "brentfam.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) 
          {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default BrentImage
