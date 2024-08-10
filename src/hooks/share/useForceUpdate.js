import { useReducer } from 'react'

const reducer = (value) => (value + 1) % 1000000

export function useForceUpdate() {
  const [, update] = useReducer(reducer, 0)
  return update
}
