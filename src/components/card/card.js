import React from 'react'
import cardStyles from '../card/card.module.css'
import CodeOnlyIcon from '../../Icons/code.svg'
import DeployedIcon from '../../Icons/deployed.svg'
import GitHubIcon from '../../Icons/github.svg'
import WebIcon from '../../Icons/internet.svg'

const Card = ({ name, date, img, site, github, desc, stack, features }) => {
  
return (
  <>
    <div className={cardStyles.cardWrapper}>
      <div className={cardStyles.cardHeader}>
        <div className={cardStyles.cardTitle}>
          {name}
        </div>
          <div style={{ color: 'white'}}>{date}</div>
        </div>
          <div className={cardStyles.cardBody}> {desc} </div>
          <div className={cardStyles.cardFoot}> 
            <li className={cardStyles.footRow}>
              <GitHubIcon className={cardStyles.cardTitleCodeLink}/> 
                <a href={github} target="_blank" rel="noopener noreferrer"> View the source on GitHub!</a>
            </li>
            <li className={cardStyles.footRow}>
              <WebIcon className={cardStyles.cardTitleCodeLink}/> 
                <a href={site} target="_blank" rel="noopener noreferrer"> Visit the deployed project!</a>
            </li>
          </div>
    </div>
  </>
  )
}

export default Card;