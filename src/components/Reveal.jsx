import { useInView } from './useInView'

export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '', style = {} }) {
  const [ref, inView] = useInView()
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'in-view' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  )
}
