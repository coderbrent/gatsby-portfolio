import React from 'react'
import classes from '../card/card.module.css'
import GitHubIcon from '../../Icons/github.svg'
import CodeIcon from '../../Icons/deployed.svg'
import HerokuIcon from '../../Icons/heroku.svg'

const Card = ({
  name, 
  img, 
  site,
  github, 
  desc, 
  stack, 
  features }) => {
  
return (
  <>
  <div className={classes.cardWrapper}>
    <div className={classes.cardMedia}>
      <img style={{ margin: 0, padding: 0}} src={img} />
    </div>
    <div className={classes.cardHeader}>
      <div className={classes.cardTitle}>
        {name}
      </div>
      
      </div>
    <div className={classes.cardBody}> 
      {desc} 
    </div>
    <div className={classes.cardFoot}> 
      <li className={classes.footRow}>
        Features: {features}
      </li>
    </div>
  </div>
  </>
  )
}

export default Card;