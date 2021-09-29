import React, { useContext } from "react"
import ThemeContext from "../context/ThemeContext"
import { getTheme } from "../utils/theme"

export const Card = ({ name, img, desc, stack, github, site }) => {
  const { theme } = useContext(ThemeContext)
  const { color, primary, other } = getTheme(theme)

  return (
    <>
      <div name="container">
        <div
          name="card"
          css={{
            display: "flex",
            flexDirection: "row",
            paddingBottom: "1rem",
            margin: "1.75rem 0rem",
            "@media (max-width: 576px)": {
              display: "block",
              flexDirection: "column",
              margin: "2rem 0rem",
            },
          }}
        >
          <img
            loading="lazy"
            css={{
              maxWidth: "250px",
              height: "auto",
              marginBottom: ".5rem",
              "@media (max-width: 576px)": {
                maxWidth: "100%",
              },
            }}
            src={img}
          />
          <div
            name="body"
            css={{
              padding: "0rem .5rem",
              "@media (max-width: 576px)": {
                padding: "0rem 0rem",
              },
            }}
          >
            <div
              css={{
                display: `flex`,
                alignItems: `center`,
                flexWrap: "nowrap",
                "@media (max-width: 576px)": {
                  display: "block",
                },
              }}
            >
              <h3
                css={{
                  fontSize: `1.5rem`,
                  marginBottom: ".5rem",
                  padding: ".5rem",
                }}
              >
                <a
                  href={site}
                  css={{
                    color: primary,
                    fontFamily: `Roboto Slab`,
                  }}
                >
                  {name}
                </a>
              </h3>
              <div>{stack}</div>
            </div>
            <div
              css={{
                color,
                width: "75%",
              }}
            >
              <div css={{ textAlign: "justify" }}>{desc}</div>
            </div>
            <a
              href={github}
              css={{
                color: other,
                textDecoration: `none`,
                "&:hover": { color: other },
              }}
            >
              {`</code>`}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
