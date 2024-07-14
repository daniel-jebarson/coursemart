import { Inter } from 'next/font/google'
import Providers from '@/components/Provider/Providers'
import './globals.css'
import { AntdRegistry } from '@ant-design/nextjs-registry'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head />
      <body className={inter.className}>
        <Providers>
          <AntdRegistry>{children}</AntdRegistry>
        </Providers>
      </body>
    </html>
  )
}

// Header
// Logo
// navbar
// search
// banner - static
// sorting
// filter
// courseList
// course
// footer
// courseItem - dynamic route (server component)
// homepage - server component
// categorypage - server component (node js is a category)

// pages
// signup
// signin
// homepage
// categorypage
// courseItemPage
