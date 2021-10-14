import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BrentImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "IMG_8686.JPG" }) {
        childImageSharp {
          fixed(width: 260, quality: 100) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Img
      css={{
        opacity: ".75",
        borderRadius: "10pt",
      }}
      fixed={data.placeholderImage.childImageSharp.fixed}
    />
  )
}

export default BrentImage
