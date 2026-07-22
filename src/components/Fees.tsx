export default function Fees() {
  return (
    <section id="honoraires" className="py-24" style={{ background: '#ede8e0' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] mb-3 font-light" style={{ color: '#6a6060' }}>Transparence et accessibilité</p>
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'var(--font-playfair)', color: '#1a1228' }}>
            Honoraires
          </h2>
          <div style={{ width: '40px', height: '2px', background: '#b8947a', margin: '0 auto 1.5rem' }} />
          <p className="text-sm max-w-lg mx-auto leading-relaxed" style={{ color: '#6a6060' }}>
            Les honoraires sont définis en accord avec le client lors du premier entretien. Une convention d&apos;honoraires écrite est établie avant toute intervention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-7 md:col-span-1"
            style={{ background: '#2a1f3d', color: '#f5f1ed' }}>
            <p className="text-xs uppercase tracking-widest mb-3 opacity-70">Premier entretien</p>
            <p className="text-3xl font-light mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
              Sur devis
            </p>
            <p className="text-sm opacity-75 leading-relaxed">Tarif communiqué lors de la prise de rendez-vous, selon la nature et la complexité du dossier.</p>
            <div style={{ height: '1px', background: 'rgba(184,148,122,0.22)', margin: '1.5rem 0' }} />
            <p className="text-xs opacity-60">Convention d&apos;honoraires systématique</p>
            <p className="text-xs mt-2" style={{ color: 'rgba(184,148,122,0.75)' }}>Aide juridictionnelle acceptée</p>
          </div>

          <div className="p-7 md:col-span-2"
            style={{ background: '#fff', border: '1px solid #c8c0b8' }}>
            <p className="text-xs uppercase tracking-widest mb-6" style={{ color: '#6a6060' }}>Modalités de facturation</p>
            <div className="space-y-4">
              {[
                { label: 'Honoraires au temps passé', detail: "Facturation proportionnelle au temps consacré à votre dossier. Un relevé détaillé des diligences est fourni à chaque échéance." },
                { label: 'Forfait dossier', detail: "Pour les dossiers à périmètre clairement défini (rédaction de convention de divorce, recours simple), un forfait global peut être proposé en amont." },
                { label: "Aide juridictionnelle", detail: "Maître Drechou accepte les bénéficiaires de l'aide juridictionnelle totale ou partielle. Vos honoraires peuvent être pris en charge par l'État selon vos ressources." },
                { label: "Convention d'honoraires", detail: "Conformément aux règles déontologiques du Barreau de Bordeaux, une convention d'honoraires écrite est établie avant toute intervention." },
              ].map(f => (
                <div key={f.label} className="flex gap-4 items-start">
                  <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#b8947a', marginTop: '0.45rem', flexShrink: 0 }} />
                  <div>
                    <p className="text-sm font-medium mb-1" style={{ color: '#1a1228' }}>{f.label}</p>
                    <p className="text-xs leading-relaxed" style={{ color: '#6a6060' }}>{f.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <a href="/#contact"
            className="inline-flex items-center gap-3 px-8 py-4 text-sm font-medium hover:opacity-90 transition-opacity"
            style={{ background: '#2a1f3d', color: '#f5f1ed', letterSpacing: '0.05em' }}>
            Prendre rendez-vous
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  )
}
