import { cn } from '@/utils/helper/functions'

const Spin = ({ size = 32, className = 'text-primary' }) => (
  <svg
    width={size}
    height={size}
    className={cn('animate-spin', className)}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
  >
    <circle
      className="bg-black opacity-25"
      stroke="currentColor"
      strokeWidth={4}
      cx={12}
      cy={12}
      r={10}
    />
    <path
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      className="opacity-75"
      fill="currentColor"
    />
  </svg>
)

export default Spin
