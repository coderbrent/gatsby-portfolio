import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BrentImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "brentphoto.png" }) {
        childImageSharp {
          fixed(width: 90, quality: 100)
          {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)

  return <Img fadeIn='true' css={{ borderRadius: `50%` }} fixed={data.placeholderImage.childImageSharp.fixed} />
};

export default BrentImage;
