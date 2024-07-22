'use client'

import { DynamicForm } from '@/components/index'
import signup from '@/config/signup'

const Signup = () => (
  <div className='container'>
    <DynamicForm config={signup} />
  </div>
)

export default Signup
