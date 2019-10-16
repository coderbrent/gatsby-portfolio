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
            What attracted me to web development was a love for creating and building cool things. I've been
            working more recently in the MERN stack (Mongo, Express, React, Node), but I try to keep myself
            from overengineering and using tools for the sake of using them (this portfolio being an example of that!)
          </div>
      </div>
    </div>
      <Image />
    </div>
      
   
  </Layout>
)

export default IndexPage
