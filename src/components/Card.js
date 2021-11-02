import React, { useContext } from "react"
import { FaGithub, FaGlobe } from "react-icons/fa"
import ThemeContext from "../context/ThemeContext"
import { getTheme } from "../utils/theme"
import Button from "./Button"

export const Card = ({ name, desc, stack, github, site, img }) => {
  const { theme } = useContext(ThemeContext)
  const { color, primary } = getTheme(theme)

  return (
    <>
      <div name="container">
        <div
          name="card"
          css={{
            display: "flex",
            marginBottom: "2rem 0rem",
            "@media (max-width: 576px)": {
              flexDirection: "column",
              padding: "2rem",
            },
          }}
        >
          <div
            name="body"
            css={{
              "@media (max-width: 576px)": {
                padding: "0rem 0rem",
              },
            }}
          >
            <div
              css={{
                display: `flex`,
                alignItems: "center",
                padding: 0,
                marginBottom: "1rem",
                "@media (max-width: 576px)": {
                  padding: ".5rem",
                  order: 0,
                },
              }}
            >
              <div
                name="project-image-container"
                css={{
                  margin: 0,
                  padding: 0,
                  right: 1,
                  top: 5,
                  position: "relative",
                  clipPath: "circle(35px at center)",
                  width: "15%",
                  "@media (max-width: 576px)": {
                    order: -1,
                    width: "40%",
                    clipPath: "none",
                    position: "static",
                  },
                }}
              >
                <img
                  alt="a project thumbnail"
                  css={{
                    margin: "0rem",
                  }}
                  src={img}
                />
              </div>
              <div
                css={{
                  display: "flex",
                  alignItems: "flex-start",
                  width: "100%",
                  flexDirection: "column",
                  gap: ".5rem",
                  "@media (max-width: 576px)": {
                    padding: "0rem 0rem",
                    flexDirection: "column",
                    alignItems: "center",
                  },
                }}
              >
                <h3
                  name="project-title"
                  css={{
                    margin: 0,
                    "@media (max-width: 576px)": {
                      marginBottom: "1rem",
                      textAlign: "center",
                    },
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
                <div
                  css={{
                    display: "flex",
                    padding: 0,
                  }}
                  name="project-stack"
                >
                  {stack}
                </div>
              </div>
            </div>
            <div
              css={{
                color,
                margin: "0 auto",
              }}
            >
              <div
                css={{
                  fontSize: "1rem",
                  textAlign: "justify",
                  padding: "0rem .5rem",
                }}
              >
                {desc}
              </div>
            </div>
            <div
              css={{
                display: "flex",
                margin: "0rem 0.5rem",
                padding: "1rem 0rem",
                gap: "1rem",
                width: "100%",
              }}
            >
              {github ? (
                <span css={{ flexGrow: 1, flexShrink: 1 }}>
                  <a
                    css={{
                      textDecoration: "none",
                      color: primary,
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
                        <span
                          css={{
                            paddingLeft: "5px",
                            fontVariantCaps: "all-petite-caps",
                          }}
                        >
                          See it on GitHub
                        </span>
                      </div>
                    </Button>
                  </a>
                </span>
              ) : null}
              {site ? (
                <span css={{ flexGrow: 10, flexShrink: 5 }}>
                  <a
                    css={{
                      textDecoration: "none",
                      color: primary,
                    }}
                    href={site}
                  >
                    <Button>
                      <div
                        css={{
                          display: "flex",
                          alignItems: "center",
                          width: "100%",
                        }}
                      >
                        <FaGlobe color={primary} />
                        <span
                          css={{
                            fontVariantCaps: "all-small-caps",
                            paddingLeft: "5px",
                          }}
                        >
                          See it in action
                        </span>
                      </div>
                    </Button>
                  </a>
                </span>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
