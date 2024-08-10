/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable consistent-return */
import { useEffect, useRef } from 'react'

/**
 *  useUpdateEffect hook
 *
 *  Just modified version of useEffect that is skipping the first render.
 *
 * @param {Function} callback The callback to be called on update
 * @param {Array} dependencies The list of variables which trigger update when they are changed
 */

function useIsFirstRender() {
  const isFirst = useRef(true)

  if (isFirst.current) {
    isFirst.current = false

    return true
  }

  return isFirst.current
}

export function useUpdateEffect(callback, dependencies) {
  const isFirst = useIsFirstRender()

  useEffect(() => {
    if (!isFirst) {
      return callback?.()
    }
  }, dependencies)
}
