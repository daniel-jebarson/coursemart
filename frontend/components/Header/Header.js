'use client'
import styles from './header.module.css'
import { Logo, NavBar, SearchBar, SignupBtn } from '@/components/index'

function Header() {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className='flex between center h-6'>
          <div className='flex center'>
            <Logo className={styles.logo} width={200} />
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
