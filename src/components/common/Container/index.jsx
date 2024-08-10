import { cn } from '@/utils/helper/functions'

const Container = ({ title, extra, children, className }) => {
  return (
    <section className={cn('flex-center h-full w-full flex-col', className)}>
      <div className="space-y-8 py-8">
        <header className="flex-between mb-6">
          {title ? <div className="text-lg font-semibold">{title}</div> : null}
          {extra}
        </header>
        {children}
      </div>
    </section>
  )
}

export default Container
