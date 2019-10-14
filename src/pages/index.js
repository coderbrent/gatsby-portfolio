import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from '../components/image'
 
const IndexPage = () => (
  <Layout>
    <div className="about-container">
    <div>
      <div className="heading">Hello!</div>
      <div>
        <div className="sub-heading">ABOUT ME</div>
          <div className="section">
          Hi! My name is Brent Abruzese and I'm a full stack web developer from Central New Jersey!
          When I'm not ⌨️ I love spending time with my 👪, watching 📺, reading 📘 and playing 🎸 and 🏒!
          </div>
        <div className="sub-heading">BUILDING STUFF</div>
          <div className="section">
            What attracted me to programming (or "coding" as the kids call it these days) was a love of creating and building cool things.
          </div>
      </div>
    </div>
      <Image />
    </div>
      
   
  </Layout>
)

export default IndexPage
