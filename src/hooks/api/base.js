/* eslint-disable consistent-return */
import { useCallback, useEffect, useState } from 'react'

import axios from 'axios'

export const useFetch = (url, page = 1, limit = 10) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = useCallback(async () => {
    setLoading(true)
    try {
      const response = await axios.get(`${url}?page=${page}&limit=${limit}`)
      setData(response.data)
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
      const response = await axios.post(url, data)
      return response.data
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
      const response = await axios.patch(url, data)
      return response.data
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
      const response = await axios.put(url, data)
      return response.data
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
      const response = await axios.delete(url)
      return response.data
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  return { deleteData, loading, error }
}
