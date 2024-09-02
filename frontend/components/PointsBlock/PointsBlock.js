'use client'
import { CheckOutlined } from '@ant-design/icons'
import styles from './pointsblock.module.css'

const PointsBlock = ({ title, content }) => {
  return (
    <div className={styles.learnPoints}>
      <div className='container'>
        <div className={styles.content}>
          <h2>{title}</h2>
          {content?.length > 0 && (
            <ul>
              {content.map((item) => {
                return (
                  <li>
                    <CheckOutlined /> {item}
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default PointsBlock
