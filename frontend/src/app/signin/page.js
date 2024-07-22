'use client'

import { DynamicForm } from '@/components/index'
import signin from '@/config/signin'

const Signin = () => (
  <div className='container'>
    <DynamicForm config={signin} />
  </div>
)

export default Signin
