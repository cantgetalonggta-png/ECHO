import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ECHO Unified System — Live Dashboard',
  description: 'Autonomous multi-agent ontological framework',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
