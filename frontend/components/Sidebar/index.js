import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined, UserOutlined, HomeOutlined } from '@ant-design/icons';
import { Menu, Image } from 'antd';
import styles from './sidebar.module.css';

const items = [
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
       Dashboard
      </a>
    ),
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
       Create Course
      </a>
    ),
    key: 'app',
    icon: <AppstoreOutlined />,
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
       Faculity Details
      </a>
    ),
    key: 'faculity',
    icon: <UserOutlined />,
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
      Institute Details
      </a>
    ),
    key: 'institute',
    icon: <HomeOutlined />,
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
       Settings
      </a>
    ),
    key: 'settings',
    icon: <SettingOutlined />,
    
  },
];

function index() {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <div className={`${styles.menubar} sidebar`}>
      <div className={styles.logo}>
      <Image
        width={200}
        height={40}
        src={'https://i.imgur.com/yUpYCFp.png'}
        preview={false}
    />
    </div>
      <Menu onClick={onClick} selectedKeys={[current]}  items={items} className={styles.menu} />
    </div>
    
  )
}

export default index