'use client'
import React from 'react'
import { Button } from 'antd'
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import { Input } from 'antd'
const { Search } = Input
import { Image } from 'antd'
import styles from './header.module.css'
import { Menu } from 'antd'

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  }
}

const items = [
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem(
      'Item 1',
      null,
      null,
      [getItem('Option 1', '1'), getItem('Option 2', '2')],
      'group'
    ),
    getItem(
      'Item 2',
      null,
      null,
      [getItem('Option 3', '3'), getItem('Option 4', '4')],
      'group'
    ),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [
      getItem('Option 7', '7'),
      getItem('Option 8', '8'),
    ]),
  ]),
  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
]

const onClick = (e) => {
  console.log('click', e)
}

function Header() {
  const onSearch = (value, _e, info) => console.log(info?.source, value)

  return (
    <header className={styles.header}>
      <div className='container'>
        <div className='flex between center h-6'>
          <div className='flex center'>
            <div className={styles.logo}>
              <Image
                width={200}
                height={40}
                src={'https://i.imgur.com/yUpYCFp.png'}
                preview={false}
              />
            </div>
            <div className={`${styles.nav} flex`}>
              <div className={styles.navItem}>
                <span> Courses</span>
                <Menu
                  onClick={onClick}
                  className={styles.menubar}
                  mode='vertical'
                  items={items}
                />
              </div>
              <div className={styles.navItem}>
                <span>Institutes</span>
              </div>
              <div className={styles.navItem}>
                <span>About</span>
              </div>
            </div>
          </div>
          <div className='flex center'>
            <div className={styles.search}>
              <Search
                placeholder='Search course'
                allowClear
                size='large'
                onSearch={onSearch}
                shape='round'
                style={{
                  width: 400,
                }}
              />
            </div>
            <div className=''>
              <Button size='large' type='primary'>
                Signup
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
