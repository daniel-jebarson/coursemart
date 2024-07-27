const signin = {
  formName: 'signin',
  layout: 'vertical',
  fields: [
    {
      name: 'email',
      label: 'Email',
      type: 'input',
      rules: [
        { required: true, message: 'Please enter your email!' },
        {
          type: 'email',
          message: 'The input is not a valid email!',
        },
      ],
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      rules: [{ required: true, message: 'Please enter your password!' }],
    },
    {
      name: 'signinButton',
      type: 'button',
      options: {
        label: 'submit',
        type: 'primary',
        htmlType: 'submit',
        className: 'fullWidth mainBtn',
      },
    },
  ],
  url: '/user/login',
  redirect: '/dashboard',
}

export default signin
