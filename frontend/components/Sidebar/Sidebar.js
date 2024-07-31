'use client'
import { useState } from 'react'
import { Menu } from 'antd'
import { Logo } from '@/components/index'
import { sidebarMenu } from '@/utils/sidebar'
import styles from './sidebar.module.css'

const Sidebar = () => {
  const [current, setCurrent] = useState('dashboard')
  const onClick = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
  }
  return (
    <div className={`${styles.menubar} sidebar`}>
      <div className={styles.logo}>
        <Logo />
      </div>
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
