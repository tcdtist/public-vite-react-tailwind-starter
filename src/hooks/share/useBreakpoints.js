import { useMediaQuery } from 'react-responsive'

export const useBreakpoints = () => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)',
  })

  const isIpad = useMediaQuery({
    query: '(max-width: 1023px)',
  })

  const isMobile = useMediaQuery({
    query: '(max-width: 639px)',
  })

  return { isDesktop, isIpad, isMobile }
}
