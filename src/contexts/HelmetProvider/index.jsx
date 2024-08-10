import { Helmet, HelmetProvider as ReactHelmetProvider } from 'react-helmet-async'

const HelmetProvider = ({ children }) => {
  const title = 'Vite React Tailwind Starter'

  return (
    <ReactHelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={title} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Helmet>
      {children}
    </ReactHelmetProvider>
  )
}

export default HelmetProvider
