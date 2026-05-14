/**
 * @param {'primary'|'ghost'} variant
 * @param {string} href - renders as <a> when provided
 */
export default function Button({
  children,
  variant = 'primary',
  href,
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center px-6 py-3 rounded-pill font-body font-medium text-nav transition-colors'

  const variants = {
    primary: 'bg-foreground text-background',
    ghost: 'text-muted hover:text-foreground',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
