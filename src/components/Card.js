import React, { useContext } from "react"
import { FaGithub, FaGlobe } from "react-icons/fa"
import ThemeContext from "../context/ThemeContext"
import { getTheme } from "../utils/theme"
import Button from "./Button"

export const Card = ({ name, desc, stack, github, site }) => {
  const { theme } = useContext(ThemeContext)
  const { color, primary } = getTheme(theme)

  return (
    <>
      <div name="container">
        <div
          name="card"
          css={{
            display: "flex",
            flexDirection: "row",
            paddingBottom: "1rem",
            margin: "1rem 0rem",
            "@media (max-width: 576px)": {
              display: "block",
              flexDirection: "column",
            },
          }}
        >
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
                // margin: "0 auto",
                // width: "100%",
              }}
            >
              <div css={{ textAlign: "justify", padding: "0rem .5rem" }}>
                {desc}
              </div>
            </div>
            <div
              css={{
                display: "flex",
                margin: "0rem 0.5rem",
                padding: "1rem 0rem",
                gap: "1rem",
              }}
            >
              {github ? (
                <a
                  css={{
                    textDecoration: "none",
                    color: primary,
                    fontSize: "smaller",
                  }}
                  href={github}
                >
                  <Button>
                    <div
                      css={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <FaGithub color={primary} />
                      See it on GitHub
                    </div>
                  </Button>
                </a>
              ) : null}
              {site ? (
                <a
                  css={{
                    textDecoration: "none",
                    color: primary,
                    fontSize: "smaller",
                  }}
                  href={site}
                >
                  <Button>
                    <div
                      css={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                      }}
                    >
                      <FaGlobe color={primary} />
                      See it in action
                    </div>
                  </Button>
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
