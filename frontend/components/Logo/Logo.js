import styles from './logo.module.css'
import { Image } from 'antd'

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Image
        width={200}
        height={40}
        src={'https://i.imgur.com/yUpYCFp.png'}
        preview={false}
      />
    </div>
  )
}

export default Logo
