import classNames from 'classnames'
import { twMerge } from 'tailwind-merge'
import { v4 as uuid } from 'uuid'

// --- Common ---
export function uuidv4() {
  return uuid()
}

export function cn(...inputs) {
  return twMerge(classNames(inputs))
}

export function tryParseJson(json) {
  try {
    return JSON.parse(json) || {}
  } catch {
    return {}
  }
}

export const tryParseBoolean = (value) => {
  try {
    return JSON.parse(value)
  } catch (error) {
    return false
  }
}

export function mergeRefs(refs) {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(value)
      } else if (ref != null) {
        ref.current = value
      }
    })
  }
}
