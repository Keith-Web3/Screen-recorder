import './globals.css'
import type { Metadata } from 'next'
import { Inter, Sora, Work_Sans } from 'next/font/google'
import '../sass/index.scss'

const sora = Sora({
  variable: '--font-sora',
  subsets: ['latin'],
})

const wsans = Work_Sans({
  variable: '--font-wsans',
  subsets: ['latin'],
})

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${sora.variable} ${wsans.variable}`}>
        {children}
      </body>
    </html>
  )
}
