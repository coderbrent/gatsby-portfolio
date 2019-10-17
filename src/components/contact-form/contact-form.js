import React from 'react'
import contactFormStyles from '../contact-form/contact-form.module.css'

const ContactForm = () => (
  <>
    <form method="post" 
      className={contactFormStyles.contactFormWrapper} 
      name="contact" 
      netlify-honeypot="bot-field" 
      data-netlify="true"
      >
      <input type="hidden" name="bot-field" />
      <p>
        <legend>Contact Me!</legend>
        <label htmlFor="name">
          Name 
        <input autoFocus
          id="name"
          type="text" 
          name="name" 
          placeholder="Your Name"
          required={true}
          aria-required="true"
          />
        </label>
      </p>
      <p>
        <label htmlFor="email">
          Email 
        <input
          id="email"
          type="email" 
          name="email" 
          placeholder="youremail@email.com"
          required={true}
          aria-required="true"
          />
        </label>
      </p>
      <p>
        <label htmlFor="message">
          Message 
        <textarea
          className="cust-textarea"
          id="message"
          rows="5"
          name="message" 
          placeholder="Your message here"
          required={true}
          aria-required="true"
          />
        </label>
      </p>
      <p>
        <button
          className={contactFormStyles.submitButton}
          type="submit"
          value="send"
          >
          send
        </button>
      </p>  
    </form>
  </>

)

export default ContactForm