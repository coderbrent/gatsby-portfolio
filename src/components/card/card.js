import React from 'react'
import cardStyles from '../card/card.module.css'

const Card = ({ name, date, img, site, github, desc, stack }) => {

return (
  <>
  <div className={cardStyles.cardGrid}>
  <a href={site} style={{ textDecoration: 'none '}}>
    <div className={cardStyles.card}>
      <div className={cardStyles.cardHeader} style={{ display: 'inline-flex'}}>
        <div className={cardStyles.cardTitle}
          style={{ 
          display: 'inline-flex'}}>
            {name}
        </div>
      </div>
      <div className={cardStyles.cardBody}> {desc} </div>
      <div className={cardStyles.cardFoot}> {stack} </div>
    </div>
  </a>
  </div>
    
  </>
  )
}

export default Card;