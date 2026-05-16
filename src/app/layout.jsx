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
  icons: {
    icon:     'https://res.cloudinary.com/dnv5rxyhk/image/upload/v1778889143/Favicon_ol7gst.png',
    shortcut: 'https://res.cloudinary.com/dnv5rxyhk/image/upload/v1778889143/Favicon_ol7gst.png',
    apple:    'https://res.cloudinary.com/dnv5rxyhk/image/upload/v1778889143/Favicon_ol7gst.png',
  },
  openGraph: {
    title: 'Khushbu Doshi — Product Designer & Marketer',
    description:
      'Portfolio of Khushbu Doshi, a product designer and marketer with ~3 years of experience and an MS in HCI from DePaul University.',
    images: [{
      url:    'https://res.cloudinary.com/dnv5rxyhk/image/upload/v1778889145/OG-Image_enh0jp.png',
      width:  1200,
      height: 630,
      alt:    'Khushbu Doshi — Product Designer & Marketer',
    }],
    type: 'website',
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Khushbu Doshi — Product Designer & Marketer',
    description: 'Portfolio of Khushbu Doshi, a product designer and marketer with ~3 years of experience and an MS in HCI from DePaul University.',
    images:      ['https://res.cloudinary.com/dnv5rxyhk/image/upload/v1778889145/OG-Image_enh0jp.png'],
  },
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
