/* eslint-disable prefer-promise-reject-errors */
import axios from 'axios'

import { API_ROOT, TIMEOUT } from '@/constants/apis'
import { Routes } from '@/constants/routes'

import logger from '@/utils/helper/logger'

const instance = axios.create({
  baseURL: API_ROOT,
  timeout: TIMEOUT,
})

export const redirectIfUnAuthorized = () => {
  if (typeof window !== 'undefined') {
    localStorage.clear()
    window.location.href = Routes.HOME
  }
}

instance.interceptors.request.use((request) => {
  const token = localStorage.getItem('accessToken')
  if (token) {
    request.headers.Authorization = `Bearer ${token}`
  }
  return request
})

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === 'ECONNABORTED') {
      logger.error('Request timeout')

      return Promise.reject('Request timeout')
    }

    if (error?.response?.status === 401) {
      redirectIfUnAuthorized()
    }

    logger.error(error)
    return Promise.reject(error)
  }
)

export default instance
