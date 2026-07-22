export default function Domains() {
  const domains = [
    {
      id: '01',
      title: 'Divorce & séparation',
      subtitle: 'Amiable · Contentieux · Liquidation',
      desc: "Maître Drechou accompagne les époux à chaque étape de la séparation : divorce par consentement mutuel, divorce pour faute ou pour altération définitive du lien conjugal, liquidation du régime matrimonial et partage des biens communs.",
      items: [
        "Divorce par consentement mutuel sans juge",
        "Divorce contentieux (faute, altération du lien conjugal)",
        "Séparation de corps",
        "Liquidation du régime matrimonial",
        "Pension alimentaire et prestation compensatoire",
      ],
      icon: '/famille.svg',
      highlight: true,
    },
    {
      id: '02',
      title: "Autorité parentale",
      subtitle: "Garde · Résidence · Droits de visite",
      desc: "La question de la résidence des enfants et de l'exercice de l'autorité parentale est au cœur des séparations. Maître Drechou défend l'intérêt de l'enfant tout en préservant les droits de chaque parent, devant le juge aux affaires familiales ou par accord amiable.",
      items: [
        "Résidence alternée et résidence principale",
        "Droits de visite et d'hébergement",
        "Modification des décisions de justice",
        "Déplacement illicite d'enfant",
        "Contribution à l'entretien et à l'éducation",
      ],
      icon: '/justice.svg',
      highlight: false,
    },
    {
      id: '03',
      title: "Locataire · Propriétaire",
      subtitle: "Baux · Loyers · Expulsion",
      desc: "Qu'il s'agisse d'un conflit entre locataire et bailleur, d'impayés de loyers, de vices du logement ou d'une procédure d'expulsion, Maître Drechou intervient pour défendre vos droits et trouver une issue rapide et adaptée à votre situation.",
      items: [
        "Recouvrement de loyers impayés",
        "Procédure d'expulsion locative",
        "Contentieux sur l'état des lieux et le dépôt de garantie",
        "Vices cachés et logement indécent",
        "Résiliation de bail et congé pour vente",
      ],
      icon: '/locataire.svg',
      highlight: false,
    },
  ]

  return (
    <section id="domaines" className="py-24" style={{ background: '#2a1f3d' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] mb-3 font-light" style={{ color: 'rgba(184,148,122,0.6)' }}>
            Champs d&apos;action
          </p>
          <h2 className="text-4xl font-light mb-4 text-white" style={{ fontFamily: 'var(--font-playfair)' }}>
            Domaines d&apos;intervention
          </h2>
          <div style={{ width: '40px', height: '2px', background: '#b8947a', margin: '0 auto 1.5rem' }} />
          <p className="text-sm max-w-lg mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.38)' }}>
            Une pratique centrée sur les personnes — accompagnement dans les moments de vie les plus délicats, avec rigueur et bienveillance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {domains.map(d => (
            <div key={d.id} className="domain-card overflow-hidden"
              style={{
                background: d.highlight ? '#1a1228' : 'rgba(255,255,255,0.04)',
                border: d.highlight ? '1px solid rgba(184,148,122,0.4)' : '1px solid rgba(255,255,255,0.08)',
              }}>
              <div className="p-7">
                <div className="flex items-start gap-4 mb-5">
                  <div className="flex-shrink-0 flex items-center justify-center"
                    style={{ width: '44px', height: '44px', background: d.highlight ? 'rgba(184,148,122,0.14)' : 'rgba(184,148,122,0.08)' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={d.icon} alt={d.title} style={{ width: '24px', height: '24px', filter: 'brightness(0) invert(1)', opacity: d.highlight ? 0.9 : 0.60 }} />
                  </div>
                  <div>
                    <span className="text-xs" style={{ color: d.highlight ? 'rgba(184,148,122,0.55)' : 'rgba(184,148,122,0.40)', letterSpacing: '0.08em' }}>{d.id}</span>
                    <h3 className="font-light text-xl leading-snug text-white" style={{ fontFamily: 'var(--font-playfair)' }}>{d.title}</h3>
                    <p className="text-xs mt-0.5" style={{ color: d.highlight ? 'rgba(184,148,122,0.60)' : 'rgba(255,255,255,0.35)', letterSpacing: '0.06em' }}>{d.subtitle}</p>
                  </div>
                </div>

                <p className="text-sm leading-relaxed mb-5" style={{ color: d.highlight ? 'rgba(255,255,255,0.72)' : 'rgba(255,255,255,0.42)' }}>{d.desc}</p>

                <div style={{ borderTop: `1px solid ${d.highlight ? 'rgba(184,148,122,0.14)' : 'rgba(255,255,255,0.07)'}`, paddingTop: '1.25rem' }}>
                  <ul className="space-y-1.5">
                    {d.items.map(item => (
                      <li key={item} className="flex items-center gap-2 text-xs" style={{ color: d.highlight ? 'rgba(255,255,255,0.58)' : 'rgba(255,255,255,0.32)' }}>
                        <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: d.highlight ? 'rgba(184,148,122,0.55)' : 'rgba(184,148,122,0.35)', flexShrink: 0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="/#contact"
            className="inline-flex items-center gap-3 px-8 py-4 text-sm font-medium hover:opacity-90 transition-opacity"
            style={{ background: '#b8947a', color: '#f5f1ed', letterSpacing: '0.05em' }}>
            Prendre rendez-vous
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  )
}
