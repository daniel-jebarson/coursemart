'use client'
import React from 'react'
import styles from './header.module.css'
import { Logo, NavBar, SearchBar, SignupBtn } from '@/components/index'

function Header() {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className='flex between center h-6'>
          <div className='flex center'>
            <Logo />
            <NavBar />
          </div>
          <div className='flex center'>
            <SearchBar />
            <div className=''>
              <SignupBtn />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
