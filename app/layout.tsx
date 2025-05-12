import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Simple株式会社 | 採用サイト",
  description:
    "Simple株式会社の採用情報サイトです。人材コーディネーターなどの募集職種、仕事内容、働き方についてご紹介しています。",
    generator: 'v0.dev'
}

import ClientLayout from "./ClientLayout"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <head>
        <style>{`
          body, input, button, textarea, select, option {
            font-family: "Noto Sans JP", var(--font-noto-sans-jp), sans-serif;
          }
          
          @font-face {
            font-family: 'Marker Mark SVG';
            src: url('/fonts/marker-mark.woff2') format('woff2');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: 'Five Boroughs';
            src: url('/fonts/five-boroughs.woff2') format('woff2');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
          
          @font-face {
            font-family: 'PERFECT MOMENT HANDWRITTEN FONT';
            src: url('/fonts/perfect-moment.woff2') format('woff2');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
          
          .marker-font {
            font-family: 'Marker Mark SVG', cursive;
            letter-spacing: 0.03em;
          }
        `}</style>
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}


import './globals.css'