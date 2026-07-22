import { notFound } from 'next/navigation'
import Link from 'next/link'
import { sortedArticles } from '@/lib/articles'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export function generateStaticParams() {
  return sortedArticles.map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = sortedArticles.find(a => a.slug === slug)
  if (!article) return {}
  return {
    title: `${article.title} — Cabinet Julia Drechou`,
    description: article.excerpt,
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = sortedArticles.find(a => a.slug === slug)
  if (!article) notFound()

  const paragraphs = article.content.split('\n\n')

  return (
    <>
      <Navbar />
      <main style={{ background: '#f5f1ed', minHeight: '100vh' }}>
        <div className="pt-36 pb-24 px-6 max-w-3xl mx-auto">
          <Link href="/ressources"
            className="hover-or inline-flex items-center gap-2 text-xs mb-10"
            style={{ color: '#b8947a', textDecoration: 'none', letterSpacing: '0.05em' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
            Toutes les ressources
          </Link>

          <div className="mb-3">
            <span className="text-xs px-3 py-1"
              style={{ background: 'rgba(184,148,122,0.12)', color: '#b8947a', letterSpacing: '0.04em' }}>
              {article.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-light mb-4 leading-tight"
            style={{ fontFamily: 'var(--font-playfair)', color: '#1a1228' }}>
            {article.title}
          </h1>

          <div style={{ height: '2px', width: '40px', background: '#b8947a', marginBottom: '1rem' }} />

          <p className="text-xs mb-12" style={{ color: '#6a6060' }}>Publié le {article.date}</p>

          <div className="prose-drechou space-y-5">
            {paragraphs.map((p, i) => {
              if (p.startsWith('## ')) {
                return (
                  <h2 key={i} className="text-xl font-light mt-8 mb-3"
                    style={{ fontFamily: 'var(--font-playfair)', color: '#2a1f3d' }}>
                    {p.replace('## ', '')}
                  </h2>
                )
              }
              if (p.startsWith('**') && p.endsWith('**')) {
                return (
                  <p key={i} className="text-sm font-medium" style={{ color: '#2a1f3d' }}>
                    {p.replace(/\*\*/g, '')}
                  </p>
                )
              }
              if (p.startsWith('1. ') || p.match(/^\d+\./)) {
                const items = p.split('\n').filter(Boolean)
                return (
                  <ol key={i} className="space-y-2 pl-4 list-decimal" style={{ color: '#3a3535' }}>
                    {items.map((item, j) => (
                      <li key={j} className="text-sm leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: item.replace(/^\d+\.\s+/, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                    ))}
                  </ol>
                )
              }
              if (p.startsWith('- ')) {
                const items = p.split('\n').filter(l => l.startsWith('- '))
                return (
                  <ul key={i} className="space-y-2 pl-4" style={{ color: '#3a3535' }}>
                    {items.map((item, j) => (
                      <li key={j} className="text-sm leading-relaxed flex gap-2">
                        <span style={{ color: '#b8947a', flexShrink: 0 }}>—</span>
                        <span dangerouslySetInnerHTML={{ __html: item.replace(/^- /, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                      </li>
                    ))}
                  </ul>
                )
              }
              return (
                <p key={i} className="text-sm leading-relaxed" style={{ color: '#3a3535' }}
                  dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              )
            })}
          </div>

          <div className="mt-16 p-8" style={{ background: '#2a1f3d', borderLeft: '3px solid #b8947a' }}>
            <p className="text-sm mb-5 leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Cet article est fourni à titre informatif. Pour toute question sur votre situation personnelle, prenez rendez-vous avec Maître Drechou.
            </p>
            <a href="tel:+33564311240"
              className="inline-flex items-center gap-3 px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
              style={{ background: '#b8947a', color: '#f5f1ed' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.4 2 2 0 0 1 3.55 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.66a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              05 64 31 12 40
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
