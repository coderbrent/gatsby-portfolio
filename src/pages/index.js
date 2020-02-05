import React from "react"
import Layout from "../components/layout"
import BrentImage from '../components/BrentImage'
import ContactCard from '../components/contact-card/ContactCard'
 
const IndexPage = () => (
  <Layout>
    <div className="about-container">
      <div className="imageFrame" role="img">
        <BrentImage />
        <ContactCard />
      </div>
    <div>
      <h1 className="heading">hi! 
        <span
          className="emoji"
          role="img" 
          aria-label="waving emoji">
            👋
        </span>
      </h1>
        <section className="section-block">
          <p className="para">My name is Brent Abruzese - I'm a former business owner turned full stack JavaScript developer from the 
            mythical "limbo-plane" of Central New Jersey! (it exists, trust me - I'm here right now.)
            <p> I love spending time with my family, watching TV (I love paranormal <span role="img" aria-label="ghost">👻</span> shows!), 
            reading and playing hockey!</p>
          </p>
        </section>
        
    </div>
    </div>
  </Layout>
)

export default IndexPage
