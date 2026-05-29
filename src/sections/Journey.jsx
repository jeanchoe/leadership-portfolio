import { useEffect, useRef, useState } from 'react'
import { coreValues } from '../data/intro'
import { leadershipDefinition } from '../data/philosophy'
import { curricularExperiences } from '../data/curricular'
import { coCurricularExperiences } from '../data/cocurricular'
import Introduction from './Introduction'
import Philosophy from './Philosophy'
import Curricular from './Curricular'
import CoCurricular from './CoCurricular'
import Closing from './Closing'
import './Journey.css'

const cut = (s, n) => (s.length > n ? s.slice(0, n).replace(/\s+\S*$/, '') + '…' : s)

const course = curricularExperiences[0]
const coCourse = coCurricularExperiences[0]

const SECTIONS = {
  '01': Introduction,
  '02': Philosophy,
  '03': Curricular,
  '04': CoCurricular,
  '05': Closing,
}

const STOPS = [
  {
    num: '00', kind: 'Welcome',
    title: 'A working theory of leadership, in progress.',
    teaser: 'Jean Choe — University of Washington, LEAD 495.',
    extras: [],
  },
  {
    num: '01', kind: 'Introduction',
    title: 'Who I am, and why I do this.',
    teaser: 'Five core values that ground how I lead.',
    extras: coreValues.map((v) => ({ tag: v.name, body: cut(v.body, 88) })),
  },
  {
    num: '02', kind: 'Philosophy',
    title: 'What leadership actually means.',
    teaser: 'A working definition, and how it evolved.',
    extras: [
      { tag: 'Working definition', body: cut(leadershipDefinition, 150) },
      { tag: 'Before', body: '"Leaders are born, not made."' },
      { tag: 'Now', body: '"Who does this impact?"' },
    ],
  },
  {
    num: '03', kind: 'Curricular',
    title: 'Six classes that changed how I think.',
    teaser: course.title,
    extras: [
      { tag: 'Artifact', body: cut(course.artifact.caption, 120), kind: 'artifact' },
      { tag: course.competencies[0].name, body: cut(course.competencies[0].story, 120) },
      { tag: 'Still working on', body: cut(course.competencies[0].workOn, 110) },
    ],
  },
  {
    num: '04', kind: 'Co-curricular',
    title: 'Leadership outside the classroom.',
    teaser: coCourse.title,
    extras: [
      { tag: 'Artifact', body: cut(coCourse.artifact.caption, 120), kind: 'artifact' },
      { tag: coCourse.competencies[0].name, body: cut(coCourse.competencies[0].story, 120) },
    ],
  },
  {
    num: '05', kind: 'Closing',
    title: 'Still in progress.',
    teaser: 'One throughline, many experiences.',
    extras: [
      { tag: 'Competencies', body: '22 reflected on, across the journey.' },
      { tag: 'Experiences', body: '6 curricular + 6 co-curricular.' },
    ],
  },
]

export default function Journey() {
  const wrapRef = useRef(null)
  const trackRef = useRef(null)
  const farRef = useRef(null)
  const midRef = useRef(null)
  const fillRef = useRef(null)
  const [open, setOpen] = useState(null)
  const reduce = typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    const wrap = wrapRef.current
    const track = trackRef.current
    const stops = Array.from(track.querySelectorAll('.stop'))
    let raf = 0
    let lastActive = -1

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

      const idx = Math.round(p * (stops.length - 1))
      if (idx !== lastActive) {
        stops.forEach((el, i) => el.classList.toggle('is-active', i === idx))
        lastActive = idx
      }
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

  // lock background scroll + allow Esc to close the detail overlay
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') setOpen(null) }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const OpenSection = open ? SECTIONS[open] : null

  return (
    <div className="journey" ref={wrapRef} style={{ height: `${STOPS.length * 100}vh` }}>
      <div className="journey-stage">
        <div className="journey-bg journey-bg-far" ref={farRef} aria-hidden="true" />
        <div className="journey-bg journey-bg-mid" ref={midRef} aria-hidden="true" />

        <div className="journey-track" ref={trackRef}>
          <div className="journey-path" aria-hidden="true" />
          {STOPS.map((s) => (
            <section className="stop" key={s.num}>
              <div className="stop-inner">
                <article className="stop-card">
                  <div className="stop-num">{s.num}</div>
                  <div className="stop-kind">{s.kind}</div>
                  <h2 className="stop-title">{s.title}</h2>
                  <p className="stop-teaser">{s.teaser}</p>
                  {SECTIONS[s.num] && (
                    <button className="stop-explore" onClick={() => setOpen(s.num)}>
                      Explore this chapter &rarr;
                    </button>
                  )}
                </article>

                {s.extras.length > 0 && (
                  <div className="stop-extras">
                    {s.extras.map((e, i) => (
                      <div
                        className={`extra ${e.kind === 'artifact' ? 'extra-artifact' : ''}`}
                        key={i}
                        style={{ '--d': `${0.08 * i + 0.1}s` }}
                      >
                        <span className="extra-tag">{e.tag}</span>
                        <p className="extra-body">{e.body}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
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

      {OpenSection && (
        <div className="detail-overlay" role="dialog" aria-modal="true">
          <button className="detail-close" onClick={() => setOpen(null)}>Close &times;</button>
          <div className="detail-scroll">
            <OpenSection />
          </div>
        </div>
      )}
    </div>
  )
}
