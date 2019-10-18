import React from 'react'
import cardStyles from '../card/card.module.css'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

const Card = ({ name, date, img, site, github, desc, stack }) => {

return (
  <>
    <div className={cardStyles.card}>
      <a href={site} style={{ textDecoration: 'none '}}>
        <div className={cardStyles.cardHeader} style={{ display: 'inline-flex'}}>
          <div className={cardStyles.cardTitle}>
            {name}
          </div>
        </div>
          <div className={cardStyles.cardBody}> {desc} </div>
          <img src={img} className={cardStyles.cardImg}/>
      </a>
    </div>
  </>
  )
}


export default Card;