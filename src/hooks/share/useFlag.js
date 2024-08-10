import { useCallback, useState } from 'react'

const useFlag = (initial = false) => {
  const [value, setValue] = useState(initial)

  const setTrue = useCallback(() => {
    setValue(true)
  }, [])

  const setFalse = useCallback(() => {
    setValue(false)
  }, [])

  const setToggle = useCallback(() => {
    setValue((prev) => !prev)
  }, [])

  return [value, setTrue, setFalse, setToggle]
}
export { useFlag }
