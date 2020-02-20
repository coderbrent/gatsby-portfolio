import React from 'react'
import classes from '../card/card.module.css'
import GitHubIcon from '../../Icons/github.svg'
import NetlifyIcon from '../../Icons/netlify.svg'
import ReactIcon from '../../Icons/reacticon.svg'
import GraphQLIcon from '../../Icons/graphql.svg'
import BulmaIcon from '../../Icons/bulma.svg'
import GatsbyIcon from '../../Icons/gatsby.svg'
import MySQLIcon from '../../Icons/sql.svg'
import MongoIcon from '../../Icons/mongoicon.svg'
import HandlebarsIcon from '../../Icons/handlebars.svg'
import NodeIcon from '../../Icons/node.svg'
import BootstrapIcon from '../../Icons/bootstrap.svg'
import MaterialUiIcon from '../../Icons/materialui.svg'

const DeployedTag = ({ status }) => {
  return (
    <div className={classes.deployed}>{status}</div>
  )
}

const InProgressTag = ({ status }) => {
  return (
    <div className={classes.inProgress}>{status}</div>
  )
}

const Card = ({
  name,
  status,
  img, 
  site,
  github,
  desc, 
  stack, 
    }) => {
  
return (
  <>
  <div className={classes.cardWrapper}>
    <div className={classes.cardHeader}>
      <div className={classes.cardTitle}>
        {name}
      </div>
      <div>
      { status === 'deployed' ? 
          <DeployedTag status={status}/> : <InProgressTag status={status}/> 
      }
      </div>
    </div>
    <a href={github}>
    <div className={classes.cardMedia}>
      <img 
        style={{ margin: 0, padding: 0}} 
        src={img} 
        alt="project screenshot" 
      />
    </div>
    </a>
    <div className={classes.cardBody}> 
      <strong>Description:</strong> { desc }
    </div>
    <div className={classes.cardFoot}>
      <div>
        { github ? 
          <a 
            className={classes.buttons} 
            href={github}
            role="button"
            tabIndex="0"
          > 
            <div>View github</div> 
              <GitHubIcon fill="white" />
          </a> : null 
        }
      </div>
      <div>
        { site ? 
          <a 
            className={classes.buttons} 
            href={site}
            role="button"
            tabIndex="0"
          >
            <div>View deployed</div> <NetlifyIcon />
          </a> : null 
        }
      </div>
    </div>
    <div className={classes.stackBar}>
        <p className={classes.smallTitle}>Made with...</p>
        {
          stack.map((tech, i) => {
            switch(tech) {
              case 'gatsby': return <div className={classes.techIcon}><GatsbyIcon key={i} /></div>
              case 'graphql': return <div className={classes.techIcon}><GraphQLIcon key={i} /></div>
              case 'bulma': return <div className={classes.techIcon}><BulmaIcon key={i} /></div>
              case 'node': return <div className={classes.techIcon}><NodeIcon key={i} /></div>
              case 'mysql': return <div className={classes.techIcon}><MySQLIcon key={i} /></div>
              case 'mongo': return <div className={classes.techIcon}><MongoIcon key={i} /></div>
              case 'handlebars': return <div className={classes.techIcon}><HandlebarsIcon key={i} /></div>
              case 'bootstrap': return <div className={classes.techIcon}><BootstrapIcon key={i} /></div>
              case 'react': return <div className={classes.techIcon}><ReactIcon key={i} /></div>
              case 'material-ui': return <div className={classes.techIcon}><MaterialUiIcon key={i} /></div>
            }
          })
        }
      </div>
  </div>
  </>
  )
}

export default Card;