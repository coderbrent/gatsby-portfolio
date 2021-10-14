import React from "react"
import { Icon } from "@iconify/react"

export const DynamicStackIcon = ({ tech, color }) => {
  return (
    <IconStyling>
      <Icon
        color={color ? color : null}
        icon={`logos:${tech}`}
        height={"1.25rem"}
        width={"1.25rem"}
      />
    </IconStyling>
  )
}

export const IconStyling = ({ url, children }) => {
  return (
    <a href={url} css={{ margin: `0rem 0.5rem` }}>
      {children}
    </a>
  )
}
