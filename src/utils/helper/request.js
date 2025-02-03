import queryString from 'query-string'

import Axios from '@/configs/axios'

import { DEFAULT_PAGE_SIZE } from '@/constants/common'

/**
 * Builds a URL by appending query parameters.
 * @param {string} url - The base URL.
 * @param {object|string} query - The query parameters.
 * @returns {string} - The constructed URL.
 */
export const buildURL = (url, query) => {
  let _url = url
  if (query) {
    _url += /\?/.test(url) ? '&' : '?'
    _url += typeof query === 'object' ? queryString.stringify(query) : query
  }
  return _url
}

/**
 * Replaces placeholders in the endpoint with actual values from params.
 * @param {string} endpoint - The endpoint with placeholders.
 * @param {object} params - The parameters to replace placeholders.
 * @returns {string} - The constructed API URL.
 */
export const buildApiURL = (endpoint, params) =>
  Object.keys(params).reduce((url, key) => url.replace(`{${key}}`, params[key]), endpoint)

/**
 * Fetches data from the given URL with optional query parameters.
 * @param {string} URL - The URL to fetch data from.
 * @param {object} query - The query parameters.
 * @returns {Promise} - A promise that resolves to the response data.
 */
export const fetch = async (URL, query) => {
  const response = await Axios.get(buildURL(URL, query))
  return response.data
}

/**
 * Fetches data with pagination and additional configurations.
 * @param {object} options - The options object.
 * @param {string} options.url - The URL to fetch data from.
 * @param {object} options.query - The query parameters.
 * @param {object} options.configs - Additional Axios configurations.
 * @returns {Promise} - A promise that resolves to the response data.
 */
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

/**
 * Sends a POST request to the given URL with the provided parameters.
 * @param {object} options - The options object.
 * @param {string} options.url - The URL to send the POST request to.
 * @param {object} options.params - The request payload.
 * @returns {Promise} - A promise that resolves to the response data.
 */
export const post = async ({ url, params }) => {
  const response = await Axios.post(url, params)
  return response?.data
}
