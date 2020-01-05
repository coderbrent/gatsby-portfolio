import React from 'react';
import fcStyles from '../fact-card/FactCard.module.css'
import PhoneIcon from '../../Icons/smartphone.svg'
import ResumeIcon from '../../Icons/resume.svg'
import MailIcon from '../../Icons/email.svg'

const FactCard = () => {
  
  return (
  <>
    <div className={fcStyles.factCard}>
      <p className={fcStyles.factBodyHeader}>
        Jr. Web Developer..
      </p>
      <p className={fcStyles.factBodySubHeader}>Actively Seeking Employment!</p>
        <ul>
          <li className={fcStyles.check}>
            <MailIcon /><a href="mailto:brent.abruzese@gmail.com">brent.abruzese@gmail.com</a>
          </li>
          <li className={fcStyles.check}>
            <PhoneIcon /><a href="tel:(848) 213-2522">(848) 213-2522</a>
          </li>
          <li className={fcStyles.check}>
            <ResumeIcon /><a href="https://drive.google.com/file/d/1vTyshLQd8q_okMf9lJZrTVF6_oFaPQZS/view?usp=sharing">Download my resume!</a>
          </li>
          <li className={fcStyles.skills}>
            <strong style={{ fontSize: 'larger'}}>...Proficient in...</strong> 
              <ul>
                <li>
                 <strong>Front End</strong> - JavaScript (ES5/ES6 +), React (Hooks/Context/Redux/SSGs/SSR), Webpack, Babel, Handlebars, pug
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