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
        className: 'full-width mainBtn',
      },
    },
  ],
  url: '/email/send',
}

export default verifyEmail
