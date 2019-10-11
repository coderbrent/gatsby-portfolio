import React from 'react'
import '../card/card.css'

const Card = ({ name, date, img, site, github, desc }) => (
  <>
  <div className="card">
    <div className="card-header" style={{ display: 'inline-flex'}}>
      <div className="card-title"> {name} </div> 
    </div>
      <div className="card-body"> {desc} </div>
    </div>
  </>
)

export default Card;