import React from 'react'
import classes from '../card/card.module.css'
import GitHubIcon from '../../Icons/github.svg'
import CodeIcon from '../../Icons/deployed.svg'

const Card = ({ 
  name, 
  date, 
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
      <li style={{ fill: 'black'}}>
      <a 
        href={github} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <GitHubIcon 
          className={classes.cardTitleCodeLink}
        />
      </a>
        </li>
        <li style={{ fill: 'black'}}>
        <CodeIcon
          className={classes.cardTitleCodeLink}
        />
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer"
          >
          </a>
        </li>
      </div>
    <div className={classes.cardBody}> 
      {desc} 
    </div>
    <div className={classes.cardFoot}> 
      <li className={classes.footRow}>
        Features: {features}
        Photos: {img}
      </li>
    </div>
  </div>
  </>
  )
}

export default Card;