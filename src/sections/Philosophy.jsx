import {
  leadershipDefinition,
  definitionParagraphs,
  evolutionParagraphs,
  identityAndSocialLocation,
} from '../data/philosophy'
import Reveal from '../components/Reveal'
import './Philosophy.css'

export default function Philosophy() {
  return (
    <section id="philosophy" className="philosophy">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <div className="section-num">02</div>
            <div>
              <div className="eyebrow">Leadership Philosophy</div>
              <h2 className="section-title">
                What I think leadership <span className="italic">actually means.</span>
              </h2>
            </div>
          </div>
        </Reveal>

        {/* Definition — featured */}
        <Reveal>
          <div className="definition-block">
            <div className="definition-label">A working definition</div>
            <blockquote className="definition-quote">
              <p>{leadershipDefinition}</p>
            </blockquote>
          </div>
        </Reveal>

        {/* Expanded definition essay */}
        <div className="philosophy-block">
          <Reveal>
            <h3 className="block-title">
              <span className="block-num">i.</span> On the definition
            </h3>
          </Reveal>
          <div className="prose-column">
            {definitionParagraphs.map((p, i) => (
              <Reveal key={i} delay={i * 60}>
                <p className="prose-body">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="ornament">✦ ✦ ✦</div>

        {/* Evolution */}
        <div className="philosophy-block">
          <Reveal>
            <h3 className="block-title">
              <span className="block-num">ii.</span> Evolution over time
            </h3>
          </Reveal>

          <Reveal>
            <div className="timeline">
              <div className="timeline-step">
                <span className="timeline-year">Before</span>
                <span className="timeline-label">"Leaders are born, not made."</span>
              </div>
              <div className="timeline-arrow">→</div>
              <div className="timeline-step">
                <span className="timeline-year">HS Senior</span>
                <span className="timeline-label">"Leadership = title."</span>
              </div>
              <div className="timeline-arrow">→</div>
              <div className="timeline-step">
                <span className="timeline-year">PUBPOL 403</span>
                <span className="timeline-label">"Leadership happens everywhere."</span>
              </div>
              <div className="timeline-arrow">→</div>
              <div className="timeline-step">
                <span className="timeline-year">LEAD 100</span>
                <span className="timeline-label">"Here are the actual concepts."</span>
              </div>
              <div className="timeline-arrow">→</div>
              <div className="timeline-step is-now">
                <span className="timeline-year">Now</span>
                <span className="timeline-label">"Who does this impact?"</span>
              </div>
            </div>
          </Reveal>

          <div className="prose-column">
            {evolutionParagraphs.map((p, i) => (
              <Reveal key={i} delay={i * 60}>
                <p className="prose-body">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="ornament">✦ ✦ ✦</div>

        {/* Identity & Social Location */}
        <div className="philosophy-block">
          <Reveal>
            <h3 className="block-title">
              <span className="block-num">iii.</span> Identity and social location
            </h3>
          </Reveal>
          <Reveal delay={80}>
            <p className="prose-context">
              How my identities shape how I lead, what I notice, and what I have to be careful about.
            </p>
          </Reveal>
          <div className="prose-column">
            {identityAndSocialLocation.map((p, i) => (
              <Reveal key={i} delay={i * 60}>
                <p className="prose-body">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
