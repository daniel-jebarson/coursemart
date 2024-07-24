'use client'

import { DynamicForm } from '@/components/index'
import verifyEmail from '@/config/verifyemail'

const VerifyEmail = () => (
  <div className='container'>
    <DynamicForm config={verifyEmail} />
  </div>
)

export default VerifyEmail
