import { useState } from 'react'
import ArtifactArt from './ArtifactArt'
import './ExperienceCard.css'

export default function ExperienceCard({ experience, index, kind }) {
  const [openCompetency, setOpenCompetency] = useState(0)

  const numLabel = String(index + 1).padStart(2, '0')

  return (
    <article className="experience-card" id={experience.id}>
      <div className="experience-header">
        <div className="experience-index">
          <div className="experience-num">{numLabel}</div>
          <div className="experience-kind">
            {kind === 'curricular' ? experience.code : experience.label}
          </div>
        </div>
        <div className="experience-titles">
          <h3 className="experience-title">{experience.title}</h3>
          <p className="experience-overview">{experience.overview}</p>
        </div>
      </div>

      <div className="experience-body">
        <div className="experience-competencies">
          <div className="competencies-label">
            <span className="comp-label-text">
              Competenc{experience.competencies.length > 1 ? 'ies' : 'y'}
            </span>
            <span className="comp-count">
              {String(experience.competencies.length).padStart(2, '0')}
            </span>
          </div>

          <div className="competencies-tabs">
            {experience.competencies.map((c, i) => (
              <button
                key={c.name}
                className={`comp-tab ${i === openCompetency ? 'is-active' : ''}`}
                onClick={() => setOpenCompetency(i)}
              >
                <span className="comp-tab-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="comp-tab-name">{c.name}</span>
              </button>
            ))}
          </div>

          <div className="competency-panel">
            {experience.competencies.map((c, i) => (
              <div
                key={c.name}
                className={`comp-panel ${i === openCompetency ? 'is-active' : ''}`}
              >
                <div className="comp-section">
                  <span className="comp-section-label">How I demonstrated it</span>
                  <p className="comp-text">{c.story}</p>
                </div>

                {c.growth && (
                  <div className="comp-section">
                    <span className="comp-section-label">Dimension I grew in most</span>
                    <p className="comp-text comp-text-small">{c.growth}</p>
                  </div>
                )}

                <div className="comp-section">
                  <span className="comp-section-label">What I learned</span>
                  <p className="comp-text comp-text-small">{c.learned}</p>
                </div>

                <div className="comp-section comp-section-work">
                  <span className="comp-section-label">What I still need to work on</span>
                  <p className="comp-text comp-text-small">{c.workOn}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="experience-artifact">
          <figure
            className="polaroid"
            style={{ '--tilt': index % 2 === 0 ? '-1.8deg' : '1.5deg' }}
          >
            <span className="polaroid-tape" aria-hidden="true" />
            <div className="polaroid-window">
              <ArtifactArt type={experience.artifact.type} label={experience.artifact.label} />
            </div>
            <figcaption className="polaroid-caption">{experience.artifact.caption}</figcaption>
          </figure>
        </aside>
      </div>
    </article>
  )
}
