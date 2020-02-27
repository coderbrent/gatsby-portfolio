import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BrentImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "brentphoto.png" }) {
        childImageSharp {
          fluid(maxWidth: 225, quality: 100)
          {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return <Img css={{ borderRadius: `50%` }} fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default BrentImage
