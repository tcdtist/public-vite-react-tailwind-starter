import queryString from 'query-string'

import Axios from '@/configs/axios'

import { DEFAULT_PAGE_SIZE } from '@/constants/common'

export const buildURL = (url, query) => {
  let _url = url
  if (query) {
    _url += /\?/.test(url) ? '&' : '?'
    _url += typeof query === 'object' ? queryString.stringify(query) : query
  }
  return _url
}

export const buildApiURL = (endpoint, params) =>
  Object.keys(params).reduce((url, key) => url.replace(`{${key}}`, params[key]), endpoint)

export const fetch = async (URL, query) => {
  const response = await Axios.get(buildURL(URL, query))
  return response.data
}

export const fetcher = async ({ url, query = {}, configs = {} }) => {
  const { page, pageSize = DEFAULT_PAGE_SIZE, ...rest } = query
  const URL = buildURL(url, {
    page: page || 0,
    pageSize,
    ...rest,
  })
  const response = await Axios.get(URL, configs)
  return response?.data
}

export const post = async ({ url, params }) => {
  const response = await Axios.post(url, params)
  return response?.data
}

export const put = async ({ url, params }) => {
  const response = await Axios.put(url, params)
  return response?.data
}

export const patch = async ({ url, params }) => {
  const response = await Axios.patch(url, params)
  return response?.data
}

export const del = async (url) => {
  const response = await Axios.delete(url)
  return response?.data
}
