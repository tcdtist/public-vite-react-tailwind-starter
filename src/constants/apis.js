export const API_ROOT = process.env.VITE_API_ROOT
export const ROOT_URL = process.env.VITE_ROOT_URL

export const TIMEOUT = 15000

export const API = {
  AUTH: {
    LOGIN: '/auth/email/login',
    SIGNUP: '/auth/email/register',
    RESET_PASSWORD: '/auth/reset_password',
  },
}
