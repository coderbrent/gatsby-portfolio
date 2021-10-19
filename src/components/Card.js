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
            margin: "2rem 0rem",
            "@media (max-width: 576px)": {
              flexDirection: "column",
              padding: "2rem",
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
                alignItems: "center",
                justifyContent: "center",
                padding: 0,
                marginBottom: "1rem",
                "@media (max-width: 576px)": {
                  flexDirection: "column",
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
                  clipPath: "circle(25px at center)",
                  width: "10%",
                  "@media (max-width: 576px)": {
                    width: "100%",
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
                  alignItems: "center",
                  width: "100%",
                  "@media (max-width: 576px)": {
                    padding: "0rem 0rem",
                    margin: "1rem 0rem",
                    flexDirection: "column",
                    alignItems: "center",
                    order: -1,
                  },
                }}
              >
                <h3
                  name="project-title"
                  css={{
                    fontSize: `1.65rem`,
                    margin: 0,
                    "@media (max-width: 576px)": {
                      fontSize: "2.25rem",
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
                  css={{ padding: 0, marginTop: "12px" }}
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
                  fontSize: "1.1rem",
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
