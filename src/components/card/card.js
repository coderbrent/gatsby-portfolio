import React from 'react'
import classes from '../card/card.module.css'
import GitHubIcon from '../../Icons/github.svg'
import HerokuIcon from '../../Icons/heroku.svg'

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
  features }) => {
  
return (
  <>
  <div className={classes.cardWrapper}>
    <div className={classes.cardHeader}>
      <div className={classes.cardTitle}>
        {name}
      </div>
      <div>
      { status === 'deployed' ? <DeployedTag status={status}/> : <InProgressTag status={status}/> }
      </div>
    </div>
    <div className={classes.cardMedia}>
      <img style={{ margin: 0, padding: 0}} src={img} alt="project screenshot" />
    </div>
    <div className={classes.cardBody}> 
      {desc} 
    </div>
    <div className={classes.cardFoot}>
      <div className={classes.cardFootChildren}>
        { github ? <a className={classes.footerLinks} href={github}> View github: <GitHubIcon fill="rgb(115, 0, 115)" /></a> : null }
      </div>
      <div className={classes.cardFootChildren}>
        { site ? <a className={classes.footerLinks} href={site}>View deployed: <HerokuIcon /></a> : 'work in progress!' }
      </div>
    </div>
  </div>
  </>
  )
}

export default Card;