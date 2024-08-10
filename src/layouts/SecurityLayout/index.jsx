import { Outlet } from 'react-router-dom'

// import { Routes } from '@/constants/routes'
import { Spin } from '@/components/common'

// import { buildURL } from '@/utils/helper/request'

const SecurityLayout = ({ children, loading }) => {
  // const { token, isLogged } = {}

  if (loading) {
    return <Spin />
  }

  // if (!(isLogged && token) && window.location.pathname !== Routes.AUTH.LOGIN) {
  //   return <Navigate to={buildURL(Routes.AUTH.LOGIN, { redirect: window.location.href })} />
  // }

  return (
    <>
      {children}
      <Outlet />
    </>
  )
}

export default SecurityLayout
