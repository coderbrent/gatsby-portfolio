import React from 'react'
import '../card/card.css'

const Card = ({ name, date, img, site, github, desc, stack }) => {
  //TODO: Conditionally render 'stack' icons based on tech used in a project
  //... a cool feature would be to iterate over the description and search for
  //the specific entry 

  const readDesc = (proj) => {
    const myProject = proj;

    myProject.forEach()
  }


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