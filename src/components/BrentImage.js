import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BrentImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "IMG_8686.JPG" }) {
        childImageSharp {
          fixed(width: 175, quality: 100) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Img
      css={{
        clipPath: "circle(60px at center)",
        opacity: ".75",
        "@media (max-width: 360px)": {
          width: "100%",
          margin: "1rem 0rem",
        },
      }}
      fixed={data.placeholderImage.childImageSharp.fixed}
    />
  )
}

export default BrentImage
