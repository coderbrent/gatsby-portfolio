import React from "react"
import Layout from "../components/layout"
import BrentImage from '../components/BrentImage'
import FactCard from '../components/fact-card/FactCard'
 
const IndexPage = () => (
  <Layout>
    <div className="about-container">
      <div className="imageFrame" role="img">
        <BrentImage />
        <FactCard />
      </div>
    <div>
      <h1 className="heading">hello!</h1>
      <div>
        <h1>I'm a...</h1>
        <h3>Full Stack Web Developer</h3>
      </div>
    </div>
    </div>
  </Layout>
)

export default IndexPage
