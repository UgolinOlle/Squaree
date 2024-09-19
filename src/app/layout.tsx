import type { Metadata } from 'next'

import './globals.css'
import { ThemeProvider } from '~/lib/providers/theme-provider'
import { UtilsNavbar } from '~/components/navbar/utils-navbar'

export const metadata: Metadata = {
  title: 'Squaree',
  description:
    'Squaree helps users to go from Zero to Hero with Pockets flow’s simple platform that helps creators like you sell their digital products online.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`relative bg-background font-body antialiased`}>
        <ThemeProvider>
          {children}
          <UtilsNavbar />
        </ThemeProvider>
      </body>
    </html>
  )
}
