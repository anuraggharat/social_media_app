import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import ToasterContext from './context/ToasterContext'
import AuthContext from './context/AuthContext'
import ActiveStatus from './components/common/ActiveStatus'
import ThemeContext from './components/common/ThemeContext'

const poppins = Poppins({subsets:['latin'], weight:["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

export const metadata: Metadata = {
  title: 'Messenger',
  description: 'Messenger App using Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>

      <ThemeContext>
        <AuthContext>
        <ActiveStatus />
      <ToasterContext/>
        {children}
      </AuthContext>
      </ThemeContext>
      </body>

    </html>
  )
}
