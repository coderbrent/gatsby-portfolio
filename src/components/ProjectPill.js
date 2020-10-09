//NOT IN PRODUCTION - This will replace SVG icons for tech in project cards.

import React from 'react';
import { CUBIC_BEZIER_TRANSITION, getTheme } from '../utils/theme';

const ProjectPill = ({ tech, url }) => {
  const { color, background, primary, secondary, muted, borderColor } = getTheme();
  
  return (
    <>
    <a 
      href={url}
      css={{
        margin: `0rem .5rem`,
        textDecoration: 'none'
      }}
    >
    <div 
      css={{
        display: 'flex',
        color,
        fontSize: 'small',
        backgroundColor: secondary,
        borderRadius: '20pt',
        width: 'fit-content',
        padding: '.15rem .65rem',
        height: '25px'
      }}
    >
      {tech}
    </div>
    </a>
    </>
  )
}

export default ProjectPill;