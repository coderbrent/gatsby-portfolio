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
        <h3>Make A Portfolio They Said!</h3>
        <div className="article" style={{ display: 'inline-flex'}}>
          <div className="aside">
          { Projects.map(project => {
            return <Card
              key={project.id}
              desc={project.desc}
              name={project.name}
              date={project.date}
            />
          })}
            
          </div>
          <div className="section">
          </div>
        </div>
      </Layout>
    </>
  )
}

export default PortfolioPage;