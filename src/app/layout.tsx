import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Glam & Glow Studio | Spray Tanning & Lash Services Melbourne',
  description: 'Luxury spray tanning and lash & brow services in Melbourne\'s eastern suburbs. Look Good, Feel Good.',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✨</text></svg>" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
