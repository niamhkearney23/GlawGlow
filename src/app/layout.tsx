import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Glam & Glow Studio | Spray Tanning & Lash Services Melbourne',
  description:
    "Boutique spray tanning and lash & brow services in Melbourne's eastern suburbs. Warm, intimate, personalised by your artist.",
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#6B4636',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Bronze GG mark favicon (no emoji) */}
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2222%22 fill=%22%236B4636%22/><text x=%2250%22 y=%2266%22 font-family=%22Georgia,serif%22 font-size=%2252%22 fill=%22%23F5EDE4%22 text-anchor=%22middle%22>G</text></svg>"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
