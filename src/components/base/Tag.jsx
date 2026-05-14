/**
 * @param {string} className
 * @param {'default'|'dark'} variant
 */
export default function Tag({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'text-muted font-body font-normal',
    dark: 'bg-foreground text-background font-body font-normal',
  }

  return (
    <span
      className={`inline-flex items-center justify-center px-[14px] py-[9px] rounded-pill text-[20px] leading-[20px] tracking-[-0.15px] ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
