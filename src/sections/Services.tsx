import { Code as Code2, Database, Cloud, Smartphone, Gauge, GitBranch } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const services = [
  {
    icon: Code2,
    title: 'Web Application Development',
    description: 'Production-grade web apps built with React, TypeScript, and modern APIs. From dashboards to full SaaS platforms.',
    tags: ['React', 'TypeScript', 'Node.js'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Cross-platform mobile apps that feel native on every device. Ship to iOS and Android from a single codebase.',
    tags: ['React Native', 'iOS', 'Android'],
  },
  {
    icon: Database,
    title: 'Backend & Database Design',
    description: 'Scalable data architectures, API design, and infrastructure that handles millions of requests without breaking a sweat.',
    tags: ['PostgreSQL', 'GraphQL', 'Redis'],
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'CI/CD pipelines, containerization, and cloud infrastructure that keeps your product fast, reliable, and cost-efficient.',
    tags: ['AWS', 'Docker', 'Kubernetes'],
  },
  {
    icon: Gauge,
    title: 'Performance Engineering',
    description: 'Profile, optimize, and monitor. We squeeze every millisecond out of your stack so users never wait.',
    tags: ['Profiling', 'Caching', 'CDN'],
  },
  {
    icon: GitBranch,
    title: 'Technical Consulting',
    description: 'Architecture reviews, code audits, and team mentoring to level up your engineering organization.',
    tags: ['Architecture', 'Code Review', 'Mentoring'],
  },
];

export default function Services() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="services" ref={ref} style={{ padding: '120px 0', position: 'relative' }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
          <span style={{
            display: 'inline-block',
            fontSize: 13,
            fontWeight: 600,
            color: 'var(--primary)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: 16,
          }}>What we do</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 16 }}>
            Engineering services that
            <br />
            <span className="gradient-text">cover the full stack.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 17, maxWidth: 560, margin: '0 auto' }}>
            From architecture to deployment, we handle every layer of your product so you can focus on your business.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: 20,
        }}>
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`reveal reveal-delay-${(i % 5) + 1}`}
              style={{
                padding: 32,
                borderRadius: 'var(--radius-lg)',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-light)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 20,
              }}>
                <service.icon size={22} style={{ color: 'var(--primary)' }} />
              </div>
              <h3 style={{ fontSize: 18, marginBottom: 12 }}>{service.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 20 }}>
                {service.description}
              </p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      padding: '4px 10px',
                      borderRadius: 6,
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
