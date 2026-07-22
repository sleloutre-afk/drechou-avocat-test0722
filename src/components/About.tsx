import Image from 'next/image'

export default function About() {
  return (
    <section id="cabinet" className="py-24" style={{ background: '#f5f1ed' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] mb-3 font-light" style={{ color: '#6a6060' }}>Le cabinet</p>
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'var(--font-playfair)', color: '#1a1228' }}>
            Maître Julia Drechou
          </h2>
          <div style={{ width: '40px', height: '2px', background: '#b8947a', margin: '0 auto 1.5rem' }} />
          <p className="text-base max-w-2xl mx-auto leading-relaxed" style={{ color: '#555' }}>
            Avocate au Barreau de Bordeaux depuis 2022, Julia Drechou consacre sa pratique au droit des personnes et de la famille, à l'autorité parentale et aux conflits locatifs, avec une attention particulière portée à chaque situation personnelle.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row overflow-hidden mb-10"
          style={{ background: '#fff', border: '1px solid #c8c0b8', boxShadow: '0 2px 16px rgba(13,9,26,0.07)' }}>
          <div className="relative flex-shrink-0" style={{ width: '300px', minHeight: '380px' }}>
            <Image src="/drechou.png" alt="Maître Julia Drechou" fill className="object-cover object-top" />
          </div>
          <div className="flex flex-col justify-center p-8 lg:p-12">
            <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#6a6060' }}>Avocate au Barreau de Bordeaux</p>
            <h3 className="text-3xl font-light mb-4" style={{ fontFamily: 'var(--font-playfair)', color: '#1a1228' }}>
              Maître Julia Drechou
            </h3>
            <div className="flex gap-2 flex-wrap mb-5">
              {['Serment 2022', 'Droit de la famille', 'Baux d\'habitation', 'Aide juridictionnelle'].map(tag => (
                <span key={tag} className="text-xs px-3 py-1 rounded-full"
                  style={{ background: 'rgba(184,148,122,0.08)', color: '#b8947a', border: '1px solid rgba(184,148,122,0.25)' }}>
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#555' }}>
              Titulaire d'un Master 2 en Droit des personnes et des familles de l'Université de Bordeaux et d'un Master 1 en Droit privé général, Julia Drechou a préparé le CRFPA à l'Université Paris I Panthéon-Sorbonne avant d'intégrer l'École de Formation du Barreau (EFB) de Paris.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#555' }}>
              Elle a exercé près de trois ans au sein du cabinet <strong>Diane Sussman Avocat</strong> à Paris, spécialisé en droit de la famille, avant de s&apos;installer à Bordeaux en septembre 2025 pour ouvrir son propre cabinet. Elle accueille les bénéficiaires de l&apos;aide juridictionnelle.
            </p>
            <div className="mt-6 pt-5 flex flex-wrap gap-x-8 gap-y-2" style={{ borderTop: '1px solid #c8c0b8' }}>
              <a href="tel:+33564311240" className="hover-or flex items-center gap-1.5 text-xs" style={{ color: '#6a6060' }}>
                <PhoneIcon />05 64 31 12 40
              </a>
              <a href="mailto:jdrechou-avocat@outlook.fr" className="hover-or flex items-center gap-1.5 text-xs" style={{ color: '#6a6060' }}>
                <MailIcon />jdrechou-avocat@outlook.fr
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { title: 'Consultation au cabinet', detail: '2 rue de Pessac · Bordeaux', sub: 'Sur rendez-vous · Lun–Ven' },
            { title: 'Aide juridictionnelle', detail: 'Totale et partielle acceptée', sub: 'Prise en charge par l\'État selon ressources' },
            { title: 'Domaines exclusifs', detail: 'Famille · Locatif · Parentalité', sub: 'Une pratique centrée sur les personnes' },
          ].map((item, i) => (
            <div key={i} className="p-5" style={{ background: '#fff', border: '1px solid #c8c0b8' }}>
              <div style={{ width: '18px', height: '2px', background: '#b8947a', marginBottom: '0.75rem' }} />
              <p className="text-sm font-medium mb-1" style={{ color: '#1a1228' }}>{item.title}</p>
              <p className="text-xs font-medium mb-1" style={{ color: '#b8947a' }}>{item.detail}</p>
              <p className="text-xs leading-relaxed" style={{ color: '#888' }}>{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PhoneIcon() {
  return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.4 2 2 0 0 1 3.55 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.66a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
}
function MailIcon() {
  return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
}
