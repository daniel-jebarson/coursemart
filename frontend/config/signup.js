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
      rules: [
        { required: true, message: 'Please enter your Mobile Number!' },
        {
          pattern: /^[0-9]{10}$/,
          message: 'Please enter a valid 10-digit mobile number!',
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
      name: 'confirmPassword',
      label: 'Confirm Password',
      type: 'password',
      dependencies: ['password'],
      hasFeedback: true,
      rules: [
        {
          required: true,
          message: 'Please confirm your password!',
        },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value || getFieldValue('password') === value) {
              return Promise.resolve()
            }
            return Promise.reject(new Error('The two passwords do not match!'))
          },
        }),
      ],
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
