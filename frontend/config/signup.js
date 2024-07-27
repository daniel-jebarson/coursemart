const signup = {
  formName: 'signup',
  layout: 'vertical',
  fields: [
    {
      name: 'email',
      label: 'Email',
      type: 'input',
      rules: [
        { required: true, message: 'Please enter your Email!' },
        {
          type: 'email',
          message: 'The input is not a valid email!',
        },
      ],
      fieldEffects: (form) => {
        console.log(form, 'fieldEffects')
      },
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
      rules: [
        { required: true, message: 'Please enter your password!' },
        {
          min: 8,
          message: 'Password must be at least 8 characters long!',
        },
        {
          pattern: /[A-Z]/,
          message: 'Password must contain at least one uppercase letter!',
        },
        {
          pattern: /[0-9]/,
          message: 'Password must contain at least one number!',
        },
        {
          pattern: /[@$!%*?&#]/,
          message: 'Password must contain at least one special character!',
        },
      ],
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
      name: 'role',
      label: 'Role',
      type: 'radio',
      rules: [{ required: true, message: 'Please select one option!' }],
      options: [
        { value: 'institute', label: 'Institute' },
        { value: 'user', label: 'User' },
      ],
      onChange: (e, form) => {
        const value = e.target.value
        form?.setFieldsValue({ role: value })
      },
    },
    {
      name: 'websiteUrl',
      label: 'Website URL',
      type: 'input',
      rules: [
        {
          required: true,
          message: 'Please input value for Additional Field 1!',
        },
        {
          pattern: new RegExp(
            '^(https?:\\/\\/)?' + // protocol
              '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
              '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
              '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
              '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
              '(\\#[-a-z\\d_]*)?$',
            'i'
          ),
          message: 'Please enter a valid URL',
        },
      ],
      dependsOn: 'institute',
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
