const createCourse = {
  formName: 'createCourse',
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
        label: 'Send Reset link',
        type: 'primary',
        htmlType: 'submit',
        className: 'fullWidth mainBtn',
      },
    },
  ],
  url: '/email/send',
}

export default createCourse
