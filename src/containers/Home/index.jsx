import { useState } from 'react'

import { useDelete, useFetch, usePatch, usePost } from '@/hooks/api/base'

const HomeContainer = () => {
  const [page, setPage] = useState(1)
  const limit = 10
  const { data, loading, error, refetch } = useFetch(
    `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`
  )

  const { postData } = usePost('https://jsonplaceholder.typicode.com/todos')
  const { patchData } = usePatch('https://jsonplaceholder.typicode.com/todos')
  // const { putData } = usePut('https://jsonplaceholder.typicode.com/todos')
  const { deleteData } = useDelete('https://jsonplaceholder.typicode.com/todos')

  const handleNextPage = () => {
    setPage((prev) => prev + 1)
  }

  const handlePrevPage = () => {
    if (page > 1) setPage((prev) => prev - 1)
  }

  const handleCreateItem = async () => {
    const newItem = { title: 'New Todo', completed: false, userId: 1 }
    await postData(newItem)
    refetch()
  }

  const handleUpdateItem = async (id) => {
    const updatedItem = { title: 'Updated Todo', completed: true }
    await patchData(updatedItem, `/${id}`)
    refetch()
  }

  const handleDeleteItem = async (id) => {
    await deleteData(`/${id}`)
    refetch()
  }

  if (loading) {
    return (
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="animate-pulse space-y-4">
          <div className="h-4 w-3/4 rounded bg-gray-300" />
          <div className="h-4 w-1/2 rounded bg-gray-300" />
          <div className="h-4 w-3/4 rounded bg-gray-300" />
        </div>
      </div>
    )
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">Todo List</h1>
      <button
        type="button"
        onClick={handleCreateItem}
        className="mb-4 rounded bg-green-500 px-4 py-2 text-white"
      >
        Create New Todo
      </button>
      <ul className="space-y-4">
        {data.map((todo) => (
          <li key={todo.id} className="rounded border p-4 shadow">
            <h2 className="font-semibold">{todo.title}</h2>
            <p>Status: {todo.completed ? 'Completed' : 'Not Completed'}</p>
            <button
              type="button"
              onClick={() => handleUpdateItem(todo.id)}
              className="mr-2 rounded bg-yellow-500 px-2 py-1 text-white"
            >
              Update
            </button>
            <button
              type="button"
              onClick={() => handleDeleteItem(todo.id)}
              className="rounded bg-red-500 px-2 py-1 text-white"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-between">
        <button
          type="button"
          onClick={handlePrevPage}
          disabled={page === 1}
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={handleNextPage}
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default HomeContainer
