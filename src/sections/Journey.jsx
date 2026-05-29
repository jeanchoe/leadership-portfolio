import { useEffect, useRef } from 'react'
import './Journey.css'

const STOPS = [
  { num: '00', kind: 'Welcome', title: 'A working theory of leadership, in progress.', teaser: 'Jean Choe — University of Washington, LEAD 495.' },
  { num: '01', kind: 'Introduction', title: 'Who I am, and why I do this.', teaser: 'Core values, leadership identities, and where I am going.' },
  { num: '02', kind: 'Philosophy', title: 'What leadership actually means.', teaser: 'A working definition, and how it evolved over time.' },
  { num: '03', kind: 'Curricular', title: 'Six classes that changed how I think.', teaser: 'Leadership studied in the classroom.' },
  { num: '04', kind: 'Co-curricular', title: 'Leadership outside the classroom.', teaser: 'Where I practiced it for real.' },
  { num: '05', kind: 'Closing', title: 'Still in progress.', teaser: '22 competencies, 12 experiences, one throughline.' },
]

export default function Journey() {
  const wrapRef = useRef(null)
  const trackRef = useRef(null)
  const farRef = useRef(null)
  const midRef = useRef(null)
  const fillRef = useRef(null)
  const reduce = typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    const wrap = wrapRef.current
    const track = trackRef.current
    let raf = 0

    const apply = () => {
      raf = 0
      const vh = window.innerHeight
      const maxScroll = wrap.offsetHeight - vh
      const top = wrap.getBoundingClientRect().top
      const p = maxScroll > 0 ? Math.min(1, Math.max(0, -top / maxScroll)) : 0
      const dist = track.scrollWidth - window.innerWidth
      track.style.transform = `translate3d(${-(p * dist)}px,0,0)`
      if (!reduce) {
        if (farRef.current) farRef.current.style.transform = `translate3d(${-(p * dist * 0.25)}px,0,0)`
        if (midRef.current) midRef.current.style.transform = `translate3d(${-(p * dist * 0.55)}px,0,0)`
      }
      if (fillRef.current) fillRef.current.style.transform = `scaleX(${p})`
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(apply) }

    apply()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [reduce])

  return (
    <div className="journey" ref={wrapRef} style={{ height: `${STOPS.length * 100}vh` }}>
      <div className="journey-stage">
        <div className="journey-bg journey-bg-far" ref={farRef} aria-hidden="true" />
        <div className="journey-bg journey-bg-mid" ref={midRef} aria-hidden="true" />

        <div className="journey-track" ref={trackRef}>
          <div className="journey-path" aria-hidden="true" />
          {STOPS.map((s) => (
            <section className="stop" key={s.num}>
              <article className="stop-card">
                <div className="stop-num">{s.num}</div>
                <div className="stop-kind">{s.kind}</div>
                <h2 className="stop-title">{s.title}</h2>
                <p className="stop-teaser">{s.teaser}</p>
              </article>
              <span className="stop-node" aria-hidden="true" />
            </section>
          ))}
        </div>

        <div className="journey-hud">
          <span className="journey-brand">Jean Choe</span>
          <div className="journey-progress"><span ref={fillRef} /></div>
          <span className="journey-hint">scroll to travel &rarr;</span>
        </div>
      </div>
    </div>
  )
}
