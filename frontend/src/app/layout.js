import Providers from '@/components/Providers';
import { AntdRegistry } from '@ant-design/nextjs-registry'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Providers>
          <AntdRegistry>{children}</AntdRegistry>
        </Providers>
      </body>
    </html>
  )
}