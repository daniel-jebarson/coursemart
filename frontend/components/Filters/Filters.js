'use client'
import { Checkbox, Collapse } from 'antd'
import styles from './filters.module.css'

const Filters = () => {
  const plainOptions = ['Beginner', 'Intermediate', 'Advanced']
  const langOptions = ['English', 'Telugu', 'Hindhi', 'English, Hindi']
  const courseOptions = ['Online', 'Classroom', 'Recorderd']
  const oncheckChange = (checkedValues) => {
    console.log('checked = ', checkedValues)
  }

  const items = [
    {
      key: '1',
      label: 'Level',
      children: (
        <Checkbox.Group
          options={plainOptions}
          defaultValue={['Apple']}
          onChange={oncheckChange}
          className={styles.filterGroup}
        />
      ),
    },
    {
      key: '2',
      label: 'Language',
      children: (
        <Checkbox.Group
          options={langOptions}
          defaultValue={['Apple']}
          onChange={oncheckChange}
          className={styles.filterGroup}
        />
      ),
    },
    {
      key: '3',
      label: 'Course Type',
      children: (
        <Checkbox.Group
          options={courseOptions}
          defaultValue={['Apple']}
          onChange={oncheckChange}
          className={styles.filterGroup}
        />
      ),
    },
  ]

  const onChange = (key) => {
    console.log(key)
  }
  return (
    <>
      <div className={`${styles.panelHead} flex between`}>
        <h2>Filter by</h2>
      </div>
      <div className='filterBar'>
        <Collapse
          items={items}
          defaultActiveKey={['1', '2', '3']}
          onChange={onChange}
          expandIconPosition={'end'}
        />
      </div>
    </>
  )
}

export default Filters
