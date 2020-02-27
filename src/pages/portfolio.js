import React from 'react';
import Layout from '../components/layout'
import SEO from "../components/seo"
import Card from '../components/card/card'
import classes from '../components/card/card.module.css'
import { graphql, useStaticQuery } from 'gatsby'
import ThemeProvider from '../context/ThemeProvider'

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
          stack
        }
      }
    }
  }`)
    
  return (
    <>
    <ThemeProvider>
      <Layout>
        <SEO title="Portfolio" />
          <div className={classes.cardGrid}>          
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
                stack={project.node.stack}
              />
            })}
          </div>
        </Layout>
      </ThemeProvider>
    </>
  )
}


export default PortfolioPage;