import { Bricolage_Grotesque } from 'next/font/google'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import '../styles/globals.css'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  weight: ['400', '500', '600'],
  display: 'swap',
})

export const metadata = {
  title: 'Khushbu Doshi — Product Designer & Marketer',
  description:
    'Portfolio of Khushbu Doshi, a product designer and marketer with ~3 years of experience and an MS in HCI from DePaul University.',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body>
        {children}
      </body>
    </html>
  )
}
