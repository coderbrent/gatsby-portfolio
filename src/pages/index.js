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
        <div className="sectionBlock">
        <div className="sub-heading">about me</div>
          <p className="sectionParagraphs">Hi! My name is Brent Abruzese - I'm a former business owner turned full stack JavaScript loving web developer from the sometimes-referred-to-as-mythical Central New Jersey!
            I love spending time with my family, watching TV (I love paranormal <span role="img" aria-label="ghost">👻</span> shows!), 
            reading and playing hockey!</p>
        </div>
        <div className="sectionBlock">
        <div className="sub-heading">a little more background...</div>
          <p className="sectionParagraphs">After spending the last 7 years starting and building a limousine company,
            the business had begun to really start feeling the effects of rideshare (Uber/Lyft). So much so that I had to
            shut down and lay off my 22 employees in October 2019. 
            It certainly stung, but I looked at it as one door opening in this case. 
          </p>
        </div>
      </div>
      <div className="sectionBlock">
      <div className="sub-heading">why i <span role="img" aria-label="heart">💗</span> to code</div>
        <p className="sectionParagraphs">What initially attracted me to web development was the amount of coffee that devs drink. As it appeared to be ALL the coffee - and as I am a coffee fanatic myself - I couldn't help but become very intrigued. Naturally, my first inclination led me towards
          JavaScript. Though I would find out later that the language itself had really nothing to do with actual coffee, I still fell in love with the idea of creating with it - in and on the limitless canvas of the interwebs! I also routinely found myself saying things like, "This app could be SO much better if they had just...", with regards to whatever software was frustrating me in that moment as a business owner.
          All of this was simply too much to take, so I started reading and coding on my own.
        </p>
      </div>
    </div>
    </div>
  </Layout>
)

export default IndexPage
