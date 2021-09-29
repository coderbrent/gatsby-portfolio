import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import ThemeProvider from "../context/ThemeProvider"

const NotFoundPage = () => (
  <ThemeProvider>
    <Layout>
      <SEO title="404: Not found" />
      <h1 className="heading">Ruh roh...</h1>
      <p>That page could not be found!</p>
      <Link to="/">Head back home!</Link>
    </Layout>
  </ThemeProvider>
)

export default NotFoundPage
