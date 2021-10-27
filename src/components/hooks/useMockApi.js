import { useEffect, useState } from "react"

export default function useMockApi(type, limit) {
  const [data, setData] = useState(null)
  const baseURL = `https://jsonplaceholder.typicode.com/`

  useEffect(() => {
    let controller = new AbortController()
    ;(async () => {
      try {
        const response = await fetch(`${baseURL}${type}?_limit=${limit}`, {
          signal: controller.signal,
        })
        setData(await response.json())
        controller = null
      } catch (e) {
        console.log(e)
      }
    })()
    return () => controller?.abort()
  }, [type, limit, baseURL])

  return [data]
}
