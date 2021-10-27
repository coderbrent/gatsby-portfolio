import React from "react"

export default function Card({ width }) {
  return (
    <div>
      <div
        css={css`
          text-align: center;
          background-color: black;
          font-family: Helvetica;
          width: ${width}px;
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
            0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
            0 8px 8px hsl(0deg 0% 0% / 0.075),
            0 16px 16px hsl(0deg 0% 0% / 0.075);
        `}
      >
        <h1
          css={css`
            color: #ca3e47;
            font-size: 4rem;
            font-weight: bolder;
            margin: 0;
            padding: 0rem 0rem;
          `}
        >
          WG
        </h1>

        <div
          css={css`
            color: darkgrey;
            font-variant: all-small-caps;
            font-weight: bolder;
            padding: 0.5rem 0.25rem;
          `}
        >
          Lets get physical
        </div>
        <p
          css={css`
            font-family: cochin;
            font-size: 1.15rem;
            padding: 0rem 0.25rem;
            color: white;
            text-align: center;
          `}
        >
          In west philadeplphia born and raised.
        </p>
        <button
          css={css`
            background-color: #ca3e47;
            font-weight: bolder;
            color: white;
            border: none;
            border-radius: 5pt;
            padding: 0.25rem 1rem;
          `}
        >
          Learn more
        </button>
      </div>
    </div>
  )
}
