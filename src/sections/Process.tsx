import { useReveal } from '../hooks/useReveal';

const stats = [
  { value: '12+', label: 'Years in business' },
  { value: '180+', label: 'Projects shipped' },
  { value: '40+', label: 'Engineers on the team' },
  { value: '99.9%', label: 'On-time delivery' },
];

const steps = [
  {
    number: '01',
    title: 'Discovery & Architecture',
    description: 'We dive deep into your requirements, constraints, and goals — then design a system architecture that scales with you.',
    duration: '1–2 weeks',
  },
  {
    number: '02',
    title: 'Design & Prototyping',
    description: 'Interactive prototypes, design systems, and technical proofs of concept. You see the product before we build it.',
    duration: '2–3 weeks',
  },
  {
    number: '03',
    title: 'Build & Iterate',
    description: 'Weekly sprints with demos. You see progress every step of the way, with continuous integration and automated testing.',
    duration: '4–16 weeks',
  },
  {
    number: '04',
    title: 'Launch & Scale',
    description: 'We deploy, monitor, and optimize. Then we help your team take over — or stick around as your long-term engineering partner.',
    duration: 'Ongoing',
  },
];

export default function Process() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <>
      {/* Stats bar */}
      <section style={{ padding: '80px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 32,
          }}>
            {stats.map((stat, i) => (
              <div key={stat.label} className={`reveal reveal-delay-${i + 1}`} style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                  fontWeight: 800,
                  fontFamily: 'var(--font-display)',
                  lineHeight: 1,
                  marginBottom: 8,
                }} className="gradient-text">
                  {stat.value}
                </div>
                <div style={{ fontSize: 14, color: 'var(--text-muted)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process section */}
      <section id="process" ref={ref} style={{ padding: '120px 0' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 72 }}>
            <span style={{
              display: 'inline-block',
              fontSize: 13,
              fontWeight: 600,
              color: 'var(--primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: 16,
            }}>How we work</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 16 }}>
              A process built for
              <br />
              <span className="gradient-text">transparency and speed.</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 17, maxWidth: 560, margin: '0 auto' }}>
              No black boxes. No surprises. You always know what we're building, why, and when it'll be ready.
            </p>
          </div>

          <div style={{ position: 'relative', maxWidth: 760, margin: '0 auto' }}>
            {/* Vertical line */}
            <div style={{
              position: 'absolute',
              left: '40px',
              top: 0,
              bottom: 0,
              width: 2,
              background: 'linear-gradient(to bottom, var(--border-light), var(--border), transparent)',
            }} />

            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`reveal reveal-delay-${(i % 4) + 1}`}
                style={{
                  display: 'flex',
                  gap: 32,
                  marginBottom: i === steps.length - 1 ? 0 : 48,
                  position: 'relative',
                }}
              >
                {/* Number circle */}
                <div style={{
                  flexShrink: 0,
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 20,
                    fontWeight: 700,
                    color: 'var(--primary)',
                  }}>
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div style={{ paddingTop: 12, flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}>
                    <h3 style={{ fontSize: 20 }}>{step.title}</h3>
                    <span style={{
                      fontSize: 12,
                      fontWeight: 500,
                      padding: '4px 10px',
                      borderRadius: 6,
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-muted)',
                    }}>
                      {step.duration}
                    </span>
                  </div>
                  <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 520 }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
