import { Star, Quote } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const testimonials = [
  {
    quote: "Forge delivered our platform in half the time we expected, at a quality level that exceeded our internal team's. They're now our go-to engineering partner.",
    author: 'Alex Whitfield',
    role: 'CTO, Sentinel Analytics',
    initials: 'AW',
    color: '#3B82F6',
  },
  {
    quote: "The level of technical rigor Forge brought was unmatched. They caught architecture issues that would have cost us months. Worth every penny.",
    author: 'Maria Santos',
    role: 'VP Engineering, Harbor Commerce',
    initials: 'MS',
    color: '#10B981',
  },
  {
    quote: "They didn't just write code — they understood our business. The result was a product that fit our users perfectly and scaled without rewrites.",
    author: 'David Park',
    role: 'Founder, Atlas Health',
    initials: 'DP',
    color: '#F59E0B',
  },
];

export default function Testimonials() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section ref={ref} style={{ padding: '120px 0' }}>
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
          }}>Testimonials</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 16 }}>
            What clients
            <br />
            <span className="gradient-text">say about us.</span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: 20,
        }}>
          {testimonials.map((t, i) => (
            <div
              key={t.author}
              className={`reveal reveal-delay-${(i % 3) + 1}`}
              style={{
                padding: 32,
                borderRadius: 'var(--radius-lg)',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
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
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <Quote size={32} style={{ color: 'var(--border-light)' }} />
                <div style={{ display: 'flex', gap: 2 }}>
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={14} fill={t.color} style={{ color: t.color }} />
                  ))}
                </div>
              </div>
              <p style={{ fontSize: 15, color: 'var(--text)', lineHeight: 1.7, flex: 1 }}>
                "{t.quote}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 16, borderTop: '1px solid var(--border)' }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: `linear-gradient(135deg, ${t.color}30, ${t.color}10)`,
                  border: `1px solid ${t.color}40`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700, color: t.color }}>
                    {t.initials}
                  </span>
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{t.author}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
