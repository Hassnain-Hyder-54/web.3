import { useState } from 'react';
import { Send, CircleCheck as CheckCircle2, Mail, MapPin, Phone } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@forge.dev', href: 'mailto:hello@forge.dev' },
  { icon: MapPin, label: 'Office', value: 'San Francisco, CA', href: null },
  { icon: Phone, label: 'Phone', value: '+1 (415) 555-0142', href: 'tel:+14155550142' },
];

export default function Contact() {
  const ref = useReveal<HTMLDivElement>();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={ref} style={{ padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: '20%', right: '-10%',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(59,130,246,0.08), transparent 70%)',
        filter: 'blur(60px)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
          <span style={{
            display: 'inline-block',
            fontSize: 13,
            fontWeight: 600,
            color: 'var(--primary)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: 16,
          }}>Get in touch</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 16 }}>
            Let's build something
            <br />
            <span className="gradient-text">worth shipping.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 17, maxWidth: 560, margin: '0 auto' }}>
            Tell us about your project. We'll get back to you within 24 hours with next steps.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr',
          gap: 24,
          maxWidth: 920,
          margin: '0 auto',
        }} className="contact-grid">
          {/* Contact info */}
          <div className="reveal reveal-delay-1" style={{
            padding: 32,
            borderRadius: 'var(--radius-lg)',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
          }}>
            <div>
              <h3 style={{ fontSize: 18, marginBottom: 8 }}>Contact details</h3>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Prefer a direct line? Reach us through any of these channels.
              </p>
            </div>
            {contactInfo.map((info) => (
              <div key={info.label} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <info.icon size={18} style={{ color: 'var(--primary)' }} />
                </div>
                <div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 2 }}>{info.label}</div>
                  {info.href ? (
                    <a href={info.href} style={{ fontSize: 15, fontWeight: 500, transition: 'color 0.2s' }}
                       onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
                       onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text)')}>
                      {info.value}
                    </a>
                  ) : (
                    <div style={{ fontSize: 15, fontWeight: 500 }}>{info.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="reveal reveal-delay-2" style={{
            padding: 32,
            borderRadius: 'var(--radius-lg)',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
          }}>
            {submitted ? (
              <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                height: '100%', textAlign: 'center', gap: 16,
              }} className="animate-scale-in">
                <div style={{
                  width: 64, height: 64, borderRadius: '50%',
                  background: 'rgba(16,185,129,0.1)',
                  border: '1px solid rgba(16,185,129,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <CheckCircle2 size={32} style={{ color: 'var(--accent)' }} />
                </div>
                <h3 style={{ fontSize: 20 }}>Message sent!</h3>
                <p style={{ fontSize: 15, color: 'var(--text-secondary)', maxWidth: 320 }}>
                  Thanks for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: '', email: '', company: '', message: '' });
                  }}
                  style={{
                    fontSize: 14, fontWeight: 600, color: 'var(--primary)',
                    padding: '8px 16px', borderRadius: 8,
                    border: '1px solid var(--border)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-row">
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-secondary)', marginBottom: 8, display: 'block' }}>
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Doe"
                      style={{
                        width: '100%', padding: '12px 16px', borderRadius: 10,
                        background: 'var(--bg-elevated)', border: '1px solid var(--border)',
                        color: 'var(--text)', fontSize: 14, outline: 'none',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--primary)')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-secondary)', marginBottom: 8, display: 'block' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jane@company.com"
                      style={{
                        width: '100%', padding: '12px 16px', borderRadius: 10,
                        background: 'var(--bg-elevated)', border: '1px solid var(--border)',
                        color: 'var(--text)', fontSize: 14, outline: 'none',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--primary)')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                    />
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-secondary)', marginBottom: 8, display: 'block' }}>
                    Company
                  </label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Acme Inc."
                    style={{
                      width: '100%', padding: '12px 16px', borderRadius: 10,
                      background: 'var(--bg-elevated)', border: '1px solid var(--border)',
                      color: 'var(--text)', fontSize: 14, outline: 'none',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--primary)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                  />
                </div>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-secondary)', marginBottom: 8, display: 'block' }}>
                    Project details *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about what you're building, your timeline, and budget range."
                    style={{
                      width: '100%', padding: '12px 16px', borderRadius: 10,
                      background: 'var(--bg-elevated)', border: '1px solid var(--border)',
                      color: 'var(--text)', fontSize: 14, outline: 'none',
                      transition: 'border-color 0.2s', resize: 'vertical',
                      lineHeight: 1.6,
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--primary)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                    padding: '14px 24px', borderRadius: 12,
                    background: 'var(--primary)', color: '#fff',
                    fontSize: 15, fontWeight: 600,
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
                  Send message
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
