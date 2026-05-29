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

// playful background palette the journey transitions through, blue -> gold
const PALETTE = ['#8FB0C9', '#79A8B0', '#8CA87C', '#B49AC8', '#D2937F', '#DAB36B']
const hex = (h) => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)]
const mix = (a, b, t) => {
  const A = hex(a), B = hex(b)
  return `rgb(${A.map((v, i) => Math.round(v + (B[i] - v) * t)).join(',')})`
}
const bgAt = (p) => {
  const seg = p * (PALETTE.length - 1)
  const i = Math.min(PALETTE.length - 2, Math.floor(seg))
  return mix(PALETTE[i], PALETTE[i + 1], seg - i)
}

export default function Journey() {
  const wrapRef = useRef(null)
  const stageRef = useRef(null)
  const trackRef = useRef(null)
  const farRef = useRef(null)
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
      if (stageRef.current) stageRef.current.style.backgroundColor = bgAt(p)
      if (!reduce && farRef.current) {
        farRef.current.style.transform = `translate3d(${-(p * dist * 0.3)}px,0,0)`
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

  // lock background scroll, Esc to close, and parallax the board dots vertically
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') setOpen(null) }
    window.addEventListener('keydown', onKey)

    const scroller = document.querySelector('.detail-scroll')
    const overlay = document.querySelector('.detail-overlay')
    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        if (overlay && scroller) {
          overlay.style.backgroundPositionY = `${-scroller.scrollTop * 0.3}px`
        }
      })
    }
    if (!reduce && scroller) scroller.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      if (scroller) scroller.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [open, reduce])

  const OpenSection = open ? SECTIONS[open] : null
  const chapterColor = open ? bgAt(parseInt(open, 10) / (STOPS.length - 1)) : undefined

  return (
    <div className="journey" ref={wrapRef} style={{ height: `${STOPS.length * 100}vh` }}>
      <div className="journey-stage" ref={stageRef}>
        <div className="journey-bg journey-bg-far" ref={farRef} aria-hidden="true" />

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
        <div className="detail-overlay" role="dialog" aria-modal="true" style={{ '--chapter': chapterColor }}>
          <button className="detail-close" onClick={() => setOpen(null)}>Close &times;</button>
          <div className="detail-scroll">
            <OpenSection />
          </div>
        </div>
      )}
    </div>
  )
}
