import './globals.css';
import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import Sidebar from './components/Sidebar';
import Bottombar from './components/Bottombar';

const work_sans = Work_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'INDI.tv',
  description: 'Recreated streaming platform design from Figma community file by David',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={work_sans.className}>
        <Sidebar />
          {children}
        <Bottombar />
      </body>
    </html>
  )
}
