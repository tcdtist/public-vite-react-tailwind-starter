import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
  const navigate = useNavigate()

  return (
    <section>
      <h1 className="text-4xl font-bold">404</h1>
      <button type="button" onClick={() => navigate('/')}>
        Back to home
      </button>
    </section>
  )
}

export default PageNotFound
