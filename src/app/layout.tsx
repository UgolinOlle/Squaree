import type { Metadata } from 'next'

import './globals.css'
import { ThemeProvider } from '~/lib/providers/theme-provider'
import { UtilsNavbar } from '~/components/navbar/utils-navbar'
import { Navbar } from '~/components/navbar/navbar'

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
      <body
        className={`relative bg-background font-body text-neutral-800 antialiased dark:text-neutral-200`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
          <UtilsNavbar />
        </ThemeProvider>
      </body>
    </html>
  )
}
