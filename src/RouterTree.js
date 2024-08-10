import { Routes } from '@/constants/routes'

import AuthLayout from '@/layouts/AuthLayout'
import BaseLayout from '@/layouts/BaseLayout'
import SecurityLayout from '@/layouts/SecurityLayout'

import HomePage from '@/pages'
import NotFoundPage from '@/pages/404'
import LoginPage from '@/pages/auth/login'
import ForgotPasswordPage from '@/pages/auth/password/forgot'
import ResetPasswordPage from '@/pages/auth/password/reset'
import SignupPage from '@/pages/auth/signup'

export default () => [
  {
    path: Routes.AUTH.SIGNUP,
    Component: AuthLayout,
    children: [
      {
        index: true,
        Component: SignupPage,
      },
    ],
  },
  {
    path: Routes.AUTH.LOGIN,
    Component: AuthLayout,
    children: [
      {
        index: true,
        Component: LoginPage,
      },
    ],
  },
  {
    path: Routes.AUTH.PASSWORD.ROOT,
    Component: AuthLayout,
    children: [
      {
        path: 'forgot',
        Component: ForgotPasswordPage,
      },
      {
        path: 'reset',
        Component: ResetPasswordPage,
      },
    ],
  },
  {
    id: 'root',
    path: Routes.HOME,
    Component: SecurityLayout,
    children: [
      {
        path: Routes.HOME,
        Component: BaseLayout,
        children: [
          {
            index: true,
            Component: HomePage,
          },
          {
            path: '*',
            Component: NotFoundPage,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    Component: NotFoundPage,
  },
]
