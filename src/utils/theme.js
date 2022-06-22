import { useState, useEffect } from "react"
export const CUBIC_BEZIER_TRANSITION = "0.8s cubic-bezier(0.2, 0.8, 0.2, 1)"
export const EASE_IN_OUT_TRANSITION = "0.3s ease-in-out"
export const BACKGROUND_TRANSITION_TIME = "0.75s"
export const PRIMARY_COLOR = "violet"

export const useTheme = () => {
  const storedTheme =
    typeof window !== "undefined" && window.localStorage.getItem("theme")
  const [theme, setTheme] = useState(storedTheme || "light")
  const toggleTheme = () =>
    setTheme(prevTheme => {
      return prevTheme === "light" ? "dark" : "light"
    })

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", theme)
    }
  }, [theme])
  return [theme, toggleTheme]
}

export const getTheme = theme =>
  theme === "light"
    ? {
      background: "#FBFBFB",
      color: "#333",
      secondary: "violet",
      muted: "hsla(0, 0%, 0%, 0.6)",
      borderColor: "black",
      borderHoverColor: "transparent",
      primary: "black",
      other: "violet",
      highlight: "#C18CFF",
    }
    : {
      background: "#002e32",
      color: "#fff",
      secondary: "hsl(146, 68%, 66%)",
      muted: "hsla(0,0%,84.7%,.06)",
      mutedBackground: "hsla(0,0%,84.7%,.06)",
      borderColor: "#FFFFFF",
      borderHoverColor: "#fcae79",
      primary: "#fcae79",
      highlight: "#fcae79",
      other: "#fcae79",
    }
