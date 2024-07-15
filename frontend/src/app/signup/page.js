'use client'

import { DynamicForm } from '@/components/index'
import formConfig from './formConfig'

const Signup = () => <DynamicForm config={formConfig.userForm} />

export default Signup
