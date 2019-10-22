import React from "react"
import Layout from "../components/layout"
// import SEO from "../components/seo"
import BrentImage from '../components/BrentImage'
import BlogFeed from '../components/blog-feed/BlogFeed'
 
const IndexPage = () => (
  <Layout>
    <div className="about-container">
      <div className="imageFrame">
        <BrentImage />
        <BlogFeed />
      </div>
    <div>
      <h1 className="heading" style={{ fontSize: '5rem', marginBottom: '.25rem'}}>hello!</h1>
      <div>
        <div className="sectionBlock">
        <div className="sub-heading">about me</div>
          <p className="sectionParagraphs">Hi! My name is Brent Abruzese - I'm a full stack web developer from Central New Jersey!
            I love spending time with my family, watching TV (I love paranormal <span role="img" aria-label="ghost">👻</span> shows!), 
            reading and playing hockey! I hav</p>
        </div>
        <div className="sectionBlock">
        <div className="sub-heading">why i <span role="img" aria-label="heart">💗</span> to code</div>
          <p className="sectionParagraphs">What attracted me to web development was a love for creating and building cool things. 
            Back in the dial up days, I "picked up" a copy of Visual Basic 3.0 and began building
            punters and mass mailers on America Online like lots of other degenerate 90's youth! I did
            this for years until I had to get a "real job" and I tossed programming aside.</p>
        </div>
      </div>
      <div className="sectionBlock">
        <div className="sub-heading">what i'm up to now</div>
          <p className="sectionParagraphs">After spending the last 7 years starting and growing a limousine service,
            my company began to really start feeling the effects of rideshare (Uber/Lyft). I had to
            close my company and lay off my 22 employees in October 2019. 
            It certainly stung, but it brought me full circle. I now bring my years of entreprenurial experience
            to web developing. I'm currently freelancing and hunting for an awesome company to join!</p>
        </div>
    </div>
    </div>
  </Layout>
)

export default IndexPage
