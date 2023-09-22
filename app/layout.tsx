import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Asesoría | Pasión por las Finanzas',
  description:
    'Agenda una asesoría financiera con especialista en el sector financiero',
  creator: 'Pasión por las Finanzas',
  keywords: [
    'asesoría',
    'finanzas',
    'asesoría financiera',
    'educación financiera',
  ],
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="author" content={metadata.creator || null || undefined} />
        <meta
          name="description"
          content={metadata.description || null || undefined}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
