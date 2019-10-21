import React from 'react'
import cardStyles from '../card/card.module.css'
import CodeOnlyIcon from '../../Icons/code.svg'
import DeployedIcon from '../../Icons/deployed.svg'

const Card = ({ name, date, img, site, github, desc, stack }) => {
  
return (
  <>
    <div className={cardStyles.cardWrapper}>
      <a href={site} style={{ textDecoration: 'none '}}>
        <div className={cardStyles.cardHeader}>
          <div className={cardStyles.cardTitle}>
            {name}
          </div>
            <div>
              <a href={github}
                target="_blank"
              >
                <CodeOnlyIcon 
                  className={cardStyles.cardTitleDeployLink} 
                  />
              </a> &nbsp;
              <a href={site}
                target="_blank"
              >
                <DeployedIcon 
                  className={cardStyles.cardTitleCodeLink} 
                  />
              </a>
            </div>
        </div>
          <div className={cardStyles.cardBody}> {desc} </div>
      </a>
    </div>
  </>
  )
}

export default Card;