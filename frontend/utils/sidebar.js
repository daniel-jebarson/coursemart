import Link from 'next/link'
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  UserOutlined,
  HomeOutlined,
} from '@ant-design/icons'

export const sidebarMenu = [
  {
    label: <Link href='/dashboard'>Dashboard</Link>,
    key: 'dashboard',
    icon: <MailOutlined />,
  },
  {
    label: <Link href='/createcourse'>Create Course</Link>,
    key: 'courses',
    icon: <AppstoreOutlined />,
  },
  {
    label: <Link href='/faculty'>Faculty Details</Link>,
    key: 'faculty',
    icon: <UserOutlined />,
  },
  {
    label: <Link href='/institute'>Institute Details</Link>,
    key: 'institute',
    icon: <HomeOutlined />,
  },
  {
    label: <Link href='/settings'>Settings</Link>,
    key: 'settings',
    icon: <SettingOutlined />,
  },
]
