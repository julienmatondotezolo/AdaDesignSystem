import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ADA Design System - Culinary Minimalism',
  description: 'shadcn/ui based design system for AdaSystems platform with premium hospitality software aesthetics.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}