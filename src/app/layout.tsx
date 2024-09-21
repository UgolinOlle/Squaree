import type { Metadata } from 'next'
import { DM_Sans, Manrope } from 'next/font/google'

import './globals.css'
import { ThemeProvider } from '~/lib/providers/theme-provider'
import { UtilsNavbar } from '~/components/navbar/utils-navbar'
import { Navbar } from '~/components/navbar/navbar'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '700'],
})

// Importer Manrope
const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500', '700'],
})

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
        className={`${dmSans.variable} ${manrope.variable} relative bg-background font-body text-neutral-800 antialiased dark:text-neutral-200`}
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
