import React, { useState } from 'react'
import contactFormStyles from '../contact-form/contact-form.module.css'

const ContactForm = () => {

  return (
  <>
    <form method="post" 
      className={contactFormStyles.contactFormWrapper} 
      name="contact" 
      netlify-honeypot="bot-field"
      data-netlify="true"
      >
      <input type="hidden" name="bot-field" />

        <legend>Contact Me!</legend>
        <div className={contactFormStyles.formRow}>
          <label htmlFor="name">
            Name 
          <input autoFocus
            className={contactFormStyles.input}
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            required={true}
            aria-required="true"
            />
          </label>
        </div>

        <div className={contactFormStyles.formRow}>
          <label htmlFor="email">
            Email 
          <input className={contactFormStyles.input}
            id="email"
            type="email" 
            name="email"
            placeholder="youremail@email.com"
            required={true}
            aria-required="true"
            />
          </label>
        </div>
        <div className={contactFormStyles.formRow}>
          <label htmlFor="message">
            Message 
          <input className={contactFormStyles.input}
            type="text"
            id="message"
            name="message"
            placeholder="Your message here"
            required={true}
            aria-required="true"
            />
          </label>
        </div>
        <button
          className={contactFormStyles.submitButton}
          type="submit"
          value="send"
          >
          send
        </button>
    </form>
  </>

  )
}

export default ContactForm