'use client'

import { DynamicForm } from '@/components/index'
import formConfig from './formConfig'

const Signin = () => <DynamicForm config={formConfig.userForm} />

export default Signin
