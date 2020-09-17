import React from "react"
import Layout from "../components/layout"
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
import ProjectCard from '../components/ProjectCard';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Blog from '../components/Blog';

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
  const siteData = useStaticQuery(data);
  const { social } = siteData.site.siteMetadata;

  return (
      <Layout>
        <div 
          css={{ 
            display: `flex`, 
            alignItems: `center`,
          }}
        >
        <section 
          css={{ 
            margin: `.5rem 1.5rem`,
            paddingRight: `1rem`
          }}
        >
          <h2 
            css={{
              fontSize: `2rem`,
              fontFamily: `Trocchi`,
              fontWeight: `bolder`,
              lineHeight: '2.5rem',
              '@media (max-width: 576px)': {
                textAlign: `left`,
                transition: `0.8s cubic-bezier(0.2, 0.8, 0.2, 1)`
            }}}>
            Hi! I build things with <span css={{ color: 'gold'}}>JavaScript</span> for people to use!
          </h2>
            <p 
              css={{ 
                marginRight: `9rem`,
                marginBottom: `0rem`,
                '@media (max-width: 576px)': {
                  marginRight: `0rem`,
                  transition: `0.8s cubic-bezier(0.2, 0.8, 0.2, 1)`,
                  textAlign: `left`
                 }
              }}
            >
              I'm a former business owner turned full stack JavaScript developer!
              I love spending time with my family, watching TV (I love paranormal <span role="img" aria-label="ghost">👻</span> shows!), 
              reading and playing hockey. I enjoy building things with React, GraphQL, Node and Mongo, but I'm always open and eager to
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
            target="_blank"
            rel="noopener noreferrer"
            aria-label="link to my github page"
            as="a"
            circular
            href={social.github}
          > 
            <FiGithub /> 
          </Button>
          <Button 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="my linkedin page"
            circular
            as="a"
            href={social.linkedin}
          > 
            <FiLinkedin /> 
          </Button>
          <Button 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="my twitter page"
            circular
            as="a"
            href={social.twitter}
          > 
            <FiTwitter /> 
          </Button>
          <Button 
            aria-label="send me an email"
            circular
            as="a"
            href={social.email}
          > 
            <FiMail /> 
          </Button>
          <Button 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="link to my resume"
            circular
            as="a"
            href={social.resume}
          > 
            <FiDownloadCloud /> 
          </Button>
          <Button 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="link to my stackoverflow page"
            circular
            as="a"
            href={social.stackoverflow}
          > 
            <FiActivity /> 
          </Button>
        </aside>
        </div>
        <section css={{ margin: `2.5rem 2.5rem`}}>
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
                fontFamily: `Trocchi`,
                fontWeight: `bolder`,
                marginRight: `.5rem`,
                textDecoration: 'underline',
                textDecorationColor: 'slateblue',
                textUnderlinePosition: 'under',
                '@media (max-width: 576px)': {
                  marginBottom: `.25rem`,
                  transition: `0.8s cubic-bezier(0.2, 0.8, 0.2, 1)`,
                }
              }}
            >
              My Work
            </h2> 
            <FiCoffee 
              css={{ 
                marginTop: `.29rem`, 
                fill: 'slateblue' 
              }} 
              size="1.5rem"
            />
          </div>
          <ProjectCard />
        </section>
        <Blog />
    </Layout>
  )
}

export default IndexPage;
