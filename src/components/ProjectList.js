import React, { useContext } from "react"
import { Card } from "./Card"
import ReactIcon from "../Icons/reacticon.svg"
import GraphQLIcon from "../Icons/graphql.svg"
import BulmaIcon from "../Icons/bulma.svg"
import GatsbyIcon from "../Icons/gatsby.svg"
import MySQLIcon from "../Icons/sql.svg"
import MongoIcon from "../Icons/mongoicon.svg"
import HandlebarsIcon from "../Icons/handlebars.svg"
import NodeIcon from "../Icons/node.svg"
import BootstrapIcon from "../Icons/bootstrap.svg"
import MaterialUiIcon from "../Icons/materialui.svg"
import ReduxIcon from "../Icons/redux.svg"
import NextIcon from "../Icons/nextjs.svg"
import PostGresIcon from "../Icons/postgres.svg"
import TypescriptIcon from "../Icons/typescript.svg"
import RailsIcon from "../Icons/rails.svg"
import TailwindIcon from "../Icons/tailwind.svg"
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
        {data.allProjectsJson.edges.map(project => (
          <Card
            key={project.node.id}
            name={project.node.name}
            img={project.node.img}
            desc={project.node.desc}
            github={project.node.github}
            site={project.node.site}
            status={project.node.status}
            stack={project.node.stack.map((tech, i) => {
              switch (tech) {
                case "gatsby":
                  return (
                    <a
                      href="https://gatsbyjs.org"
                      css={{ margin: `0rem 0.5rem` }}
                    >
                      <GatsbyIcon
                        width="1.25rem"
                        height="1.25rem"
                        css={{
                          "@media (max-width: 576px)": {
                            width: `1.85rem`,
                            height: `1.85rem`,
                            marginTop: `.75rem`,
                          },
                        }}
                        key={i}
                      />
                    </a>
                  )
                case "typescript":
                  return (
                    <a
                      href="https://typescriptlang.org"
                      css={{ margin: `0rem 0.5rem` }}
                    >
                      <TypescriptIcon
                        width="1.25rem"
                        height="1.25rem"
                        css={{
                          "@media (max-width: 576px)": {
                            width: `1.85rem`,
                            height: `1.85rem`,
                            marginTop: `.75rem`,
                          },
                        }}
                        key={i}
                      />
                    </a>
                  )
                case "postgres":
                  return (
                    <a
                      href="https://postgressql.org"
                      css={{ margin: `0rem 0.5rem` }}
                    >
                      <PostGresIcon
                        width="1.25rem"
                        height="1.25rem"
                        css={{
                          "@media (max-width: 576px)": {
                            width: `1.85rem`,
                            height: `1.85rem`,
                            marginTop: `.75rem`,
                          },
                        }}
                        key={i}
                      />
                    </a>
                  )
                case "nextjs":
                  return (
                    <a
                      href="https://nextjs.com"
                      css={{ margin: `0rem 0.5rem` }}
                    >
                      <NextIcon
                        width="1.25rem"
                        height="1.25rem"
                        css={{
                          "@media (max-width: 576px)": {
                            width: `1.85rem`,
                            height: `1.85rem`,
                            marginTop: `.75rem`,
                          },
                        }}
                        key={i}
                      />
                    </a>
                  )
                case "graphql":
                  return (
                    <a
                      href="https://graphql.org"
                      css={{ margin: `0rem .5rem` }}
                    >
                      <GraphQLIcon
                        width="1.25rem"
                        height="1.25rem"
                        css={{
                          "@media (max-width: 576px)": {
                            width: `1.85rem`,
                            height: `1.85rem`,
                            marginTop: `.75rem`,
                          },
                        }}
                        key={i}
                      />
                    </a>
                  )
                case "bulma":
                  return (
                    <a href="https://bulma.io" css={{ margin: `0rem .5rem` }}>
                      <BulmaIcon
                        width="1.25rem"
                        height="1.25rem"
                        css={{
                          "@media (max-width: 576px)": {
                            width: `1.85rem`,
                            height: `1.85rem`,
                            marginTop: `.75rem`,
                          },
                        }}
                        key={i}
                      />
                    </a>
                  )
                case "node":
                  return (
                    <a href="https://nodejs.org" css={{ margin: `0rem .5rem` }}>
                      <NodeIcon
                        width="1.25rem"
                        height="1.25rem"
                        css={{
                          "@media (max-width: 576px)": {
                            width: `1.85rem`,
                            height: `1.85rem`,
                            marginTop: `.75rem`,
                          },
                        }}
                        key={i}
                      />
                    </a>
                  )
                case "mysql":
                  return (
                    <a href="https://mysql.com" css={{ margin: `0rem .5rem` }}>
                      <MySQLIcon
                        width="1.25rem"
                        height="1.25rem"
                        css={{
                          "@media (max-width: 576px)": {
                            width: `1.85rem`,
                            height: `1.85rem`,
                            marginTop: `.75rem`,
                          },
                        }}
                        key={i}
                      />
                    </a>
                  )
                case "mongo":
                  return (
                    <a
                      href="https://mongodb.com"
                      css={{ margin: `0rem .5rem` }}
                    >
                      <MongoIcon
                        width="1.25rem"
                        height="1.25rem"
                        css={{
                          "@media (max-width: 576px)": {
                            width: `1.85rem`,
                            height: `1.85rem`,
                            marginTop: `.75rem`,
                          },
                        }}
                        key={i}
                      />
                    </a>
                  )
                case "handlebars":
                  return (
                    <a
                      href="https://handlebarsjs.com"
                      css={{ margin: `0rem .5rem` }}
                    >
                      <HandlebarsIcon
                        width="1.25rem"
                        css={{
                          "@media (max-width: 576px)": {
                            width: `1.85rem`,
                            height: `1.85rem`,
                            marginTop: `.75rem`,
                          },
                        }}
                        height="1.25rem"
                        key={i}
                      />
                    </a>
                  )
                case "bootstrap":
                  return (
                    <a
                      href="https://getbootstrap.com"
                      css={{ margin: `0rem .5rem` }}
                    >
                      <BootstrapIcon
                        width="1.25rem"
                        css={{
                          "@media (max-width: 576px)": {
                            width: `1.85rem`,
                            height: `1.85rem`,
                            marginTop: `.75rem`,
                          },
                        }}
                        height="1.25rem"
                        key={i}
                      />
                    </a>
                  )
                case "react":
                  return (
                    <a
                      href="https://reactjs.org"
                      css={{ margin: `0rem .5rem` }}
                    >
                      <ReactIcon
                        width="1.25rem"
                        height="1.25rem"
                        css={{
                          "@media (max-width: 576px)": {
                            width: `1.85rem`,
                            height: `1.85rem`,
                            marginTop: `.75rem`,
                          },
                        }}
                        key={i}
                      />
                    </a>
                  )
                case "material-ui":
                  return (
                    <a
                      href="https://material-ui.com"
                      css={{ margin: `0rem .5rem` }}
                    >
                      <MaterialUiIcon
                        width="1.25rem"
                        css={{
                          "@media (max-width: 576px)": {
                            width: `1.85rem`,
                            height: `1.85rem`,
                            marginTop: `.75rem`,
                          },
                        }}
                        height="1.25rem"
                        key={i}
                      />
                    </a>
                  )
                case "redux":
                  return (
                    <a
                      href="https://redux.js.org"
                      css={{ margin: `0rem .5rem` }}
                    >
                      <ReduxIcon
                        width="1.25rem"
                        height="1.25rem"
                        css={{
                          "@media (max-width: 576px)": {
                            width: `1.85rem`,
                            height: `1.85rem`,
                            marginTop: `.75rem`,
                          },
                        }}
                        key={i}
                      />
                    </a>
                  )
                case "rails":
                  return (
                    <a
                      href="https://rubyonrails.org"
                      css={{ margin: `0rem .5rem` }}
                    >
                      <RailsIcon
                        width="1.25rem"
                        height="1.25rem"
                        css={{
                          color: "red",
                          "@media (max-width: 576px)": {
                            width: `1.85rem`,
                            height: `1.85rem`,
                            marginTop: `.75rem`,
                          },
                        }}
                        key={i}
                      />
                    </a>
                  )
                case "tailwind":
                  return (
                    <a
                      href="https://tailwindcss.com"
                      css={{ margin: `0rem .5rem` }}
                    >
                      <TailwindIcon
                        width="1.25rem"
                        height="1.25rem"
                        css={{
                          "@media (max-width: 576px)": {
                            width: `1.85rem`,
                            height: `1.85rem`,
                            marginTop: `.75rem`,
                          },
                        }}
                        key={i}
                      />
                    </a>
                  )
                default:
                  return null
              }
            })}
          />
        ))}
      </div>
    </>
  )
}

export default ProjectList
