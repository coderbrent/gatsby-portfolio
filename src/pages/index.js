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
  FiBookOpen,
} from "react-icons/fi";
import ProjectCard from '../components/ProjectCard'
import { graphql, useStaticQuery, Link } from 'gatsby'
import ThemeContext from "../context/ThemeContext";

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

const blogData = graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            excerpt
            id
            frontmatter {
              path
              author
              date
              title
          }
        }
      }
    }
  }
`

const IndexPage = () => {
  const siteData = useStaticQuery(data)
  const gqlBlogData = useStaticQuery(blogData)
  const { social } = siteData.site.siteMetadata

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
            margin: `.5rem 2.5rem`,
            paddingRight: `1rem`
          }}
        >
          <h2 
            css={{
              fontSize: `2rem`,
              fontFamily: `Trocchi`,
              fontWeight: `bolder`,
              '@media (max-width: 576px)': {
                textAlign: `left`,
                transition: `0.8s cubic-bezier(0.2, 0.8, 0.2, 1)`
            }}}>
            Hello!
          </h2>
            <p 
              css={{ 
                marginRight: `9rem`,
                marginLeft: `.25rem`,
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
        <div 
          css={{ 
            display: `flex`,
            alignItems: `baseline`,
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
                marginBottom: `.5rem`,
                marginLeft: `2.5rem`,
                '@media (max-width: 576px)': {
                  marginBottom: `.25rem`,
                  transition: `0.8s cubic-bezier(0.2, 0.8, 0.2, 1)`,
                }
              }}
            >
              My Blog
            </h2> 
            <FiBookOpen
              css={{ 
                marginLeft: `.5rem`, 
                fill: 'slateblue' 
              }} 
              size="1.5rem"
            />
          </div>
        <div css={{ margin: '1rem 2.5rem'}}>
          {gqlBlogData.allMarkdownRemark.edges.map(post => (
          <div key={post.node.id}>
            <h2 
              css={{ 
                fontFamily: 'Trocchi',
                marginBottom: '.5rem',
                backgroundColor: 'slateblue',
                padding: '.5rem .2rem'
              }}
            >
              {post.node.frontmatter.title}
            </h2>
              <small css={{ color: 'slateblue'}}>
                Posted by: {post.node.frontmatter.author} on {post.node.frontmatter.date}
              </small>
              <br />
              <p>{post.node.excerpt}</p>
              <Link 
                css={{
                  display: 'flex',
                  color: 'white',
                  textDecorationStyle: 'dashed',
                  textDecorationSkipInk: 'auto',
                  textUnderlinePosition: 'under',
                }} 
                to={post.node.frontmatter.path}>
                <p 
                  css={{ 
                    marginBottom: '.5rem',
                  }}
                >
                  read more
                </p>
              </Link>
              <br/>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage
