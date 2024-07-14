'use client'

import DynamicForm from '@/components/DynamicForm'
import formConfig from './formConfig'

const Signin = () => <DynamicForm config={formConfig.userForm} />

export default Signin
