import Image from 'next/image'
import { Monogram } from './Navbar'

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen text-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <Image src="/hero.png" alt="Cabinet Julia Drechou" fill className="object-cover object-center ken-burns" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, rgba(13,9,26,0.97) 0%, rgba(26,18,40,0.92) 45%, rgba(42,31,61,0.80) 100%)' }} />
      </div>

      <div className="relative text-center px-6 max-w-3xl mx-auto" style={{ paddingTop: '70px' }}>
        <div className="flex justify-center mb-10">
          <Monogram size={60} />
        </div>

        <div className="flex items-center justify-center gap-4 mb-8">
          <div style={{ width: '48px', height: '1px', background: 'rgba(184,148,122,0.45)' }} />
          <span className="text-xs uppercase tracking-[0.35em]" style={{ color: 'rgba(184,148,122,0.8)' }}>
            Avocate · Barreau de Bordeaux
          </span>
          <div style={{ width: '48px', height: '1px', background: 'rgba(184,148,122,0.45)' }} />
        </div>

        <h1 className="font-light leading-none mb-2" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2rem, 5.5vw, 3.8rem)' }}>
          Julia
        </h1>
        <h1 className="font-light leading-none mb-10" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(3rem, 8vw, 5.5rem)', color: '#b8947a' }}>
          Drechou
        </h1>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {['Droit de la famille', 'Divorce & séparation', 'Autorité parentale', 'Locataire · Propriétaire'].map(d => (
            <span key={d} className="text-xs px-3 py-1.5"
              style={{ border: '1px solid rgba(184,148,122,0.28)', color: 'rgba(255,255,255,0.58)', letterSpacing: '0.06em' }}>
              {d}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="tel:+33564311240"
            className="flex items-center gap-3 px-8 py-4 text-sm font-medium hover:opacity-90 transition-opacity w-full sm:w-auto justify-center"
            style={{ background: '#b8947a', color: '#f5f1ed', letterSpacing: '0.06em' }}>
            <PhoneIcon />05 64 31 12 40
          </a>
          <a href="mailto:jdrechou-avocat@outlook.fr"
            className="flex items-center gap-3 px-6 py-4 text-sm w-full sm:w-auto justify-center"
            style={{ border: '1px solid rgba(184,148,122,0.25)', color: 'rgba(255,255,255,0.55)', letterSpacing: '0.06em' }}>
            Écrire au cabinet
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, transparent, rgba(184,148,122,0.45))' }} />
        <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(184,148,122,0.5)' }} />
      </div>
    </section>
  )
}

function PhoneIcon() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.4 2 2 0 0 1 3.55 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.66a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
}
