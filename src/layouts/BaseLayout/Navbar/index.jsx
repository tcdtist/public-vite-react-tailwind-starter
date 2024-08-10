import { memo } from 'react'

import { Routes } from '@/constants/routes'

import { Link } from '@/components/common'

const NavItem = memo(({ to, children }) => {
  return (
    <li>
      <Link to={to}>{children}</Link>
    </li>
  )
})

const Logo = () => {
  return (
    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="/vite.svg" className="h-8" alt="Tcdtist Logo" />
      <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
        Tcdtist
      </span>
    </a>
  )
}

const UserMenu = () => {
  return (
    <div className="flex items-center space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
      <button
        type="button"
        className="flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 md:me-0 dark:focus:ring-gray-600"
        id="user-menu-button"
        aria-expanded="false"
        data-dropdown-toggle="user-dropdown"
        data-dropdown-placement="bottom"
      >
        <span className="sr-only">Open user menu</span>
        <img className="h-8 w-8 rounded-full" src="/vite.svg" alt="user" />
      </button>
      {/* Dropdown menu */}
      <div
        className="z-50 my-4 hidden list-none divide-y divide-gray-100 rounded-lg bg-white text-base shadow dark:divide-gray-600 dark:bg-gray-700"
        id="user-dropdown"
      >
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
          <span className="block truncate text-sm text-gray-500 dark:text-gray-400">
            name@flowbite.com
          </span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          {Object.keys(Routes.AUTH).map((key) => (
            <NavItem key={key} to={Routes.AUTH[key]}>
              {key}
            </NavItem>
          ))}
        </ul>
      </div>
    </div>
  )
}

const NavLinks = () => {
  return (
    <div
      className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
      id="navbar-user"
    >
      <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900">
        <NavItem to={Routes.AUTH.LOGIN}>Login</NavItem>
        <NavItem to={Routes.AUTH.SIGNUP}>Register</NavItem>
        <NavItem to={Routes.AUTH.PASSWORD.FORGOT}>Forgot Password</NavItem>
        <NavItem to={Routes.AUTH.PASSWORD.RESET}>Recover Password</NavItem>
      </ul>
    </div>
  )
}

const Navbar = () => {
  return (
    <nav className="">
      <div className="flex-between mx-auto max-w-screen-xl flex-wrap p-4">
        <Logo />
        <UserMenu />
        <NavLinks />
      </div>
    </nav>
  )
}
export default Navbar
