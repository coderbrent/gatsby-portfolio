import React from 'react';
import classes from '../fact-card/FactCard.module.css'
import PhoneIcon from '../../Icons/smartphone.svg'
import ResumeIcon from '../../Icons/resume.svg'
import MailIcon from '../../Icons/email.svg'

const FactCard = () => {
  
  return (
  <>
    <div className={classes.factCard}>
      <p className={classes.cardHeader}>
        Jr. Web Developer..
      </p>
      <p className={classes.cardSubHeader}>Actively Seeking Employment!</p>
        <ul>
          <li className={classes.check}>
            <MailIcon /><a className={classes.factCardLinks} href="mailto:brent.abruzese@gmail.com">Send Me An Email!</a>
          </li>
          <li className={classes.check}>
            <PhoneIcon /><a className={classes.factCardLinks} href="tel:(848) 213-2522">Call Me!</a>
          </li>
          <li className={classes.check}>
            <ResumeIcon /><a className={classes.factCardLinks} href="https://docs.google.com/document/d/1nbpzVuxNffmlNrJGpAatrPDubQuhunZQfuU6kzAx0kc/edit?usp=sharing">Download my resume!</a>
          </li>
          <li className={classes.skills}>
            <strong style={{ fontSize: 'larger'}}>Proficient in...</strong> 
              <ul>
                <li>
                 <strong>Front End</strong> - JavaScript (ES6), React (Hooks/Context/Redux/SSGs/SSR), Webpack, Babel, Handlebars, jQuery, HTML, CSS, GraphQL...
                </li>
                <li>
                  <strong>Back End</strong> - Node.js, MySQL(Data Structures/Sequelize), Mongo(Mongoose/CloudAtlas), Firebase, Express.js
                </li>
              </ul>
          </li>
        </ul>
    </div>
  </>
)
  }

export default FactCard;