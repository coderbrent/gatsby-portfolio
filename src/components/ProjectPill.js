import React from "react"
import { getTheme } from "../utils/theme"

const ProjectPill = ({ tech, url }) => {
  const { color, secondary } = getTheme()

  return (
    <>
      <a
        href={url}
        css={{
          margin: `0rem .5rem`,
          textDecoration: "none",
        }}
      >
        <div
          css={{
            display: "flex",
            color,
            fontSize: "small",
            backgroundColor: secondary,
            borderRadius: "20pt",
            width: "fit-content",
            padding: ".15rem .65rem",
            height: "25px",
          }}
        >
          {tech}
        </div>
      </a>
    </>
  )
}

export default ProjectPill
