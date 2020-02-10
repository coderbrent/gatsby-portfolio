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
          <a href="https://docs.google.com/document/d/e/2PACX-1vQirxbJ7XFC9mp5Wsrrd2xmviCq8sjI_MaXlodgmYoz82ECxXOvfRo6-B9j0isbOjcKkbXPy3yPrFb3/pub">
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