import Typography from "typography"

const SYSTEM_FONT_STACK = [
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "Oxygen-Sans",
  "Ubuntu",
  "Cantarell",
  "Helvetica Neue",
  "sans-serif",
]

const typography = new Typography({
  title: "typography-theme-brent-portfolio",
  headerFontFamily: ["Roboto Slab", ...SYSTEM_FONT_STACK],
  bodyFontFamily: ["Varela Round", ...SYSTEM_FONT_STACK],
  baseLineHeight: 1.65,
  scaleRatio: 3,
  headerWeight: 500,
  baseFontSize: 16,
  overrideStyles: ({ adjustFontSizeTo, rhythm }) => ({
    blockquote: {
      ...adjustFontSizeTo("22px"),
      color: "hsl(0,0%,0%,0.7)",
      fontFamily: ["Trocchi", ...SYSTEM_FONT_STACK].join(),
      fontStyle: "italic",
      paddingLeft: rhythm(13 / 16),
      marginLeft: rhythm(-1),
      borderLeft: `${rhythm(2 / 16)} solid hsl(0,0%,0%,0.7)`,
    },
  }),
})

if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography

export const { rhythm, scale } = typography
