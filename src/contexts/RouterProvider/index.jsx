import { RouterProvider as ReactRouterProvider, createBrowserRouter } from 'react-router-dom'

import { Spin } from '@/components/common'

import RouterTree from '@/RouterTree'

const routes = RouterTree()
const router = createBrowserRouter(routes)

const fallbackElement = <Spin />

const RouteProvider = () => {
  return <ReactRouterProvider router={router} fallbackElement={fallbackElement} />
}

export default RouteProvider
