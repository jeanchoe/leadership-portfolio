import Reveal from '../components/Reveal'
import { curricularExperiences } from '../data/curricular'
import { coCurricularExperiences } from '../data/cocurricular'
import './Closing.css'

export default function Closing() {
  const totalCompetencies =
    curricularExperiences.reduce((s, e) => s + e.competencies.length, 0) +
    coCurricularExperiences.reduce((s, e) => s + e.competencies.length, 0)

  // Build a flat list for the index
  const allCompetencies = [
    ...curricularExperiences.flatMap(e =>
      e.competencies.map(c => ({ name: c.name, from: e.code }))
    ),
    ...coCurricularExperiences.flatMap(e =>
      e.competencies.map(c => ({ name: c.name, from: e.title }))
    ),
  ]

  return (
    <section className="closing" id="closing">
      <div className="container">
        <Reveal>
          <div className="closing-counter">
            <div className="closing-counter-num">{totalCompetencies}</div>
            <div className="closing-counter-label">
              of 60 Student Leadership<br />Competencies reflected on
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="closing-index">
            <div className="closing-index-label">Index of competencies</div>
            <ul className="closing-index-list">
              {allCompetencies.map((c, i) => (
                <li key={`${c.name}-${i}`}>
                  <span className="closing-index-num">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="closing-index-name">{c.name}</span>
                  <span className="closing-index-dot" aria-hidden>·</span>
                  <span className="closing-index-from">{c.from}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="closing-note">
            <p className="closing-note-body">
              This portfolio is a snapshot, not a conclusion. The version of me that wrote it
              has already disagreed with parts of it. That feels right.
            </p>
            <div className="closing-sig">
              <span className="sig-name">Jean Choe</span>
              <span className="sig-meta">Spring 2026 · LEAD 495 with Francesca Lo</span>
            </div>
          </div>
        </Reveal>

        <footer className="closing-foot">
          <span>© 2026 Jean Choe</span>
          <span>University of Washington</span>
        </footer>
      </div>
    </section>
  )
}
