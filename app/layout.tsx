import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

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
        <meta
          name="keywords"
          content={'finanzas, asesoría, educación financiera'}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="stylesheet"
          href="https://static.micuentaweb.pe/static/js/krypton-client/V4.0/ext/classic-reset.css"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
