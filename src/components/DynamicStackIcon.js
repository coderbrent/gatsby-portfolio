import React from "react"
import { Icon } from "@iconify/react"

export const DynamicStackIcon = ({ tech, color }) => {
  return (
    <IconStyling>
      <Icon
        color={color ? color : null}
        icon={`logos:${tech}`}
        height={"1.5rem"}
        width={"1.5rem"}
      />
    </IconStyling>
  )
}

export const IconStyling = ({ url, children }) => {
  return (
    <a href={url} css={{ margin: `0rem 0.75rem` }}>
      {children}
    </a>
  )
}
