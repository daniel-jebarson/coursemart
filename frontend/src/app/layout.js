import { Inter } from 'next/font/google'
import { Providers } from '@/components/index'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const RootLayout = ({ children }) => {
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

export default RootLayout
