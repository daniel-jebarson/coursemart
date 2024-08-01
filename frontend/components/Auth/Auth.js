'use client'
// components/withAuth.js
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { setSignoutDetails } from '@/store/userSlice'

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

const Auth = (WrappedComponent) => {
  const AuthComponent = (props) => {
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch()
    const router = useRouter()
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn)

    useEffect(() => {
      const token = document.cookie
        .split('; ')
        .find((row) => row.startsWith('token='))
      if (!token) {
        dispatch(setSignoutDetails())
        router.push('/unauthorized') // Navigate to unauthorized page
      } else {
        setIsLoading(false)
      }
    }, [dispatch, router])

    if (isLoading) {
      return <div>Loading...</div> // Render a placeholder during loading
    }

    if (!isLoggedIn) {
      return <div>Unauthorized</div> // Render unauthorized message if not logged in
    }

    return <WrappedComponent {...props} />
  }

  AuthComponent.displayName = `Auth(${getDisplayName(WrappedComponent)})`
  return AuthComponent
}

export default Auth
