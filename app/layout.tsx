import './globals.css'
import { Acme } from 'next/font/google'

const font = Acme({
  weight: ['400', '400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
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
      
      <body className={font.className}>{children}</body>
    </html>
  )
}
