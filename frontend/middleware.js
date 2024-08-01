// app/middleware.js
import { NextResponse } from 'next/server'
import { verifyToken } from '@/utils/common'

export async function middleware(req) {
  const token = req.cookies.get('token')
  const url = req.nextUrl.clone()

  // Redirect to unauthorized if the token is not present or invalid
  if (!token || !(await verifyToken(token))) {
    url.pathname = '/unauthorized'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/another-protected-route/:path*'], // Specify the routes to protect
}
