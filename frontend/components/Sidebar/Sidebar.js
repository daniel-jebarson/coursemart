'use client'
import { useEffect, useState } from 'react'
import { Menu } from 'antd'
import { usePathname } from 'next/navigation'
import { Logo } from '@/components/index'
import { sidebarMenu } from '@/utils/sidebar'
import styles from './sidebar.module.css'

const Sidebar = () => {
  const pathname = usePathname()
  const [current, setCurrent] = useState('dashboard')

  const onClick = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
  }

  useEffect(() => {
    if (pathname) {
      setCurrent(pathname)
    }
  }, [pathname])

  return (
    <div className={styles.menubar}>
      <Logo className={styles.logo} width={170} />
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        items={sidebarMenu}
        className={styles.menu}
      />
    </div>
  )
}

export default Sidebar
