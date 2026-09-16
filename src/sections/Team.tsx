import { Linkedin, Github, Twitter } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const team = [
  {
    name: 'Sarah Chen',
    role: 'Founder & Principal Engineer',
    bio: 'Former staff engineer at Stripe. 15 years building distributed systems and leading engineering teams.',
    initials: 'SC',
    color: '#3B82F6',
  },
  {
    name: 'Marcus Okonkwo',
    role: 'Head of Platform Engineering',
    bio: 'Built infrastructure at scale at Cloudflare and Datadog. Expert in cloud architecture and reliability.',
    initials: 'MO',
    color: '#10B981',
  },
  {
    name: 'Priya Raman',
    role: 'Lead Frontend Engineer',
    bio: 'Design systems specialist with a passion for accessible, performant interfaces. Ex-Figma.',
    initials: 'PR',
    color: '#F59E0B',
  },
  {
    name: 'Tomás Rivera',
    role: 'Lead Backend Engineer',
    bio: 'API architect and database optimizer. Shipped systems processing billions of requests at Twilio.',
    initials: 'TR',
    color: '#8B5CF6',
  },
];

export default function Team() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="team" ref={ref} style={{ padding: '120px 0', background: 'var(--bg-elevated)' }}>
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
          }}>The team</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 16 }}>
            Engineers who've
            <br />
            <span className="gradient-text">been there.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 17, maxWidth: 560, margin: '0 auto' }}>
            We've shipped at Stripe, Cloudflare, Twilio, and Figma. Now we bring that experience to your product.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: 20,
        }}>
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`reveal reveal-delay-${(i % 4) + 1}`}
              style={{
                padding: 32,
                borderRadius: 'var(--radius-lg)',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-light)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Avatar */}
              <div style={{
                width: 64, height: 64, borderRadius: 16,
                background: `linear-gradient(135deg, ${member.color}30, ${member.color}10)`,
                border: `1px solid ${member.color}40`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 20,
              }}>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 22,
                  fontWeight: 700,
                  color: member.color,
                }}>
                  {member.initials}
                </span>
              </div>

              <h3 style={{ fontSize: 17, marginBottom: 4 }}>{member.name}</h3>
              <p style={{ fontSize: 13, color: member.color, fontWeight: 500, marginBottom: 12 }}>{member.role}</p>
              <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 20 }}>
                {member.bio}
              </p>

              <div style={{ display: 'flex', gap: 12 }}>
                {[Linkedin, Github, Twitter].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    style={{
                      width: 32, height: 32, borderRadius: 8,
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--border)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = member.color;
                      e.currentTarget.style.color = member.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border)';
                      e.currentTarget.style.color = 'var(--text-muted)';
                    }}
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
