import React from 'react';
import Layout from '../components/layout'
import SEO from "../components/seo"
import Projects from '../data/projects.json'
import Card from '../components/card/card'

const PortfolioPage = () => {
  return (
    <>
      <SEO title="Portfolio" />
      <Layout>
        <h3 className="heading">some work I've done...</h3>
        <div className="card-grid">
          { Projects.map(project => {
            return <Card
              key={project.id}
              desc={project.desc}
              img={project.img}
              name={project.name}
              date={project.date}
              site={project.site}
              github={project.github}
              stack={project.stack}
            />
          })}
        </div>
      </Layout>
    </>
  )
}

export default PortfolioPage;