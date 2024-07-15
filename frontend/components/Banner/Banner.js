import { Image } from 'antd'
import styles from './banner.module.css'

function Banner() {
  return (
    <div className={styles.banner}>
      <div className='container'>
        <div className='flex center'>
          <div className={styles.content}>
            <h1>Learn new skills related to your passion</h1>
            <p>
              Find your true passion by joining our courses. We have courses
              that can help you to get what you really want{' '}
            </p>

            <div className={styles.points}>
              <div>
                <b>1K +</b> <br />
                <span>Institues</span>
              </div>
              <div>
                <b>10K +</b> <br />
                <span>Courses</span>
              </div>
              <div>
                <b>15K +</b> <br />
                <span>Students</span>
              </div>
            </div>
          </div>
          <div className={styles.img}>
            <Image
              // width={300}
              src={'https://i.imgur.com/Gui2Ent.png'}
              preview={false}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
