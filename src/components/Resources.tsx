import Link from 'next/link'
import { articles } from '@/lib/articles'

export default function Resources() {
  const displayed = articles.slice(0, 3)

  return (
    <section id="ressources" className="py-24" style={{ background: '#f5f1ed' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] mb-3 font-light" style={{ color: '#6a6060' }}>Publications</p>
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'var(--font-playfair)', color: '#1a1228' }}>
            Ressources
          </h2>
          <div style={{ width: '40px', height: '2px', background: '#b8947a', margin: '0 auto 1.5rem' }} />
          <p className="text-sm max-w-lg mx-auto leading-relaxed" style={{ color: '#6a6060' }}>
            Articles pratiques sur le droit de la famille, l&apos;autorité parentale et les conflits locatifs pour mieux connaître vos droits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {displayed.map(a => (
            <Link key={a.slug} href={`/ressources/${a.slug}`}
              className="pub-card flex flex-col overflow-hidden"
              style={{ background: '#fff', border: '1px solid #c8c0b8', textDecoration: 'none' }}>
              <div style={{ height: '4px', background: '#b8947a' }} />
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs px-3 py-1 mb-4 self-start"
                  style={{ background: 'rgba(184,148,122,0.10)', color: '#b8947a', letterSpacing: '0.04em' }}>
                  {a.category}
                </span>
                <h3 className="text-base font-light mb-3 leading-snug flex-1"
                  style={{ fontFamily: 'var(--font-playfair)', color: '#1a1228' }}>
                  {a.title}
                </h3>
                <p className="text-xs leading-relaxed mb-4" style={{ color: '#6a6060' }}>{a.excerpt}</p>
                <div className="flex items-center justify-between mt-auto pt-3" style={{ borderTop: '1px solid #c8c0b8' }}>
                  <span className="text-xs" style={{ color: '#6a6060' }}>{a.date}</span>
                  <span className="text-xs" style={{ color: '#b8947a' }}>Lire →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/ressources"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm hover:opacity-80 transition-opacity"
            style={{ border: '1px solid rgba(184,148,122,0.4)', color: '#b8947a', letterSpacing: '0.04em', textDecoration: 'none' }}>
            Voir tous les articles
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
