import React from "react"
import { Card } from "./Card"
import { DynamicStackIcon } from "./DynamicStackIcon"
import { graphql, useStaticQuery } from "gatsby"

const ProjectList = () => {
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
      <aside
        css={{
          backgroundColor: "hsla(0,0%,84.7%,.06)",
          padding: "1.5rem",
          margin: "1rem auto",
          borderRadius: '9pt'
        }}
      >

        Below is a (very much non-exhaustive!) list of some projects I've
        worked on. There's a couple freelance jobs in there plus a few
        embarassing bootcamp hobby projects. 😿

      </aside>
      <div
        css={{
          display: `flex`,
          flexDirection: 'column',
          // gridTemplateColumns: `repeat(auto-fit, minmax(400px, 1fr)`,
          gap: "2rem",
        }}
      >
        {data.allProjectsJson.edges.map(project => {
          return (
            <Card
              key={project.node.id}
              name={project.node.name}
              desc={project.node.desc}
              github={project.node.github}
              site={project.node.site}
              img={project.node.img}
              status={project.node.status}
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
