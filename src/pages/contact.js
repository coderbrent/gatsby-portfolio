import React from 'react';
import Layout from '../components/layout'
import Icon from '../Icons/twitter.svg'


const ContactPage = () => {
  return (
  <>
  <Layout>
    <div>
      <h1 className="heading">Contact me</h1>
      <a 
        href="https://www.twitter.com/brenta1283"
        >
        <Icon width="3%" viewBox="0 0 1000 1000" />
        twitter
      </a>
    </div>
  </Layout>
  </>
  )
}

export default ContactPage;