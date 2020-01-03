import React from 'react';
import Layout from '../components/layout'
import SEO from "../components/seo"
import Projects from '../data/projects.json'
import Card from '../components/card/card'
import cardStyles from '../components/card/card.module.css'
import { graphql, useStaticQuery } from 'gatsby'

const PortfolioPage = () => {

  const data = graphql`query portfolioData {
    allProjectsJson {
      edges {
        node {
          id
          img
          github
          features
          desc
          date
          name
          site
          stack
        }
      }
    }
  }`

  console.log(data)

  return (
    <>
      <SEO title="Portfolio" />
      <Layout>
        <h3 className="heading">my work...</h3>
          <div className={cardStyles.cardGrid}>
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
                features={project.features}
              />
            })}
          </div>
      </Layout>
    </>
  )
}

export default PortfolioPage;