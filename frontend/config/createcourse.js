const createCourse = {
  formName: 'createCourse',
  layout: 'vertical',
  fields: [
    {
      name: 'title',
      label: 'Course Title',
      type: 'input',
      rules: [{ required: true, message: 'Please enter course title name!' }],
    },
    {
      name: 'description',
      label: 'Course Description',
      type: 'input',
      rules: [{ required: true, message: 'Please enter your Name!' }],
    },
    {
      name: 'price',
      label: 'Course Price',
      type: 'input',
      rules: [{ required: true, message: 'Please enter your Name!' }],
    },
    {
      name: 'duration',
      label: 'Course Duration',
      type: 'input',
      rules: [{ required: true, message: 'Please enter your Name!' }],
    },
    {
      name: 'language',
      label: 'Course Language',
      type: 'input',
      rules: [{ required: true, message: 'Please enter your Name!' }],
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
}

export default createCourse
