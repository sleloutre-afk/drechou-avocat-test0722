import Image from 'next/image'

export default function Contact() {
  return (
    <section id="contact" style={{ background: '#2a1f3d' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          <div className="py-20 px-10 lg:px-16">
            <div className="flex items-center gap-3 mb-6">
              <div style={{ width: '32px', height: '1px', background: '#b8947a' }} />
              <span className="text-xs uppercase tracking-[0.3em]" style={{ color: '#b8947a' }}>Contact</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-light mb-6 text-white leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
              Parlons de<br /><em style={{ color: '#d4ad92' }}>votre situation</em>
            </h2>

            <p className="text-base mb-10 leading-relaxed" style={{ color: 'rgba(255,255,255,0.50)' }}>
              Le cabinet reçoit <strong style={{ color: 'rgba(255,255,255,0.75)' }}>sur rendez-vous uniquement</strong>, du lundi au vendredi. Contactez Maître Drechou par téléphone ou par e-mail.
            </p>

            <div className="mb-5">
              <a href="tel:+33564311240"
                className="flex items-center justify-center sm:justify-start gap-3 px-8 py-4 text-base font-medium hover:opacity-90 transition-opacity w-full sm:w-auto"
                style={{ background: '#b8947a', color: '#f5f1ed' }}>
                <PhoneIcon />05 64 31 12 40
              </a>
            </div>

            <div className="mb-10">
              <a href="mailto:jdrechou-avocat@outlook.fr"
                className="inline-flex items-center gap-3 px-6 py-3 text-sm w-full sm:w-auto"
                style={{ border: '1px solid rgba(184,148,122,0.2)', color: 'rgba(255,255,255,0.45)' }}>
                <MailIcon />jdrechou-avocat@outlook.fr
              </a>
            </div>

            <div style={{ height: '1px', background: 'rgba(184,148,122,0.12)', marginBottom: '2rem' }} />

            <div className="space-y-4">
              <p className="text-xs uppercase tracking-wider mb-4" style={{ color: 'rgba(255,255,255,0.25)', letterSpacing: '0.15em' }}>Cabinet</p>

              <div className="p-4" style={{ background: 'rgba(184,148,122,0.06)', border: '1px solid rgba(184,148,122,0.16)' }}>
                <div className="flex items-center gap-2 mb-2">
                  <PinIcon />
                  <p className="text-xs uppercase tracking-wider font-medium" style={{ color: 'rgba(184,148,122,0.75)', fontSize: '0.65rem', letterSpacing: '0.12em' }}>Bordeaux · Cabinet</p>
                </div>
                <p className="text-sm font-medium text-white">2 rue de Pessac</p>
                <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.40)' }}>33000 Bordeaux · 05 64 31 12 40</p>
              </div>

              <p className="text-xs pt-1" style={{ color: 'rgba(255,255,255,0.22)' }}>
                Sur rendez-vous · Lun–Ven · Aide juridictionnelle acceptée
              </p>
            </div>
          </div>

          <div className="relative hidden lg:flex items-center justify-center overflow-hidden" style={{ minHeight: '560px' }}>
            <Image src="/office.png" alt="Cabinet Julia Drechou" fill className="object-cover object-center" />
            <div className="absolute inset-0" style={{ background: 'rgba(26,18,40,0.82)' }} />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #2a1f3d 0%, transparent 35%)' }} />
            <div className="relative text-center px-16">
              <div className="flex items-center justify-center gap-4 my-5">
                <div style={{ width: '40px', height: '1px', background: 'rgba(184,148,122,0.28)' }} />
                <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#b8947a', opacity: 0.6 }} />
                <div style={{ width: '40px', height: '1px', background: 'rgba(184,148,122,0.28)' }} />
              </div>
              <p className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.45)', letterSpacing: '0.25em' }}>Julia Drechou</p>
              <p className="text-xs mt-1 tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.28)', letterSpacing: '0.2em' }}>Avocate · Barreau de Bordeaux</p>
              <p className="text-xs mt-4 tracking-widest" style={{ color: 'rgba(255,255,255,0.15)', letterSpacing: '0.1em' }}>2 rue de Pessac · 33000 Bordeaux</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function PhoneIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.4 2 2 0 0 1 3.55 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.66a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
}
function MailIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
}
function PinIcon() {
  return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#b8947a', flexShrink: 0 }}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
}
