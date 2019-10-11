import React from 'react';
import Layout from '../components/layout'
import SEO from "../components/seo"
import Projects from '../data/projects.json'

const PortfolioPage = () => {
  return (
    <>
      <SEO title="Portfolio" />
      <Layout>
        <h3>Make A Portfolio They Said!</h3>
        <div className="article" style={{ display: 'inline-flex'}}>
          <div className="aside">
          Here's my derpy ass portfolio section yall
          </div>
          <div className="section">
          </div>
        </div>
      </Layout>
    </>
  )
}

export default PortfolioPage;