import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1 className="heading">Ruh roh...</h1>
      <p>What you gon' do, when the 404 come lookin' fo you?</p>
        <Link to="/">Head back home!</Link>
  </Layout>
)

export default NotFoundPage
