import React from 'react';
import Layout from '../components/layout'
import ContactForm from '../components/contact-form/contact-form'
import '../components/layout.css'

const ContactPage = () => {
  return (
  <>
  <Layout>
    <div>
      <h1 className="heading">
        contact me
      </h1>
    </div>
      <ContactForm />
  </Layout>
  </>
  )
}

export default ContactPage;