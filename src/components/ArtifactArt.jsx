import './ArtifactArt.css'

/**
 * Stylized SVG placeholders for each artifact type.
 * These stand in for the actual artifact images and can be replaced
 * by dropping real images into /public and updating the data file
 * to use <img src=...> instead of this component.
 */
export default function ArtifactArt({ type, label }) {
  return (
    <div className={`artifact-art artifact-${type}`}>
      {renderForType(type)}
      <div className="artifact-art-label">{label}</div>
    </div>
  )
}

function renderForType(type) {
  switch (type) {
    case 'diagram': return <DiagramArt />
    case 'principles': return <PrinciplesArt />
    case 'book': return <BookArt />
    case 'screenshot': return <ScreenshotArt />
    case 'abstract': return <AbstractArt />
    case 'video': return <VideoArt />
    case 'document': return <DocumentArt />
    case 'website': return <WebsiteArt />
    case 'photo': return <PhotoArt />
    default: return <DefaultArt />
  }
}

const DiagramArt = () => (
  <svg viewBox="0 0 400 280" className="art-svg">
    {/* Triangle leadership model */}
    <g fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="80" y="120" width="70" height="40" rx="3" />
      <rect x="170" y="120" width="60" height="40" rx="3" fill="currentColor" fillOpacity="0.1" />
      <rect x="250" y="120" width="70" height="40" rx="3" />
      <rect x="170" y="40" width="60" height="30" rx="3" />
      <rect x="170" y="210" width="60" height="30" rx="3" />
      <line x1="150" y1="140" x2="170" y2="140" markerEnd="url(#arr)" />
      <line x1="230" y1="140" x2="250" y2="140" markerEnd="url(#arr)" />
      <line x1="200" y1="120" x2="200" y2="70" markerEnd="url(#arr)" />
      <line x1="200" y1="160" x2="200" y2="210" markerEnd="url(#arr)" />
    </g>
    <text x="200" y="145" textAnchor="middle" fontSize="9" fill="currentColor">Follower</text>
    <text x="115" y="145" textAnchor="middle" fontSize="9" fill="currentColor">Leader 1</text>
    <text x="285" y="145" textAnchor="middle" fontSize="9" fill="currentColor">Leader 2</text>
    <defs>
      <marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M0,0 L6,3 L0,6 z" fill="currentColor" />
      </marker>
    </defs>
  </svg>
)

const PrinciplesArt = () => (
  <svg viewBox="0 0 400 280" className="art-svg">
    <text x="30" y="35" fontSize="14" fontWeight="600" fill="var(--gold)">LET'S GET A FEW THINGS CLEAR</text>
    {[60, 110, 160, 210].map((y, i) => (
      <g key={i}>
        <circle cx="35" cy={y + 4} r="2" fill="currentColor" />
        <line x1="50" y1={y} x2="370" y2={y} stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
        <line x1="50" y1={y + 10} x2="320" y2={y + 10} stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
        <line x1="50" y1={y + 20} x2="280" y2={y + 20} stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
      </g>
    ))}
  </svg>
)

const BookArt = () => (
  <svg viewBox="0 0 400 280" className="art-svg">
    <rect x="130" y="40" width="140" height="200" fill="var(--rust)" />
    <rect x="130" y="40" width="140" height="50" fill="var(--gold)" />
    <text x="200" y="65" textAnchor="middle" fontSize="11" fontStyle="italic" fill="var(--paper)">The Breakthrough</text>
    <text x="200" y="80" textAnchor="middle" fontSize="11" fontStyle="italic" fill="var(--paper)">Model</text>
    <text x="200" y="140" textAnchor="middle" fontSize="26" fontWeight="900" fill="var(--paper)" letterSpacing="2">HOW</text>
    <text x="200" y="170" textAnchor="middle" fontSize="26" fontWeight="900" fill="var(--paper)" letterSpacing="2">REMARKABLE</text>
    <text x="200" y="200" textAnchor="middle" fontSize="26" fontWeight="900" fill="var(--paper)" letterSpacing="2">WOMEN</text>
    <text x="200" y="226" textAnchor="middle" fontSize="22" fontWeight="900" fill="var(--paper)" letterSpacing="2">LEAD</text>
  </svg>
)

const ScreenshotArt = () => (
  <svg viewBox="0 0 400 280" className="art-svg">
    <rect x="10" y="10" width="380" height="260" rx="4" fill="var(--ink)" />
    <rect x="20" y="20" width="120" height="240" fill="rgba(255,255,255,0.05)" />
    {[40, 70, 100, 130, 160, 190, 220].map((y, i) => (
      <g key={i}>
        <circle cx="30" cy={y} r="3" fill="var(--rust)" />
        <rect x="40" y={y - 4} width="80" height="8" fill="rgba(255,255,255,0.15)" />
      </g>
    ))}
    <rect x="160" y="30" width="220" height="6" fill="rgba(245,239,230,0.4)" />
    {Array.from({ length: 16 }).map((_, i) => (
      <rect key={i} x="160" y={50 + i * 12} width={200 - (i % 3) * 20} height="3" fill="rgba(245,239,230,0.2)" />
    ))}
  </svg>
)

const AbstractArt = () => (
  <svg viewBox="0 0 400 280" className="art-svg">
    <text x="30" y="40" fontSize="14" fontWeight="700" fill="currentColor">The Impact of AI-Assistance</text>
    <text x="30" y="58" fontSize="14" fontWeight="700" fill="currentColor">on Logical Reasoning</text>
    <text x="30" y="80" fontSize="9" fill="var(--ink-mute)">Hickmon, Choe, Park, Xu</text>
    <text x="30" y="115" fontSize="10" fontWeight="600" fill="currentColor">Abstract</text>
    {Array.from({ length: 11 }).map((_, i) => (
      <rect key={i} x="30" y={130 + i * 11} width={340 - (i % 4) * 30} height="3" fill="currentColor" opacity="0.4" />
    ))}
  </svg>
)

const VideoArt = () => (
  <svg viewBox="0 0 400 280" className="art-svg">
    <rect x="20" y="20" width="360" height="240" rx="6" fill="var(--ink-soft)" />
    <circle cx="200" cy="140" r="34" fill="var(--paper)" opacity="0.95" />
    <path d="M190,125 L190,155 L215,140 Z" fill="var(--ink)" />
    <rect x="40" y="230" width="180" height="3" fill="var(--paper)" opacity="0.6" />
    <text x="40" y="248" fontSize="8" fill="var(--paper)" opacity="0.7">DubHacks 2025 | Winner: CareLens — Best Use of Technology</text>
  </svg>
)

const DocumentArt = () => (
  <svg viewBox="0 0 400 280" className="art-svg">
    <rect x="60" y="20" width="280" height="240" fill="var(--paper)" stroke="currentColor" strokeWidth="0.6"/>
    <rect x="60" y="20" width="280" height="32" fill="var(--paper-warm)" />
    <text x="76" y="40" fontSize="10" fontWeight="600" fill="currentColor">Second Goal:</text>
    <text x="76" y="68" fontSize="8" fill="currentColor">By week 10, I will identify and improve one</text>
    <text x="76" y="80" fontSize="8" fill="currentColor">aspect of an existing workflow automation.</text>
    {[100, 140, 180, 220].map((y, i) => (
      <g key={i}>
        <rect x="60" y={y} width="280" height="32" fill="none" stroke="currentColor" strokeWidth="0.6" />
        <rect x="76" y={y + 10} width="80" height="3" fill="currentColor" opacity="0.6"/>
        <rect x="170" y={y + 8} width="160" height="3" fill="currentColor" opacity="0.4"/>
        <rect x="170" y={y + 16} width="140" height="3" fill="currentColor" opacity="0.4"/>
        <rect x="170" y={y + 24} width="120" height="3" fill="currentColor" opacity="0.4"/>
      </g>
    ))}
  </svg>
)

const WebsiteArt = () => (
  <svg viewBox="0 0 400 280" className="art-svg">
    <rect x="20" y="20" width="360" height="240" rx="3" fill="var(--paper-deep)" />
    <g>
      <text x="40" y="50" fontSize="14" fontWeight="700" fill="var(--rust)">TED</text>
      <text x="68" y="50" fontSize="9" fontWeight="700" fill="currentColor">x</text>
      <text x="74" y="50" fontSize="14" fontWeight="600" fill="currentColor">UofW</text>
      <text x="320" y="50" fontSize="8" fill="currentColor">Get Tickets</text>
    </g>
    <text x="40" y="75" fontSize="7" fill="var(--ink-mute)">04.19.2026 | 10:30 AM | Kane Hall | Seattle, WA</text>
    <text x="40" y="155" fontSize="48" fontWeight="100" fill="currentColor" letterSpacing="6" fontFamily="var(--font-display)" fontStyle="italic">IMPRINTS</text>
    <rect x="40" y="180" width="280" height="2" fill="currentColor" opacity="0.4"/>
    <rect x="40" y="190" width="260" height="2" fill="currentColor" opacity="0.4"/>
    <rect x="40" y="200" width="240" height="2" fill="currentColor" opacity="0.4"/>
    <rect x="40" y="225" width="60" height="20" fill="var(--ink)" />
    <text x="70" y="238" textAnchor="middle" fontSize="7" fill="var(--paper)">Get Tickets</text>
  </svg>
)

const PhotoArt = () => (
  <svg viewBox="0 0 400 280" className="art-svg">
    <defs>
      <linearGradient id="photoGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="var(--moss)" />
        <stop offset="100%" stopColor="var(--ink-soft)" />
      </linearGradient>
    </defs>
    <rect x="20" y="20" width="360" height="240" fill="url(#photoGrad)" />
    <circle cx="200" cy="120" r="40" fill="var(--paper)" opacity="0.2" />
    <path d="M120,200 Q200,160 280,200 L280,260 L120,260 Z" fill="var(--ink)" opacity="0.3" />
    <g opacity="0.5">
      {Array.from({ length: 8 }).map((_, i) => (
        <circle key={i} cx={60 + i * 40} cy={230 + (i % 2) * 8} r="3" fill="var(--paper)" />
      ))}
    </g>
  </svg>
)

const DefaultArt = () => (
  <svg viewBox="0 0 400 280" className="art-svg">
    <rect x="20" y="20" width="360" height="240" fill="var(--paper-deep)" stroke="currentColor" />
  </svg>
)
