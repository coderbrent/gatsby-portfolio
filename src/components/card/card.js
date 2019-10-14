import React from 'react'
import '../card/card.css'

const Card = ({ name, date, img, site, github, desc, stack }) => {
  
return (
  <>
    <div className="card flipInX">
      <div className="card-header" style={{ display: 'inline-flex'}}>
        <div className="card-title"
          style={{ 
            display: 'inline-flex'}}>
              {name} { !stack ? null : <div style={{paddingLeft: 10}}>💻</div>}

        </div>
      </div>
      <div className="card-body"> {desc} </div>
    </div>
  </>
  )
}

export default Card;