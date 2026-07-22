import Link from 'next/link'
import { sortedArticles } from '@/lib/articles'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Ressources — Cabinet Julia Drechou, Avocate Bordeaux',
  description: "Articles pratiques sur le droit de la famille, l'autorité parentale et les conflits locatifs.",
}

export default function RessourcesPage() {
  const categories = Array.from(new Set(sortedArticles.map(a => a.category)))

  return (
    <>
      <Navbar />
      <main style={{ background: '#f5f1ed', minHeight: '100vh' }}>
        <div className="pt-36 pb-20 px-6 max-w-5xl mx-auto">
          <div className="mb-14">
            <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: '#b8947a' }}>Publications</p>
            <h1 className="text-5xl font-light mb-4" style={{ fontFamily: 'var(--font-playfair)', color: '#1a1228' }}>
              Ressources
            </h1>
            <div style={{ width: '40px', height: '2px', background: '#b8947a', marginBottom: '1.5rem' }} />
            <p className="text-sm leading-relaxed" style={{ color: '#6a6060', maxWidth: '500px' }}>
              Articles pratiques pour mieux connaître vos droits en droit de la famille, autorité parentale et contentieux locatifs.
            </p>
          </div>

          {categories.map(cat => {
            const catArticles = sortedArticles.filter(a => a.category === cat)
            return (
              <div key={cat} className="mb-14">
                <div className="flex items-center gap-4 mb-6">
                  <div style={{ width: '4px', height: '18px', background: '#b8947a', flexShrink: 0 }} />
                  <h2 className="text-lg font-light" style={{ fontFamily: 'var(--font-playfair)', color: '#2a1f3d' }}>{cat}</h2>
                  <div className="flex-1" style={{ height: '1px', background: '#c8c0b8' }} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {catArticles.map(a => (
                    <Link key={a.slug} href={`/ressources/${a.slug}`}
                      className="pub-card flex flex-col overflow-hidden"
                      style={{ background: '#fff', border: '1px solid #c8c0b8', textDecoration: 'none' }}>
                      <div style={{ height: '4px', background: '#b8947a' }} />
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="text-base font-light mb-3 leading-snug flex-1"
                          style={{ fontFamily: 'var(--font-playfair)', color: '#1a1228' }}>
                          {a.title}
                        </h3>
                        <p className="text-xs leading-relaxed mb-4" style={{ color: '#6a6060' }}>{a.excerpt}</p>
                        <div className="flex items-center justify-between mt-auto pt-3" style={{ borderTop: '1px solid #ede8e0' }}>
                          <span className="text-xs" style={{ color: '#6a6060' }}>{a.date}</span>
                          <span className="text-xs" style={{ color: '#b8947a' }}>Lire →</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </main>
      <Footer />
    </>
  )
}
