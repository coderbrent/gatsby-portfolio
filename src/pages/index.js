import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from '../components/image'
 
const IndexPage = () => (
  <Layout>
    <h3 className="heading">A little bit about me!</h3>
    <div className="about-container">
      <div style={{ marginLeft: 10 }}>
      <div className="about-content" style={{ fontWeight: 'bold', marginBottom: 4 }}>Hi!</div>
        My name is Brent Abruzese and I'm a full stack web developer from Central New Jersey!
        When I'm not ⌨️ I love spending time with my 👪, watching 📺, reading 📘 and playing 🎸 and 🏒!
      <div 
        style={{ 
          fontWeight: 'bold',
          marginBottom: 4,
          marginTop: 20 }}>
          Where I've Been
      </div>
        Before becoming a developer, I owned a local limousine service. I grew
        the business rapidly through social media marketing and seo techniques.
        I went from a 1 vehicle operation to 10 vehicles and $1 mil in annual revenue
        in just 4 years! With 22 employees and a client list full of celebrities, pro-athletes
        and business executives, I enjoyed being an entrepreneur in ground transportation!
        <div 
        style={{ 
          fontWeight: 'bold',
          marginBottom: 4,
          marginTop: 20 }}>
          One door closes...
      </div>
          Unfortunately, disruption is the nature of the world we live in today and in 2018 we began
          to really feel the effects of rideshare on our small business. As finances strained, we were ultimately
          forced to close our doors. 
      </div>
    </div>
  </Layout>
)

export default IndexPage
