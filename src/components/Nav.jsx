import { useEffect, useState } from 'react'
import './Nav.css'

const links = [
  { href: '#introduction', label: 'Introduction' },
  { href: '#philosophy', label: 'Philosophy' },
  { href: '#curricular', label: 'Curricular' },
  { href: '#cocurricular', label: 'Co-Curricular' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#top" className="nav-mark" onClick={() => setOpen(false)}>
          <span className="nav-mark-name">Jean Choe</span>
          <span className="nav-mark-sub">Leadership e-Portfolio</span>
        </a>
        <button
          className={`nav-toggle ${open ? 'is-open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span></span><span></span>
        </button>
        <ul className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
