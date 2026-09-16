const footerLinks = {
  Services: ['Web Development', 'Mobile Apps', 'Cloud & DevOps', 'Consulting'],
  Company: ['About', 'Team', 'Careers', 'Blog'],
  Resources: ['Case Studies', 'Open Source', 'Documentation', 'Status'],
};

export default function Footer() {
  return (
    <footer style={{
      padding: '80px 0 40px',
      borderTop: '1px solid var(--border)',
      background: 'var(--bg)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 3fr',
          gap: 64,
          marginBottom: 64,
        }} className="footer-grid">
          {/* Brand */}
          <div>
            <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 8, background: 'var(--bg-elevated)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '1px solid var(--border)',
              }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--primary)' }}>F</span>
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20 }}>Forge</span>
            </a>
            <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 320, marginBottom: 24 }}>
              A software engineering studio building reliable, scalable products for ambitious teams. Based in San Francisco, working worldwide.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {['GitHub', 'LinkedIn', 'Twitter', 'Dribbble'].map((social) => (
                <a
                  key={social}
                  href="#"
                  style={{
                    width: 36, height: 36, borderRadius: 8,
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 12, fontWeight: 500, color: 'var(--text-muted)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--primary)';
                    e.currentTarget.style.color = 'var(--primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.color = 'var(--text-muted)';
                  }}
                >
                  {social.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 32,
          }} className="footer-links">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>
                  {category}
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        style={{
                          fontSize: 14,
                          color: 'var(--text-secondary)',
                          transition: 'color 0.2s',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: 32,
          borderTop: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
        }}>
          <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>
            &copy; 2026 Forge Software Engineering. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            <a href="#" style={{ fontSize: 13, color: 'var(--text-muted)', transition: 'color 0.2s' }}
               onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
               onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>
              Privacy
            </a>
            <a href="#" style={{ fontSize: 13, color: 'var(--text-muted)', transition: 'color 0.2s' }}
               onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
               onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>
              Terms
            </a>
            <a href="#" style={{ fontSize: 13, color: 'var(--text-muted)', transition: 'color 0.2s' }}
               onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
               onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>
              Security
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .footer-links { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  );
}
