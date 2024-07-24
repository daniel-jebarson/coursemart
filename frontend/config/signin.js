const signin = {
  formName: 'signin',
  layout: 'vertical',
  fields: [
    {
      name: 'username',
      label: 'Username',
      type: 'input',
      rules: [{ required: true, message: 'Please input your username!' }],
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      rules: [{ required: true, message: 'Please input your password!' }],
    },
  ],
  url: '/user/login',
}

export default signin
