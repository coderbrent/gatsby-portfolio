import React, { useContext } from "react"
import { FaGithub, FaGlobe } from "react-icons/fa"
import ThemeContext from "../context/ThemeContext"
import { getTheme } from "../utils/theme"
import Button from "./Button"

export const Card = ({ name, desc, stack, github, site, img }) => {
  const { theme } = useContext(ThemeContext)
  const { color, primary, mutedBackground } = getTheme(theme)

  return (
    <>
      <div name="container">
        <div
          name="card"
          css={{
            display: "flex",
            marginBottom: "2rem 0rem",
            minWidth: '360px',
            // border: `solid 1px ${color}`,
            backgroundColor: mutedBackground,
            borderRadius: '9pt',
            // "@media (max-width: 576px)": {
            //   flexDirection: "column",
            // },
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
                alignItems: "center",
                padding: 0,
                marginBottom: "1rem",
                "@media (max-width: 576px)": {
                  order: 0,
                },
              }}
            >
              <div
                name="project-image-container"
                css={{
                  margin: 0,
                  padding: 0,
                  width: "100%",
                }}
              >
                <img
                  alt="a project thumbnail"
                  css={{
                    borderTopRightRadius: '9pt',
                    borderTopLeftRadius: '9pt',
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
                  gap: ".3rem",
                  paddingLeft: '1.2rem',
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
                      fontFamily: `varela round`,
                    }}
                  >
                    {name}
                  </a>
                </h3>
                <div
                  css={{
                    display: "flex",
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
                margin: "0 10px",
              }}
            >
              <div
                css={{
                  fontSize: "1rem",
                  textAlign: "justify",
                  padding: "1rem .5rem",
                }}
              >
                {desc}
              </div>
            </div>
            <div
              css={{
                display: "flex",
                padding: "1rem 0rem",
                justifyContent: 'space-around'
              }}
            >
              {github ? (
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
              ) : null}
              {site ? (
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
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
