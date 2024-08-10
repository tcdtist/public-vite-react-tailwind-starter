import queryString from 'query-string'

export function buildURL(url, query) {
  let _url = url
  if (query) {
    _url += /\?/.test(url) ? '&' : '?'
    if (typeof query === 'object') {
      _url += queryString.stringify(query)
    } else {
      _url += query
    }
  }
  return _url
}

export function buildApiURL(endpoint, params) {
  return Object.keys(params).reduce((url, key) => {
    return url.replace(`{${key}}`, params[key])
  }, endpoint)
}
