import { Outlet } from 'react-router-dom'

import Header from './Header'

const BaseLayout = ({ children }) => {
  return (
    <div className="size-full min-h-screen">
      <Header />
      <main className="size-full h-[calc(100vh-64px)] overflow-y-auto">
        {children}
        <Outlet />
      </main>
    </div>
  )
}

export default BaseLayout
