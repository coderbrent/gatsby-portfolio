import React from 'react';
import { node } from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './header/header';
import ThemeProvider from '../context/ThemeProvider';
import Sidebar from '../components/Sidebar';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          social {
            email
            github
            linkedin
            resume
            stackoverflow
            twitter
          }
        }
      }
    }
  `)

  return (
    <>
    <ThemeProvider>
      <div 
        id="layout-container"
        css={{
          minHeight: '100vh',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          maxWidth: 860,
          flexWrap: 'wrap',
          margin: '5rem auto',
          '@media (max-width: 576px)': {
            margin: '0rem 1rem',
        }
        }}
      >
      <Header siteTitle={data.site.siteMetadata.title} />
      <div 
        css={{
          display: 'flex',
          width: '100%',
          flexWrap: 'nowrap',
          alignItems: 'flex-start',
          justifyContent: 'space-evenly',
          '@media (max-width: 720px)': {
            flexWrap: 'wrap',
        }
        }}
      >
        <main css={{ margin: '1rem auto' }}>
          { children }
        </main>
        <Sidebar data={data} />
      </div>
      </div>
      
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: node.isRequired,
}

export default Layout