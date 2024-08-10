/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'

function useDidMount(callback) {
  useEffect(() => {
    if (typeof callback === 'function') {
      callback()
    }
  }, [])
}

export { useDidMount }
