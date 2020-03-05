import React, { useContext } from 'react'
import ReactIcon from '../Icons/reacticon.svg'
import GraphQLIcon from '../Icons/graphql.svg'
import BulmaIcon from '../Icons/bulma.svg'
import GatsbyIcon from '../Icons/gatsby.svg'
import MySQLIcon from '../Icons/sql.svg'
import MongoIcon from '../Icons/mongoicon.svg'
import HandlebarsIcon from '../Icons/handlebars.svg'
import NodeIcon from '../Icons/node.svg'
import BootstrapIcon from '../Icons/bootstrap.svg'
import MaterialUiIcon from '../Icons/materialui.svg'
import ReduxIcon from '../Icons/redux.svg'
import { graphql, useStaticQuery } from 'gatsby'
import { CUBIC_BEZIER_TRANSITION, getTheme } from '../utils/theme';
import ThemeContext from '../context/ThemeContext';

const Card = ({ name, img, desc, stack, github, site }) => {
  const { theme } = useContext(ThemeContext);
  const {
    color, 
    secondary,
    muted
  } = getTheme(theme);

  return (
    <div 
      css={{
        margin: `1rem 0rem`,
        maxWidth: `670px`,
        borderRadius: `10pt`,
        transition: CUBIC_BEZIER_TRANSITION,
        backgroundColor: 'transparent'
      }}
    >
      <div 
        css={{ 
          display: `flex`, 
          alignItems: `flex-start`,
          '@media (max-width: 576px)': {
            display: `flex`,
            margin: `1rem auto`,
            transition: `0.8s cubic-bezier(0.2, 0.8, 0.2, 1)`,
            flexDirection: `column-reverse`
        }}}
      >
      <img 
        css={{ 
          maxWidth: 190, 
          borderRadius: `10pt`,
          marginRight: `1rem`,
          '@media (max-width: 576px)': {
            maxWidth: 325,
            minWidth: 190,
            transition: `0.8s cubic-bezier(0.2, 0.8, 0.2, 1)`
        }} }
        src={ img } 
      />
      <div 
        css={{
          display: `block`
        }}
      >
      <div 
        css={{ 
          display: `inline-flex`,
          alignItems: `flex-start`,
          '@media (max-width: 576px)': {
            display: `block`,
            transition: `0.8s cubic-bezier(0.2, 0.8, 0.2, 1)`,
            textAlign: `center`,
            margin: `auto auto`,
        }}}
      >
      <h3 css={{ fontSize: `1.15rem`, marginBottom: `0rem`,}}>
        <a 
          href={site}
          css={{
            color: secondary,
            textDecoration: `none`,
            fontFamily: `fira mono`,
            fontSize: `1.15rem`,
            fontWeight: `10`,
            transition: CUBIC_BEZIER_TRANSITION,
            margin: `0rem 0rem`,
            '@media (max-width: 576px)': {
              fontSize: `3rem`,
              transition: `0.8s cubic-bezier(0.2, 0.8, 0.2, 1)`,
          }
          }}
        >
          { name }
        </a>
      </h3>
        { stack }
      </div>
        <div 
          css={{ 
            color: color,
            fontSize: `smaller`,
            transition: CUBIC_BEZIER_TRANSITION,
            padding: `0`,
            margin: `0`,
            '@media (max-width: 576px)': {
              transition: CUBIC_BEZIER_TRANSITION,
              textAlign: `center`,
              margin: `auto auto`,
          }
          }}
        >
          { desc }
        </div>
        <div css={{ display: `block`}}>
          <a 
            href={github}
            css={{
              color: muted,
              textDecoration: `none`,
              '&:hover': { color: secondary },
              '@media (max-width: 576px)': {
                transition: CUBIC_BEZIER_TRANSITION,
                textAlign: `center`
              }
            }}
          >
            {`</view-code>`}
          </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const ProjectCard = () => {
  const data = useStaticQuery(graphql`
    query Projects {
      allProjectsJson {
      edges {
        node {
          name
          github
          desc
          img
          id
          date
          site
          stack
          status
        }
      }
    }
  }
`)

  return (
    <>
    <div 
      css={{ 
        display: `block`,
        width: `100%`,
      }}
    >
      { data.allProjectsJson.edges.map((project, i) => (
        <Card
          key={project.node.id} 
          name={project.node.name}
          img={project.node.img}
          desc={project.node.desc}
          github={project.node.github}
          site={project.node.site}
          status={project.node.status}
          stack={project.node.stack.map((tech, i) => {
            switch(tech) {
              case 'gatsby': return <a href="https://gatsbyjs.org" css={{ margin: `0rem .5rem`}}><GatsbyIcon width="1.25rem" height="1.25rem" css={{ '@media (max-width: 576px)': { width: `2.5rem`, height: `2.5rem`, marginTop: `.75rem`, transition: `${CUBIC_BEZIER_TRANSITION}` }}} key={i} /></a>
              case 'graphql': return <a href="https://graphql.org" css={{ margin: `0rem .5rem`}}><GraphQLIcon width="1.25rem" height="1.25rem" css={{ '@media (max-width: 576px)': { width: `2.5rem`, height: `2.5rem`, marginTop: `.75rem`, transition: `${CUBIC_BEZIER_TRANSITION}` }}} key={i} /></a>
              case 'bulma': return <a href="https://bulma.io" css={{ margin: `0rem .5rem`}}><BulmaIcon width="1.25rem" height="1.25rem" css={{ '@media (max-width: 576px)': { width: `2.5rem`, height: `2.5rem`, marginTop: `.75rem`, transition: `${CUBIC_BEZIER_TRANSITION}` }}} key={i} /></a>
              case 'node': return <a href="https://nodejs.org" css={{ margin: `0rem .5rem`}}><NodeIcon width="1.25rem" height="1.25rem" css={{ '@media (max-width: 576px)': { width: `2.5rem`, height: `2.5rem`, marginTop: `.75rem`, transition: `${CUBIC_BEZIER_TRANSITION}` }}} key={i} /></a>
              case 'mysql': return <a href="https://mysql.com" css={{ margin: `0rem .5rem`}}><MySQLIcon width="1.25rem" height="1.25rem" css={{ '@media (max-width: 576px)': { width: `2.5rem`, height: `2.5rem`, marginTop: `.75rem`, transition: `${CUBIC_BEZIER_TRANSITION}` }}} key={i} /></a>
              case 'mongo': return <a href="https://mongodb.com" css={{ margin: `0rem .5rem`}}><MongoIcon width="1.25rem" height="1.25rem" css={{ '@media (max-width: 576px)': { width: `2.5rem`, height: `2.5rem`, marginTop: `.75rem`, transition: `${CUBIC_BEZIER_TRANSITION}` }}} key={i} /></a>
              case 'handlebars': return <a href="https://handlebarsjs.com" css={{ margin: `0rem .5rem`}}><HandlebarsIcon width="1.25rem" css={{ '@media (max-width: 576px)': { width: `2.5rem`, height: `2.5rem`, marginTop: `.75rem`, transition: `${CUBIC_BEZIER_TRANSITION}` }}} height="1.25rem" key={i} /></a>
              case 'bootstrap': return <a href="https://getbootstrap.com" css={{ margin: `0rem .5rem`}}><BootstrapIcon width="1.25rem" css={{ '@media (max-width: 576px)': { width: `2.5rem`, height: `2.5rem`, marginTop: `.75rem`, transition: `${CUBIC_BEZIER_TRANSITION}` }}} height="1.25rem" key={i} /></a>
              case 'react': return <a href="https://reactjs.org" css={{ margin: `0rem .5rem`}}><ReactIcon width="1.25rem" height="1.25rem" css={{ '@media (max-width: 576px)': { width: `2.5rem`, height: `2.5rem`, marginTop: `.75rem`, transition: `${CUBIC_BEZIER_TRANSITION}` }}} key={i} /></a>
              case 'material-ui': return <a href="https://material-ui.com" css={{ margin: `0rem .5rem`}}><MaterialUiIcon width="1.25rem" css={{ '@media (max-width: 576px)': { width: `2.5rem`, height: `2.5rem`, marginTop: `.75rem`, transition: `${CUBIC_BEZIER_TRANSITION}` }}} height="1.25rem" key={i} /></a>
              case 'redux': return <a href="https://redux.js.org" css={{ margin: `0rem .5rem`}}><ReduxIcon width="1.25rem" height="1.25rem" css={{ '@media (max-width: 576px)': { width: `2.5rem`, height: `2.5rem`, marginTop: `.75rem`, transition: `${CUBIC_BEZIER_TRANSITION}` }}} key={i} /></a>
            }
          })}
        /> 
      )) }
    </div>
    </>
  )
}

export default ProjectCard;