import { coCurricularExperiences } from '../data/cocurricular'
import ExperienceCard from '../components/ExperienceCard'
import Reveal from '../components/Reveal'
import './Experiences.css'

export default function CoCurricular() {
  return (
    <section id="cocurricular" className="experiences experiences-cocurricular">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <div className="section-num">04</div>
            <div>
              <div className="eyebrow">Co-Curricular Experiences</div>
              <h2 className="section-title">
                Where I practiced leadership <span className="italic">outside the classroom.</span>
              </h2>
              <p className="section-context">
                Work, volunteering, family, sport, travel. The places where the theory actually had to hold up.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="experiences-list">
          {coCurricularExperiences.map((exp, i) => (
            <ExperienceCard key={exp.id} experience={exp} index={i} kind="cocurricular" />
          ))}
        </div>
      </div>
    </section>
  )
}
