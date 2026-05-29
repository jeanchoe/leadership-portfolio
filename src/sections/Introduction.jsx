import { coreValues, leadershipIdentities, why, futureGoals } from '../data/intro'
import Reveal from '../components/Reveal'
import './Introduction.css'

export default function Introduction() {
  return (
    <section id="introduction" className="intro">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <div className="section-num">01</div>
            <div>
              <div className="eyebrow">Introduction</div>
              <h2 className="section-title">
                Who I am, <span className="italic">why I do this,</span><br/>
                and where I'm going.
              </h2>
            </div>
          </div>
        </Reveal>

        {/* Core Values */}
        <div className="intro-block">
          <Reveal>
            <h3 className="block-title">
              <span className="block-num">i.</span> Core Values
            </h3>
          </Reveal>

          <div className="values-grid">
            {coreValues.map((v, i) => (
              <Reveal key={v.name} delay={i * 80}>
                <article className="value-card">
                  <div className="value-num">0{i + 1}</div>
                  <h4 className="value-name">{v.name}</h4>
                  <p className="value-body">{v.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="ornament">✦ ✦ ✦</div>

        {/* Leadership Identities */}
        <div className="intro-block">
          <Reveal>
            <h3 className="block-title">
              <span className="block-num">ii.</span> Leadership Identities
            </h3>
          </Reveal>

          <div className="identities-stack">
            {leadershipIdentities.map((id, i) => (
              <Reveal key={id.name} delay={i * 100}>
                <article className="identity-row">
                  <div className="identity-marker" aria-hidden>—</div>
                  <div className="identity-content">
                    <h4 className="identity-name">{id.name}</h4>
                    <p className="identity-body">{id.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="ornament">✦ ✦ ✦</div>

        {/* Why */}
        <div className="intro-block intro-block-narrow">
          <Reveal>
            <h3 className="block-title">
              <span className="block-num">iii.</span> Why I do this
            </h3>
          </Reveal>
          <Reveal delay={100}>
            <p className="prose-large">{why}</p>
          </Reveal>
        </div>

        <div className="ornament">✦ ✦ ✦</div>

        {/* Future Goals */}
        <div className="intro-block intro-block-narrow">
          <Reveal>
            <h3 className="block-title">
              <span className="block-num">iv.</span> Future Goals
            </h3>
          </Reveal>
          <Reveal delay={100}>
            <p className="prose-large">{futureGoals}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
