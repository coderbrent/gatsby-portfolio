import React from 'react'
import '../card/card.css'

const Card = ({ name, date, img, site, github, desc }) => (
  <>
    <div className="card-header" style={{ display: 'inline-flex'}}>
      <div className="card-title"> {name} </div> 
    </div>
      <div className="card-body"> {desc} </div>
  </>
)

export default Card;