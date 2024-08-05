import Link from 'next/link'
import { Image } from 'antd'

const Logo = (props) => {
  return (
    <div className={props.className}>
      <Link href='/'>
        <Image
          width={props.width}
          height={40}
          src={'https://i.imgur.com/yUpYCFp.png'}
          preview={false}
        />
      </Link>
    </div>
  )
}

export default Logo
