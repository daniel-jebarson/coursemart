import Link from 'next/link'
import styles from './logo.module.css'
import { Image } from 'antd'

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link href='/'>
      <Image
        width={200}
        height={40}
        src={'https://i.imgur.com/yUpYCFp.png'}
        preview={false}
      />
      </Link>
     
    </div>
  )
}

export default Logo
