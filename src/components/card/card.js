import React from 'react'
import cardStyles from '../card/card.module.css'
import CodeOnlyIcon from '../../Icons/code.svg'
import DeployedIcon from '../../Icons/deployed.svg'

const Card = ({ name, date, img, site, github, desc, stack, features }) => {
  
return (
  <>
    <div className={cardStyles.cardWrapper}>
      <div className={cardStyles.cardHeader}>
        <div className={cardStyles.cardTitle}>
          {name}
        </div>
          <div>
            <a href={github}
              target="_blank" rel="noopener noreferrer"
            >
              <CodeOnlyIcon 
                className={cardStyles.cardTitleDeployLink} 
                />
            </a> &nbsp;
            <a href={site}
              target="_blank" rel="noopener noreferrer"
            >
              <DeployedIcon 
                className={cardStyles.cardTitleCodeLink} 
                />
            </a>
          </div>
        </div>
          <div className={cardStyles.cardBody}> {desc} </div>
    </div>
  </>
  )
}

export default Card;