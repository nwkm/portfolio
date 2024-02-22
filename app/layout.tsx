import type { Metadata } from 'next'
import { Orbitron, Oxanium } from 'next/font/google'
import './globals.css'

const orbitron = Orbitron({
  weight: "400",
  subsets: ["latin"],
  variable: '--font-orbitron'
});
const oxanium = Oxanium({
  weight: "400",
  subsets: ["latin"],
  variable: '--font-oxanium'
});

export const metadata: Metadata = {
  title: 'NK',
  description: 'Portfolio of Nawin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${oxanium.className}`}>{children}</body>
    </html>
  )
}
