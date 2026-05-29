import { curricularExperiences } from '../data/curricular'
import ExperienceCard from '../components/ExperienceCard'
import Reveal from '../components/Reveal'
import './Experiences.css'

export default function Curricular() {
  return (
    <section id="curricular" className="experiences experiences-curricular">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <div className="section-num">03</div>
            <div>
              <div className="eyebrow">Curricular Experiences</div>
              <h2 className="section-title">
                Six classes that <span className="italic">changed how I think.</span>
              </h2>
              <p className="section-context">
                Each experience pairs with one or two of the sixty Student Leadership Competencies,
                a story of how I demonstrated it, and what I'm still working on.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="experiences-list">
          {curricularExperiences.map((exp, i) => (
            <ExperienceCard key={exp.id} experience={exp} index={i} kind="curricular" />
          ))}
        </div>
      </div>
    </section>
  )
}
