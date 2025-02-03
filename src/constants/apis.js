export const API_ROOT = import.meta.env.VITE_API_ROOT
export const ROOT_URL = import.meta.env.VITE_ROOT_URL

export const TIMEOUT = 15000

export const API = {
  AUTH: {
    LOGIN: '/auth/email/login',
    SIGNUP: '/auth/email/register',
    RESET_PASSWORD: '/auth/reset_password',
  },
}
