import HelmetProvider from './HelmetProvider'
import ReactRouteDomProvider from './RouterProvider'

const AppProvider = () => {
  return (
    <HelmetProvider>
      <ReactRouteDomProvider />
    </HelmetProvider>
  )
}

export default AppProvider
