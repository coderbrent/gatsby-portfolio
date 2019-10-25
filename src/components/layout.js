import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import ThemeContext from '../context/ThemeContext'
import Header from '../components/header/header'
import './layout.css'
import Menu from '../components/menu/menu'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}

    render={data => (
      <ThemeContext.Consumer>
        {theme => (
          <div className={theme.dark ? 'dark' : 'light'}>
            <Header siteTitle={data.site.siteMetadata.title} />
            <div
              style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0px 1.0875rem 1.45rem`,
                paddingTop: 0,
              }}
            >
              <Menu />
              <main>{children}</main>
              <footer>
                <small> Copyright 2019, Brent Abruzese </small>
              </footer>
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
