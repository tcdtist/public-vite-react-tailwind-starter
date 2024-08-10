/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react'

const useEffectOnce = (effect) => useEffect(effect, [])

export const useUnmount = (fn) => {
  const fnRef = useRef(fn)
  fnRef.current = fn

  useEffectOnce(() => () => fnRef.current())
}
