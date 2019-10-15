import React from 'react'
import '../card/card.css'
import GitHubIcon from '../../Icons/github-logo.svg'

const Card = ({ name, date, img, site, github, desc, stack }) => {

return (
  <>
  <a href={site} style={{ textDecoration: 'none '}}>
    <div className="card flipInX">
      <div className="card-header" style={{ display: 'inline-flex'}}>
        <div className="card-title"
          style={{ 
          display: 'inline-flex'}}>
            {name}
        </div>
          <div style={{display: 'inline'}}>

          </div>
      </div>
      <div className="card-body"> {desc} </div>
      {console.log()}
    </div>
    </a>
    
  </>
  )
}

export default Card;