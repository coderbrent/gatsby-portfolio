import React from 'react'
import classes from '../card/card.module.css'
import GitHubIcon from '../../Icons/github.svg'
import HttpIcon from '../../Icons/http.svg'

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
      <img style={{ margin: 0, padding: 0}} src={img} />
    </div>
    <div className={classes.cardBody}> 
      {desc} 
    </div>
    <div className={classes.cardFoot}>
      <div className={classes.cardFootChildren}>{ github ? <a style={{ color: `black`, fontSize: `1.75em`}} href={github}>view github: <GitHubIcon /></a> : null }</div>
      <div className={classes.cardFootChildren}>{ site ? <a style={{ color: `black`, fontSize: `1.75em`}} href={site}>view deployed: <HttpIcon /></a> : null }</div>
    </div>
  </div>
  </>
  )
}

export default Card;