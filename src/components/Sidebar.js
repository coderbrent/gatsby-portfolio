/** @jsx jsx */
import { jsx } from '@emotion/react'
import React from "react"
import Button from "../components/Button"
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi"
import { FaStackOverflow, FaFilePdf } from "react-icons/fa"
import facepaint from 'facepaint';

const breakpoints = [576, 768, 992, 1200];

const mq = facepaint(
  breakpoints.map(bp => `@media (min-width: ${bp}px)`)
)

const Sidebar = props => {
  const { social } = props.data.site.siteMetadata

  return (
    <>
      <aside
        css={{
          display: 'flex',
          flexDirection: 'column',
          '@media (max-width: 720px)': {
            flexDirection: 'row',
            gap: '.5rem',
            order: -1,
        }, 
        }}
      >
        <Button
          target="_blank"
          rel="noopener noreferrer"
          aria-label="link to my github page"
          as="a"
          circular
          href={social.github}
          css={{'@media (max-width: 720px)': {
            
            }}
          }
        >
          <FiGithub />
        </Button>
        <Button
          target="_blank"
          rel="noopener noreferrer"
          aria-label="my linkedin page"
          circular
          as="a"
          href={social.linkedin}
        >
          <FiLinkedin />
        </Button>
        <Button
          target="_blank"
          rel="noopener noreferrer"
          aria-label="my twitter page"
          circular
          as="a"
          href={social.twitter}
        >
          <FiTwitter />
        </Button>
        <Button
          aria-label="send me an email"
          circular
          as="a"
          href={social.email}
        >
          <FiMail />
        </Button>
        <Button
          target="_blank"
          rel="noopener noreferrer"
          aria-label="link to my resume"
          circular
          as="a"
          href={social.resume}
        >
          <FaFilePdf />
        </Button>
        <Button
          target="_blank"
          rel="noopener noreferrer"
          aria-label="link to my stackoverflow page"
          circular
          as="a"
          href={social.stackoverflow}
        >
          <FaStackOverflow />
        </Button>
      </aside>
    </>
  )
}

export default Sidebar
