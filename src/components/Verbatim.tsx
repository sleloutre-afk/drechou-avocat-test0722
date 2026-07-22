export default function Verbatim() {
  return (
    <section style={{ background: '#1a1228', padding: '5rem 2rem' }}>
      <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
        <div className="flex items-center justify-center gap-4" style={{ marginBottom: '3rem' }}>
          <div style={{ width: '50px', height: '1px', background: 'rgba(184,148,122,0.35)' }} />
          <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#b8947a', opacity: 0.7 }} />
          <div style={{ width: '50px', height: '1px', background: 'rgba(184,148,122,0.35)' }} />
        </div>

        <blockquote style={{ margin: 0 }}>
          <p style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(1.3rem, 3vw, 1.85rem)',
            fontStyle: 'italic',
            fontWeight: 400,
            color: '#f5f1ed',
            lineHeight: 1.65,
            letterSpacing: '0.02em',
          }}>
            En droit de la famille, chaque décision touche à l&apos;essentiel.<br className="hidden md:block" />
            Mon rôle est de vous aider à traverser ces moments<br className="hidden md:block" />
            avec clarté et sérénité.
          </p>
          <footer style={{ marginTop: '1.75rem', color: 'rgba(184,148,122,0.7)', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
            Maître Julia Drechou
          </footer>
        </blockquote>

        <div className="flex items-center justify-center gap-4" style={{ marginTop: '3rem' }}>
          <div style={{ width: '35px', height: '1px', background: 'rgba(184,148,122,0.25)' }} />
          <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(184,148,122,0.5)' }} />
          <div style={{ width: '35px', height: '1px', background: 'rgba(184,148,122,0.25)' }} />
        </div>
      </div>
    </section>
  )
}
