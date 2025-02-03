/* eslint-disable consistent-return */
import { useCallback, useEffect, useState } from 'react'

import { del, fetch, fetcher, patch, post, put } from '@/utils/helper/request'

export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      setData(response)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }, [url])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const refetch = () => {
    fetchData()
  }

  return { data, loading, error, refetch }
}

export const useFetchPagination = (url, page = 1, limit = 10) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetcher({ url, query: { page, pageSize: limit } })
      setData(response)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }, [url, page, limit])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const refetch = () => {
    fetchData()
  }

  return { data, loading, error, refetch }
}

export const usePost = (url) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const postData = async (data) => {
    setLoading(true)
    try {
      const response = await post({ url, params: data })
      return response
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  return { postData, loading, error }
}

export const usePatch = (url) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const patchData = async (data) => {
    setLoading(true)
    try {
      const response = await patch({ url, params: data })
      return response
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  return { patchData, loading, error }
}

export const usePut = (url) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const putData = async (data) => {
    setLoading(true)
    try {
      const response = await put({ url, params: data })
      return response
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  return { putData, loading, error }
}

export const useDelete = (url) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const deleteData = async () => {
    setLoading(true)
    try {
      const response = await del(url)
      return response
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  return { deleteData, loading, error }
}
