import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Julia Drechou — Avocate au Barreau de Bordeaux',
  description: "Maître Julia Drechou, avocate au Barreau de Bordeaux. Droit de la famille, divorce, autorité parentale, baux d'habitation. Aide juridictionnelle acceptée.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${playfair.variable}`}>{children}</body>
    </html>
  )
}
