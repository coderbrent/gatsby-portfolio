import React from 'react';
import Layout from '../components/layout'
import ContactForm from '../components/contact-form/contact-form'

const ContactPage = () => {
  return (
  <>
  <Layout>
    <div>
      <h1 className="heading">Contact me</h1>
    </div>
      <ContactForm />
  </Layout>
  </>
  )
}

export default ContactPage;