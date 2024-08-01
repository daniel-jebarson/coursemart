'use client'
// components/LogoutButton.js
import { useDispatch } from 'react-redux'
import { setSignoutDetails } from '@/store/userSlice'
import { useRouter } from 'next/navigation'
import { Button } from 'antd'

const SignoutBtn = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const handleLogout = () => {
    // Remove token from cookies
    document.cookie = 'token=; Max-Age=0; path=/'

    // Dispatch logout action
    dispatch(setSignoutDetails())

    // Redirect to login page
    router.push('/')
  }

  return <Button onClick={handleLogout}>Logout</Button>
}

export default SignoutBtn
