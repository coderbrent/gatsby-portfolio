import React from 'react';
import Layout from '../components/layout'
import SEO from "../components/seo"
import Card from '../components/card/card'
import cardStyles from '../components/card/card.module.css'
import { graphql, useStaticQuery } from 'gatsby'

const PortfolioPage = () => {

  const data = useStaticQuery(graphql`
    query projectQuery {
    allProjectsJson {
      edges {
        node {
          id
          status
          img
          desc
          name
          site
          github
          date
          features
        }
      }
    }
  }`)
    
  return (
    <>
      <SEO title="Portfolio" />
      <Layout>
        <h3 className="heading">my work...</h3>
          <div className={cardStyles.cardGrid}>
            { data.allProjectsJson.edges.map(project => {
              return <Card
                key={project.node.id}
                desc={project.node.desc}
                img={project.node.img}
                status={project.node.status}
                name={project.node.name}
                date={project.node.date}
                site={project.node.site}
                github={project.node.github}
                features={project.node.features}
              />
            })}
          </div>
      </Layout>
    </>
  )
}


export default PortfolioPage;