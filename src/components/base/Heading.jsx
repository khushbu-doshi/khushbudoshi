/**
 * @param {'h1'|'h2'|'h3'|'h4'} as - HTML element
 * @param {string} className
 */
export default function Heading({ as: Tag = 'h2', className = '', children }) {
  return (
    <Tag className={`font-body font-medium text-foreground ${className}`}>
      {children}
    </Tag>
  )
}
