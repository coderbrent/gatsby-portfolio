import React from 'react'
import '../card/card.css'

const Card = ({ name, date, img, site, github, desc, stack }) => {
  //TODO: Conditionally render 'stack' icons based on tech used in a project
  //... a cool feature would be to iterate over the description and search for
  //the specific entry 

return (
  <>
    <div className="card flipInX">
      <div className="card-header" style={{ display: 'inline-flex'}}>
        <div className="card-title"
          style={{ 
            display: 'inline-flex'}}>
              {name}
        </div>
        
      </div>
      <div className="card-body"> {desc} </div>
    </div>
    
  </>
  )
}

export default Card;