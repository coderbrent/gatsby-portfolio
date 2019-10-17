import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BrentImage from '../components/image'
 
const IndexPage = () => (
  <Layout>
    <div className="about-container">
    <div>
      <h1 className="heading" style={{ fontSize: '5rem'}}>hello!</h1>
      <div>
        <div className="sectionBlock">
        <div className="sub-heading">...about me...</div>
          <div className="section">
            Hi! My name is Brent Abruzese - I'm a full stack web developer from Central New Jersey!
            I love spending time with my family, watching TV (I love paranormal 👻 shows!), 
            reading and playing hockey!
          </div>
        </div>
        <div className="sectionBlock">
        <div className="sub-heading">...why i do the codes....</div>
          <div className="section">
            What attracted me to web development was a love for creating and building cool things. 
            Back in the dial up days, I "picked up" a copy of Visual Basic 3.0 and began building
            punters and mass mailers on America Online like lots of other degenerate 90's youth! I did
            this for years until I had to get a "real job" and I tossed programming aside.
          </div>
        </div>
      </div>
      <div className="sectionBlock">
        <div className="sub-heading">...what i'm up to now...</div>
          <div className="section">
            <p>After spending the last 7 years starting and growing a limousine service,
            my company began to really start feeling the effects of rideshare (Uber/Lyft). I had to
            close my company and lay off my 22 employees in October 2019. 
            It certainly stung, but it brought me full circle.</p>
            
            <p>I now bring my years of entreprenurial experience
            to my coding. I'm currently freelancing and hunting for an awesome company to join!</p>
          </div>
        </div>
    </div>
      <div style={{ width: 350, marginTop: 25}}>
        <BrentImage />
      </div>
    </div>
  </Layout>
)

export default IndexPage
