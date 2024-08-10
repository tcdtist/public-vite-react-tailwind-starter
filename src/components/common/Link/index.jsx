import { forwardRef } from 'react'

import { Link as ReactLink } from 'react-router-dom'

const Link = ({ disabled, children, ...props }, ref) => {
  if (disabled) {
    return children
  }

  return (
    <ReactLink ref={ref} {...props}>
      {children}
    </ReactLink>
  )
}

export default forwardRef(Link)
