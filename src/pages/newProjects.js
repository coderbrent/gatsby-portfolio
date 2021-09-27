import React from "react"
import ProjectCard from "../components/ProjectCard"
import Layout from "../components/layout"

const Projects = ({ children }) => {
  return (
    <>
      <Layout>{children}</Layout>
    </>
  )
}

export default Projects
