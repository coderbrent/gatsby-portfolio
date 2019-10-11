import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h3 className="heading">About Me</h3>
    <div className="container">
      <div className="picture">
        <Image />
      </div>
      <div style={{ marginLeft: 10 }}>
      <div style={{ fontWeight: 'bold', marginBottom: 4 }}>Hi there!</div>
        My name is Brent Abruzese and I'm a full stack web developer from New Jersey!
        I love to spend time with my family, watch TV, play guitar and hockey!
      </div>
    </div>
    <h4 className="heading">My Tech</h4>
      <div className="container" style={{ backgroundColor: 'red' }}>

      </div>

  </Layout>
)

export default IndexPage
