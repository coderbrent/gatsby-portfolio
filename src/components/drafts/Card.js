import React from "react"
import { css } from "@emotion/react"

export default function Card({ username, email, catchPhrase, name }) {
  return (
    <div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          text-align: center;
          background-color: black;
          font-family: Helvetica;
          width: 260px;
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
            0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
            0 8px 8px hsl(0deg 0% 0% / 0.075),
            0 16px 16px hsl(0deg 0% 0% / 0.075);
        `}
      >
        <div
          css={css`
            align-self: center;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #ca3e47;
            width: 96px;
            height: 96px;
            border-radius: 50%;
          `}
        >
          <h1
            css={css`
              color: white;
              font-size: 4rem;
              font-weight: bolder;
            `}
          >
            {username.split("").pop()}
          </h1>
        </div>

        <div
          css={css`
            color: darkgrey;
            font-variant: all-small-caps;
            font-weight: bolder;
            padding: 0.5rem 0.25rem;
          `}
        >
          {email}
        </div>
        <p
          css={css`
            font-family: cochin;
            color: white;
            text-align: center;
          `}
        >
          "{catchPhrase}"
        </p>
        <button
          css={css`
            background-color: #ca3e47;
            font-weight: bolder;
            color: white;
            border: none;
            border-radius: 5pt;
            padding: 0.5rem 1.5rem;
          `}
        >
          Learn more
        </button>
      </div>
    </div>
  )
}
