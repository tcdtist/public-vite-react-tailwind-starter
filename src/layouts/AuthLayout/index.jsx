import { Outlet } from 'react-router-dom'

import { Container } from '@/components/common'

const AuthLayout = ({ children }) => {
  return (
    <Container title="AuthLayout">
      {children}
      <Outlet />
    </Container>
  )
}

export default AuthLayout
