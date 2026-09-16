import { ArrowRight, Code as Code2, Shield, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', paddingTop: 72 }}>
      {/* Background grid */}
      <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />

      {/* Glow orbs */}
      <div
        className="animate-pulse-glow"
        style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.15), transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="animate-pulse-glow"
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '0%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16,185,129,0.1), transparent 70%)',
          filter: 'blur(40px)',
          animationDelay: '2s',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
          {/* Badge */}
          <div
            className="animate-fade-in-up"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '8px 16px',
              borderRadius: 100,
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border)',
              marginBottom: 32,
              fontSize: 13,
              fontWeight: 500,
              color: 'var(--text-secondary)',
            }}
          >
            <span style={{
              width: 8, height: 8, borderRadius: '50%',
              background: 'var(--accent)',
              boxShadow: '0 0 8px var(--accent)',
            }} />
            Available for new projects — Q4 2026
          </div>

          {/* Heading */}
          <h1
            className="animate-fade-in-up"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 800,
              marginBottom: 24,
              animationDelay: '0.1s',
              opacity: 0,
            }}
          >
            We build software that
            <br />
            <span className="gradient-text">engineers trust.</span>
          </h1>

          {/* Subheading */}
          <p
            className="animate-fade-in-up"
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              color: 'var(--text-secondary)',
              maxWidth: 600,
              margin: '0 auto 40px',
              lineHeight: 1.7,
              animationDelay: '0.2s',
              opacity: 0,
            }}
          >
            Forge is a software engineering studio helping teams design, build, and scale
            reliable products — from first commit to production.
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-in-up"
            style={{
              display: 'flex',
              gap: 16,
              justifyContent: 'center',
              flexWrap: 'wrap',
              animationDelay: '0.3s',
              opacity: 0,
            }}
          >
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '14px 28px',
                borderRadius: 12,
                background: 'var(--primary)',
                color: '#fff',
                fontSize: 15,
                fontWeight: 600,
                transition: 'all 0.2s',
                boxShadow: '0 4px 20px rgba(59,130,246,0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 28px rgba(59,130,246,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(59,130,246,0.3)';
              }}
            >
              Start a project
              <ArrowRight size={18} />
            </a>
            <a
              href="#work"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '14px 28px',
                borderRadius: 12,
                background: 'transparent',
                border: '1px solid var(--border-light)',
                color: 'var(--text)',
                fontSize: 15,
                fontWeight: 600,
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--primary)';
                e.currentTarget.style.background = 'rgba(59,130,246,0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-light)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              See our work
            </a>
          </div>

          {/* Feature pills */}
          <div
            className="animate-fade-in-up"
            style={{
              display: 'flex',
              gap: 24,
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginTop: 56,
              animationDelay: '0.4s',
              opacity: 0,
            }}
          >
            {[
              { icon: Code2, label: 'Full-stack development' },
              { icon: Shield, label: 'Security-first' },
              { icon: Zap, label: 'Built for scale' },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  fontSize: 13,
                  color: 'var(--text-muted)',
                }}
              >
                <item.icon size={16} style={{ color: 'var(--accent)' }} />
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 100,
          background: 'linear-gradient(to bottom, transparent, var(--bg))',
          pointerEvents: 'none',
        }}
      />
    </section>
  );
}
