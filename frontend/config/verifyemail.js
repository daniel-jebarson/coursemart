const verifyEmail = {
  formName: 'verifyEmail',
  layout: 'vertical',
  fields: [
    {
      name: 'email',
      label: 'Email',
      type: 'input',
      disabled: true,
    },
    {
      name: 'id',
      label: '',
      type: 'hidden',
      options: {
        initialValue: 'id',
      },
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
  url: '/email/send',
  redirect: '/signin',
}

export default verifyEmail
