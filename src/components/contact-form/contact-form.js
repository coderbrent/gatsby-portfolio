import React from 'react'
import classes from '../contact-form/contact-form.module.css'

const ContactForm = () => {

  return (
  <>
  <div className={classes.container}>
    <form  
      className={classes.contactFormWrapper}
      method="post"
      name="contact" 
      netlify-honeypot="bot-field"
      data-netlify="true"
    > 
    <input type="hidden" name="bot-field" />

      <div className="fieldset">
        <div className={classes.formRow}>
          <label htmlFor="name">
            Name
          </label>
          <input autoFocus
            className={classes.formInput}
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            required={true}
            aria-required="true"
            />
        </div>

        <div className={classes.formRow}>
          <label htmlFor="email">
            Email
            </label>
          <input className={classes.formInput}
            id="email"
            type="email" 
            name="email"
            placeholder="youremail@email.com"
            required={true}
            aria-required="true"
            />
        </div>
        <div className={classes.formRow}>
          <label htmlFor="message">
            Message
          </label>
          <textarea className={classes.formInputMessage}
            type="text"
            id="message"
            name="message"
            placeholder="Your message here"
            required={true}
            aria-required="true"
            />
          
        </div>
        <div className={classes.buttonRow}>
          <button
            className={classes.submitButton}
            type="submit"
            value="send"
            >
            send
          </button>
        </div>
        </div>
      </form>
    </div>
  </>

  )
}

export default ContactForm