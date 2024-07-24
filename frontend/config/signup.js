const signup = {
  formName: 'signup',
  layout: 'vertical',
  fields: [
    {
      name: 'email',
      label: 'Email',
      type: 'input',
      rules: [{ required: true, message: 'Please enter your Email!' }],
    },
    {
      name: 'name',
      label: 'Name',
      type: 'input',
      rules: [{ required: true, message: 'Please enter your Name!' }],
    },
    {
      name: 'phone',
      label: 'Mobile Number',
      type: 'input',
      rules: [{ required: true, message: 'Please enter your Mobile Number!' }],
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      rules: [{ required: true, message: 'Please enter your password!' }],
    },
    {
      name: 'passwordCopy',
      label: 'Confirm Password',
      type: 'password',
      rules: [{ required: true, message: 'Please re-enter your password!' }],
    },
    {
      name: 'signupButton',
      type: 'button',
      options: {
        label: 'submit',
        type: 'primary',
        htmlType: 'submit',
      },
    },
  ],
  url: '/user/register',
  redirect: '/verifyemail',
}

export default signup
