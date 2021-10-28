import React from "react"
import useMockApi from "../hooks/useMockApi"
import Card from "./Card"

export default function Container() {
  const [apiData] = useMockApi("users", 4)

  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
        padding: "1rem",
      }}
    >
      {apiData
        ? apiData.map(user => (
            <Card
              key={user.id}
              email={user.email}
              name={user.name}
              username={user.username}
              catchPhrase={user.company.catchPhrase}
            />
          ))
        : null}
    </div>
  )
}
