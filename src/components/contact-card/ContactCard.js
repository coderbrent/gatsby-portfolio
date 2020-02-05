import React from 'react';
import classes from '../contact-card/ContactCard.module.css'
import PhoneIcon from '../../Icons/smartphone.svg'
import ResumeIcon from '../../Icons/resume.svg'
import MailIcon from '../../Icons/email.svg'

const ContactCard = () => {
  return (
  <>
    <div className={classes.contactCard}>
      <ul className={classes.iconBar}>
        <li>
          <a href="mailto:brent.abruzese@gmail.com">
            <MailIcon
              className={classes.icon} 
              fill="#290045" 
              width="25pt" 
              height="25pt"
            />
          </a>
        </li>
        <li>
          <a href="tel:848-213-8522">
            <PhoneIcon
              className={classes.icon} 
              fill="#290045" 
              width="25pt" 
              height="25pt"
            />
          </a>
        </li>
        <li>
          <a href="">
            <ResumeIcon 
              className={classes.icon} 
              fill="#290045" 
              width="25pt" 
              height="25pt"
            />
          </a>
        </li>
      </ul>
    </div>
  </>
  )
}

export default ContactCard;