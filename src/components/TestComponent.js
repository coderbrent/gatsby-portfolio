import React, { useState } from "react"
import useMockApi from "./hooks/useMockApi"

export default function TestComponent() {
  const [counter, setCounter] = useState(0)
  const [data] = useMockApi("todos", 10)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>
        Click To Increment
      </button>
      {data ? data.map(todo => <div key={todo.id}>{todo.title}</div>) : null}
    </div>
  )
}
