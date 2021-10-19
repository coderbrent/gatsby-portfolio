import React, { useContext } from "react"
import { Card } from "./Card"
import { DynamicStackIcon } from "./DynamicStackIcon"
import { graphql, useStaticQuery } from "gatsby"
import { getTheme } from "../utils/theme"
import ThemeContext from "../context/ThemeContext"

const ProjectList = () => {
  const { theme } = useContext(ThemeContext)
  const { color, secondary } = getTheme(theme)

  const data = useStaticQuery(graphql`
    query Projects {
      allProjectsJson {
        edges {
          node {
            name
            github
            desc
            img
            id
            date
            site
            stack
            status
          }
        }
      }
    }
  `)

  return (
    <>
      <h3
        css={{
          fontFamily: "Roboto Slab",
          color: color,
        }}
      >
        "love what you do and do what you love."
        <span css={{ color: secondary }}>- Ray Bradbury.</span>
      </h3>
      <div
        css={{
          display: `flex`,
          flexDirection: "column",
        }}
      >
        {data.allProjectsJson.edges.map(project => {
          console.log(project.node.funFact)
          return (
            <Card
              key={project.node.id}
              name={project.node.name}
              desc={project.node.desc}
              github={project.node.github}
              site={project.node.site}
              img={project.node.img}
              status={project.node.status}
              funFact={project.node.funFact}
              stack={project.node.stack.map(tech => (
                <DynamicStackIcon tech={tech} key={tech} />
              ))}
            />
          )
        })}
      </div>
    </>
  )
}

export default ProjectList
