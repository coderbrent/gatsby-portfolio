import React from "react"
import Layout from "../components/layout"
import ThemeProvider from '../context/ThemeProvider'
import Button from '../components/Button'
import { 
  FiGithub, 
  FiLinkedin, 
  FiTwitter, 
  FiCoffee,
  FiMail,
  FiDownloadCloud,
  FiActivity,
} from "react-icons/fi";
import ProjectCard from '../components/ProjectCard'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'

const data = graphql`
  query {
    site {
      siteMetadata {
        social {
          email
          github
          linkedin
          stackoverflow
          twitter
          resume
        }
      }
    }
  }
`

const IndexPage = () => {
  const siteData = useStaticQuery(data)
  const { social } = siteData.site.siteMetadata

  return (
    <ThemeProvider>
      <Layout>
        <div 
          css={{ 
            display: `inline-flex`, 
            alignItems: `center`,
          }}
        >
        <section 
          css={{ 
            margin: `.5rem .1rem`,
            paddingRight: `1rem`
          }}
        >
          <h2 
            css={{
              fontFamily: `work sans`,
              fontWeight: `bolder`,
              fontVariantCaps: `all-petite-caps`,
              '@media (max-width: 576px)': {
                textAlign: `left`,
                transition: `0.8s cubic-bezier(0.2, 0.8, 0.2, 1)`
            }}}>
            hello there!
          </h2>
            <p 
              css={{ 
                marginRight: `6rem`,
                '@media (max-width: 576px)': {
                  marginRight: `0rem`,
                  transition: `0.8s cubic-bezier(0.2, 0.8, 0.2, 1)`,
                  textAlign: `left`
                 }
              }}
            >
              I'm a former business owner turned full stack JavaScript developer!
              I love spending time with my family, watching TV (I love paranormal <span role="img" aria-label="ghost">👻</span> shows!), 
              reading and playing hockey. I'm enjoy building things with React, GraphQL, Node and Mongo, but I'm always open and eager to
              jump into new stacks and expand my knowledge in new directions. My goal is to join a company/organization whose values mirror
              my own. Having been an entrepreneur, I'd truly love for my code to have a positive impact on small businesses.
            </p>
        </section>
        <aside 
          css={{ 
            display: `grid`,
            gridGap: `1rem`, 
            gridTemplateColumns: `1fr 1fr`,
            '@media (max-width: 576px)': {
              gridTemplateColumns: `1fr`,
              fontSize: `1.5rem`,
              transition: `0.8s cubic-bezier(0.2, 0.8, 0.2, 1)`
            }
          }}
        >
          <Button 
            as="a"
            circular
            href={social.github}
          > 
            <FiGithub /> 
          </Button>
          <Button 
            circular
            as="a"
            href={social.linkedin}
          > 
            <FiLinkedin /> 
          </Button>
          <Button 
            circular
            as="a"
            href={social.twitter}
          > 
            <FiTwitter /> 
          </Button>
          <Button 
            circular
            as="a"
            href={social.email}
          > 
            <FiMail /> 
          </Button>
          <Button 
            circular
            as="a"
            href={social.resume}
          > 
            <FiDownloadCloud /> 
          </Button>
          <Button 
            circular
            as="a"
            href={social.stackoverflow}
          > 
            <FiActivity /> 
          </Button>
        </aside>
        </div>
        <section css={{ margin: `2.5rem auto`}}>
          <div 
            css={{ 
              display: `flex`,
              '@media (max-width: 576px)': {
                justifyContent: `center`,
                display: `flex`,
                transition: `0.8s cubic-bezier(0.2, 0.8, 0.2, 1)`,
              }
            }}
          >
            <h2 
              css={{ 
                fontFamily: `fira mono`, 
                marginRight: `.5rem`,
                '@media (max-width: 576px)': {
                  marginBottom: `.25rem`,
                  transition: `0.8s cubic-bezier(0.2, 0.8, 0.2, 1)`,
                }
              }}
            >
              my work
            </h2> 
            <FiCoffee css={{ marginTop: `.29rem`, fill: 'slateblue'}} size="1.5rem"/>
          </div>
          <ProjectCard />
        </section>
      </Layout>
    </ThemeProvider>
  )
}

export default IndexPage
