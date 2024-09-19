import { cn } from '~/lib/utils'

/**
 * @function Container
 * @description Component to wrap the entire application
 * @exports Container
 */
export const Container: React.FC<
  Readonly<{ className?: string; children: React.ReactNode }>
> = ({ className, children }) => {
  return (
    <div
      className={cn(
        className,
        `container mx-auto flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8`
      )}
    >
      {children}
    </div>
  )
}
