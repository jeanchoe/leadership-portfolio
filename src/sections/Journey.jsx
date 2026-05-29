import { useEffect, useRef } from 'react'
import { coreValues } from '../data/intro'
import { leadershipDefinition } from '../data/philosophy'
import { curricularExperiences } from '../data/curricular'
import { coCurricularExperiences } from '../data/cocurricular'
import './Journey.css'

const cut = (s, n) => (s.length > n ? s.slice(0, n).replace(/\s+\S*$/, '') + '…' : s)

const course = curricularExperiences[0]
const coCourse = coCurricularExperiences[0]

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
  const walkerRef = useRef(null)
  const reduce = typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    const wrap = wrapRef.current
    const track = trackRef.current
    const walker = walkerRef.current
    const stops = Array.from(track.querySelectorAll('.stop'))
    let raf = 0
    let lastActive = -1
    let lastY = window.scrollY
    let stopTimer = 0

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
      if (walker) walker.style.left = `${3 + p * 94}%`

      const idx = Math.round(p * (stops.length - 1))
      if (idx !== lastActive) {
        stops.forEach((el, i) => el.classList.toggle('is-active', i === idx))
        lastActive = idx
      }
    }

    const onScroll = () => {
      const y = window.scrollY
      if (walker) {
        walker.classList.add('is-walking')
        walker.classList.toggle('facing-left', y < lastY)
        clearTimeout(stopTimer)
        stopTimer = setTimeout(() => walker.classList.remove('is-walking'), 220)
      }
      lastY = y
      if (!raf) raf = requestAnimationFrame(apply)
    }

    apply()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      clearTimeout(stopTimer)
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
              <div className="stop-inner">
                <article className="stop-card">
                  <div className="stop-num">{s.num}</div>
                  <div className="stop-kind">{s.kind}</div>
                  <h2 className="stop-title">{s.title}</h2>
                  <p className="stop-teaser">{s.teaser}</p>
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

        <div className="journey-ground" aria-hidden="true" />
        <div className="journey-walker" ref={walkerRef} aria-hidden="true">
          <svg className="walker-fig" viewBox="0 0 26 40">
            <g className="w-all">
              <g className="leg leg-a"><rect x="11" y="25" width="3.4" height="13" rx="1.7" /></g>
              <g className="leg leg-b"><rect x="11" y="25" width="3.4" height="13" rx="1.7" /></g>
              <rect className="w-body" x="11" y="12" width="4" height="15" rx="2" />
              <g className="w-arm"><rect x="11.2" y="13" width="3" height="11" rx="1.5" /></g>
              <circle className="w-head" cx="13" cy="7" r="5.5" />
            </g>
          </svg>
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
