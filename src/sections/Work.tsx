import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const projects = [
  {
    name: 'Sentinel Analytics',
    category: 'SaaS Platform',
    description: 'A real-time analytics dashboard processing 2M+ events per day for fintech teams. Built with React, Go, and ClickHouse.',
    metrics: [
      { label: 'Events/day', value: '2M+' },
      { label: 'Latency', value: '<50ms' },
      { label: 'Uptime', value: '99.99%' },
    ],
    accent: '#3B82F6',
    gradient: 'linear-gradient(135deg, #1E3A5F, #0A0A0B)',
  },
  {
    name: 'Harbor Commerce',
    category: 'E-commerce',
    description: 'Headless commerce platform with custom checkout, inventory sync, and a mobile-first PWA that doubled conversion rates.',
    metrics: [
      { label: 'Conversion', value: '+102%' },
      { label: 'Load time', value: '0.8s' },
      { label: 'GMV/yr', value: '$12M' },
    ],
    accent: '#10B981',
    gradient: 'linear-gradient(135deg, #0D3D2E, #0A0A0B)',
  },
  {
    name: 'Atlas Health',
    category: 'Healthcare',
    description: 'HIPAA-compliant patient management system with secure messaging, appointment scheduling, and insurance claim automation.',
    metrics: [
      { label: 'Patients', value: '50K+' },
      { label: 'Claims auto', value: '94%' },
      { label: 'Compliance', value: 'HIPAA' },
    ],
    accent: '#F59E0B',
    gradient: 'linear-gradient(135deg, #4A3A0D, #0A0A0B)',
  },
  {
    name: 'Gridline IoT',
    category: 'IoT Platform',
    description: 'Edge-to-cloud telemetry pipeline connecting 100K+ devices with real-time anomaly detection and predictive maintenance.',
    metrics: [
      { label: 'Devices', value: '100K+' },
      { label: 'Data/day', value: '5TB' },
      { label: 'Anomalies', value: '-87%' },
    ],
    accent: '#8B5CF6',
    gradient: 'linear-gradient(135deg, #2D1B4E, #0A0A0B)',
  },
];

export default function Work() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="work" ref={ref} style={{ padding: '120px 0', position: 'relative', background: 'var(--bg-elevated)' }}>
      <div className="container">
        <div className="reveal" style={{ marginBottom: 64, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <span style={{
              display: 'inline-block',
              fontSize: 13,
              fontWeight: 600,
              color: 'var(--primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: 16,
            }}>Selected work</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Products we're
              <br />
              <span className="gradient-text">proud of.</span>
            </h2>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: 16, maxWidth: 380 }}>
            A snapshot of recent engagements. Every project shipped on time, in scope, and built to last.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(540px, 1fr))', gap: 24 }}>
          {projects.map((project, i) => (
            <div
              key={project.name}
              className={`reveal reveal-delay-${(i % 3) + 1}`}
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-light)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Visual header */}
              <div style={{
                height: 200,
                background: project.gradient,
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />
                <div style={{
                  position: 'absolute',
                  width: 200, height: 200, borderRadius: '50%',
                  background: `radial-gradient(circle, ${project.accent}40, transparent 70%)`,
                  filter: 'blur(30px)',
                }} />
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 48,
                  fontWeight: 700,
                  color: project.accent,
                  opacity: 0.9,
                  position: 'relative',
                  zIndex: 1,
                }}>
                  {project.name.charAt(0)}
                </span>
                <div style={{
                  position: 'absolute',
                  top: 16, right: 16,
                  padding: '6px 12px',
                  borderRadius: 8,
                  background: 'rgba(0,0,0,0.4)',
                  backdropFilter: 'blur(8px)',
                  fontSize: 12,
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                }}>
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: 28 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                  <h3 style={{ fontSize: 20 }}>{project.name}</h3>
                  <ArrowUpRight size={18} style={{ color: 'var(--text-muted)' }} />
                </div>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 24 }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', gap: 32, borderTop: '1px solid var(--border)', paddingTop: 20 }}>
                  {project.metrics.map((metric) => (
                    <div key={metric.label}>
                      <div style={{ fontSize: 22, fontWeight: 700, fontFamily: 'var(--font-display)', color: project.accent }}>
                        {metric.value}
                      </div>
                      <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ textAlign: 'center', marginTop: 48 }}>
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 15,
              fontWeight: 600,
              color: 'var(--primary)',
              transition: 'gap 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.gap = '12px')}
            onMouseLeave={(e) => (e.currentTarget.style.gap = '8px')}
          >
            Start your project
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
