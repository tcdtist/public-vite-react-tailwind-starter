/* eslint-disable no-restricted-syntax */
import { useCallback, useEffect, useMemo, useRef, useSyncExternalStore } from 'react'

// in memory fallback used when `localStorage` throws an error
export const inMemoryData = new Map()

const callbacks = new Set()

function triggerCallbacks(key) {
  for (const callback of [...callbacks]) {
    callback(key)
  }
}

function parseJSON(value) {
  return value === 'undefined' ? undefined : JSON.parse(value)
}

function goodTry(tryFn) {
  try {
    return tryFn()
  } catch {
    return undefined
  }
}

export function useSyncLocalStorage(
  key,
  defaultValue,
  storageSync = true,
  parse = parseJSON,
  stringify = JSON.stringify
) {
  const storageItem = useRef({
    string: null,
    parsed: undefined,
  })

  const value = useSyncExternalStore(
    useCallback(
      (onStoreChange) => {
        const onChange = (localKey) => {
          if (key === localKey) {
            onStoreChange()
          }
        }
        callbacks.add(onChange)
        return () => {
          callbacks.delete(onChange)
        }
      },
      [key]
    ),
    () => {
      const string = goodTry(() => localStorage.getItem(key)) ?? null

      if (inMemoryData.has(key)) {
        storageItem.current.parsed = inMemoryData.get(key)
      } else if (string !== storageItem.current.string) {
        let parsed

        try {
          parsed = string === null ? defaultValue : parse(string)
        } catch {
          parsed = defaultValue
        }

        storageItem.current.parsed = parsed
      }

      storageItem.current.string = string

      if (defaultValue !== undefined && string === null) {
        goodTry(() => {
          const _string = stringify(defaultValue)
          localStorage.setItem(key, _string)
          storageItem.current = { string: _string, parsed: defaultValue }
        })
      }

      return storageItem.current.parsed
    },
    () => defaultValue
  )

  const setState = useCallback(
    (newValue) => {
      const valueToStore =
        newValue instanceof Function ? newValue(storageItem.current.parsed) : newValue

      try {
        localStorage.setItem(key, stringify(valueToStore))
        inMemoryData.delete(key)
      } catch {
        inMemoryData.set(key, valueToStore)
      }

      triggerCallbacks(key)
    },
    [key, stringify]
  )

  const removeItem = useCallback(() => {
    goodTry(() => localStorage.removeItem(key))
    inMemoryData.delete(key)
    triggerCallbacks(key)
  }, [key])

  useEffect(() => {
    if (!storageSync) {
      return undefined
    }

    const onStorage = (e) => {
      if (e.key === key && e.storageArea === goodTry(() => localStorage)) {
        triggerCallbacks(key)
      }
    }

    window.addEventListener('storage', onStorage)

    return () => window.removeEventListener('storage', onStorage)
  }, [key, storageSync])

  return useMemo(() => [value, setState, removeItem], [value, setState, removeItem])
}
