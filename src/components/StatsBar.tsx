export default function StatsBar() {
  const stats = [
    { value: '2022', label: 'Serment · Barreau de Bordeaux' },
    { value: '3', label: "domaines d'intervention" },
    { value: 'AJ', label: 'Aide juridictionnelle acceptée' },
    { value: 'Bordeaux', label: '2 rue de Pessac · 33000' },
  ]

  return (
    <div style={{ background: '#2a1f3d' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={i} className="py-8 px-4 text-center"
              style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
              <p className="text-xl font-light mb-1" style={{ fontFamily: 'var(--font-playfair)', color: '#b8947a' }}>{s.value}</p>
              <p className="text-xs uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.30)', fontSize: '0.6rem', letterSpacing: '0.1em' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
