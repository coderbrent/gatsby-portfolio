import React from 'react'
import contactFormStyles from '../contact-form/contact-form.module.css'

const ContactForm = () => {

  return (
  <>
  <div className={contactFormStyles.container}>
    <form  
      className={contactFormStyles.contactFormWrapper}
      method="post"
      name="contact" 
      netlify-honeypot="bot-field"
      data-netlify="true"
      > <input type="hidden" name="bot-field" />

      <div className="fieldset">
        <div className={contactFormStyles.formRow}>
          <label htmlFor="name">
            Name
          </label>
          <input autoFocus
            className={contactFormStyles.formInput}
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            required={true}
            aria-required="true"
            />
        </div>

        <div className={contactFormStyles.formRow}>
          <label htmlFor="email">
            Email
            </label>
          <input className={contactFormStyles.formInput}
            id="email"
            type="email" 
            name="email"
            placeholder="youremail@email.com"
            required={true}
            aria-required="true"
            />
        </div>
        <div className={contactFormStyles.formRow}>
          <label htmlFor="message">
            Message
          </label>
          <textarea className={contactFormStyles.formInputMessage}
            type="text"
            id="message"
            name="message"
            placeholder="Your message here"
            required={true}
            aria-required="true"
            />
          
        </div>
        <div className={contactFormStyles.buttonRow}>
          <button
            className={contactFormStyles.submitButton}
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