const verifyEmail = {
  formName: 'verifyEmail',
  layout: 'vertical',
  fields: [
    {
      name: 'email',
      label: 'Email',
      type: 'input',
      options: {
        disabled: true,
      },
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
        className: 'fullWidth mainBtn',
        
      },
    },
  ],
  url: '/email/send',
}

export default verifyEmail
