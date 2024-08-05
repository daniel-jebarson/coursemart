'use client'
import { useState } from 'react'
import { Layout, Avatar } from 'antd'
const { Content, Sider } = Layout
import { Sidebar } from '../index'
import styles from './layout.module.css'
const siderStyle = {
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarColor: 'unset',
}

const CustomLayout = ({ children, title }) => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Layout hasSider>
      <Sider
        style={siderStyle}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Sidebar />
      </Sider>
      <Content className={collapsed ? styles.contentCollapsed : styles.content}>
        <header className={styles.header}>
          <h2>{title}</h2>
          <div className='flex center'>
            {/* <div className={styles.search}></div> */}
            <Avatar className={styles.avatar}>U{/* <SignoutBtn /> */}</Avatar>
          </div>
        </header>
        {children}
      </Content>
    </Layout>
  )
}

export default CustomLayout
