import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#0d091a', borderTop: '1px solid rgba(184,148,122,0.10)' }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="mb-4">
              <span style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.1rem', fontWeight: 400, color: 'rgba(245,241,237,0.75)', letterSpacing: '0.06em', fontStyle: 'italic' }}>
                Julia Drechou
              </span>
              <p className="text-xs mt-1" style={{ color: 'rgba(184,148,122,0.55)', letterSpacing: '0.1em' }}>Avocate · Barreau de Bordeaux</p>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.28)' }}>
              Cabinet dédié au droit de la famille, à l&apos;autorité parentale et aux conflits locatifs — accompagnement personnalisé avec aide juridictionnelle acceptée.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest mb-5" style={{ color: 'rgba(255,255,255,0.28)' }}>Navigation</p>
            <div className="space-y-2.5">
              {[
                { label: 'Le Cabinet', href: '/#cabinet' },
                { label: 'Domaines', href: '/#domaines' },
                { label: 'Honoraires', href: '/#honoraires' },
                { label: 'Ressources', href: '/ressources' },
                { label: 'Contact', href: '/#contact' },
              ].map(link => (
                <div key={link.href}>
                  <Link href={link.href} className="hover-or text-xs" style={{ color: 'rgba(255,255,255,0.42)', textDecoration: 'none' }}>
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest mb-5" style={{ color: 'rgba(255,255,255,0.28)' }}>Contact</p>
            <div className="space-y-3">
              <a href="tel:+33564311240" className="hover-or flex items-center gap-2 text-xs" style={{ color: 'rgba(255,255,255,0.42)', textDecoration: 'none' }}>
                <PhoneIcon />05 64 31 12 40
              </a>
              <a href="mailto:jdrechou-avocat@outlook.fr" className="hover-or flex items-center gap-2 text-xs break-all" style={{ color: 'rgba(255,255,255,0.42)', textDecoration: 'none' }}>
                <MailIcon />jdrechou-avocat@outlook.fr
              </a>
              <p className="flex items-start gap-2 text-xs" style={{ color: 'rgba(255,255,255,0.28)' }}>
                <MapPinIcon />
                <span>2 rue de Pessac<br />33000 Bordeaux</span>
              </p>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.18)' }}>Sur rendez-vous · Lun–Ven</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.22)' }}>
            &copy; {year} · Maître Julia Drechou · Tous droits réservés
          </p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.18)' }}>
            Barreau de Bordeaux
          </p>
        </div>
      </div>
    </footer>
  )
}

function PhoneIcon() { return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.4 2 2 0 0 1 3.55 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.66a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> }
function MailIcon() { return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> }
function MapPinIcon() { return <svg width="12" height="12" style={{ marginTop: '2px', flexShrink: 0 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg> }
