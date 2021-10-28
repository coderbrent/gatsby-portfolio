import React from "react"
import { Icon } from "@iconify/react"

export const DynamicStackIcon = ({ tech }) => {
  return (
    <IconStyling>
      <div
        css={{
          display: "flex",
          backgroundColor: "white",
          borderRadius: "50%",
          padding: "0.5rem",
          willChange: "transform",
          cursor: "pointer",
          transition: "transform ease 500ms",
          "&:hover": {
            transform: "translateY(-5px)",
          },
        }}
      >
        <Icon icon={`logos:${tech}`} height={"1rem"} width={"1rem"} />
      </div>
    </IconStyling>
  )
}

export const IconStyling = ({ url, children }) => {
  return (
    <a href={url} css={{ marginRight: `1rem`, marginTop: `.25rem` }}>
      {children}
    </a>
  )
}
