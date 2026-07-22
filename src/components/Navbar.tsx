'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { label: 'Le Cabinet', href: '/#cabinet' },
  { label: 'Domaines', href: '/#domaines' },
  { label: 'Honoraires', href: '/#honoraires' },
  { label: 'Ressources', href: '/ressources' },
  { label: 'Contact', href: '/#contact' },
]

export function Monogram({ size = 40 }: { size?: number }) {
  return (
    <div style={{
      width: size * 2.0, height: size,
      border: '1px solid rgba(184,148,122,0.55)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'var(--font-playfair)',
      fontSize: size * 0.36,
      color: '#f5f1ed',
      letterSpacing: '0.10em',
      fontWeight: 400,
      fontStyle: 'italic',
    }}>
      JDA
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled || menuOpen ? 'rgba(26,18,40,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(184,148,122,0.15)' : '1px solid transparent',
        transition: 'background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
      }}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between" style={{ height: '70px' }}>
        <Link href="/" className="flex items-center gap-4" style={{ textDecoration: 'none' }}>
          <Monogram size={36} />
          <div className="flex flex-col leading-none">
            <span style={{ fontFamily: 'var(--font-playfair)', fontSize: '0.85rem', fontWeight: 400, color: '#f5f1ed', letterSpacing: '0.04em', opacity: 0.9 }}>
              Julia Drechou
            </span>
            <span style={{ fontSize: '0.6rem', color: 'rgba(184,148,122,0.75)', letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: '3px' }}>
              Avocate · Bordeaux
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(link => (
            <Link key={link.href} href={link.href}
              className="hover-or text-xs uppercase tracking-widest"
              style={{ color: 'rgba(255,255,255,0.55)', letterSpacing: '0.12em', textDecoration: 'none' }}>
              {link.label}
            </Link>
          ))}
          <a href="tel:+33564311240"
            className="text-xs px-4 py-2 hover:opacity-90 transition-opacity"
            style={{ background: '#b8947a', color: '#f5f1ed', letterSpacing: '0.08em' }}>
            05 64 31 12 40
          </a>
        </nav>

        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <div style={{ width: '22px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <span style={{ display: 'block', height: '1px', background: 'rgba(255,255,255,0.7)', transition: 'transform 0.2s', transform: menuOpen ? 'rotate(45deg) translate(4px,4px)' : 'none' }} />
            <span style={{ display: 'block', height: '1px', background: 'rgba(255,255,255,0.7)', transition: 'opacity 0.2s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', height: '1px', background: 'rgba(255,255,255,0.7)', transition: 'transform 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(4px,-4px)' : 'none' }} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-6 pt-2" style={{ background: 'rgba(26,18,40,0.98)' }}>
          {NAV_LINKS.map(link => (
            <div key={link.href} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <Link href={link.href} onClick={() => setMenuOpen(false)}
                className="block py-3 text-xs uppercase tracking-widest hover-or"
                style={{ color: 'rgba(255,255,255,0.55)', letterSpacing: '0.12em', textDecoration: 'none' }}>
                {link.label}
              </Link>
            </div>
          ))}
          <a href="tel:+33564311240" className="block mt-4 text-center py-3 text-xs"
            style={{ background: '#b8947a', color: '#f5f1ed', letterSpacing: '0.08em' }}>
            05 64 31 12 40
          </a>
        </div>
      )}
    </header>
  )
}
