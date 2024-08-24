const createFaculty = {
  formName: 'createFaculty',
  layout: 'vertical',
  fields: [
    {
      name: 'name',
      label: 'Faculty name',
      type: 'input',
      rules: [{ required: true, message: 'Please enter Faculty name' }],
      className: 'half-width',
    },
    {
      name: 'About',
      label: 'faculity Bio',
      type: 'textarea',
      rules: [{ required: true, message: 'Please enter about' }],
      className: 'half-width',
    },
    {
      name: 'experience',
      label: 'Faculty experience',
      type: 'textarea',
      rules: [{ required: true, message: 'Please enter Faculty experience' }],
      className: 'half-width',
    },

    {
      name: 'qualification',
      label: 'Faculty qualification',
      type: 'input',
      rules: [
        { required: true, message: 'Please enter Faculty qualification' },
      ],
      className: 'half-width',
    },

    {
      name: 'fb',
      label: 'Facebook page link',
      type: 'input',
      rules: [{ required: false, message: 'Please enter course title' }],
      className: 'half-width',
    },
    {
      name: 'twitter',
      label: 'Twitter page link',
      type: 'input',
      rules: [{ required: false, message: 'Please enter course title' }],
      className: 'half-width',
    },
    {
      name: 'youtube',
      label: 'Youtube chanel link',
      type: 'input',
      rules: [{ required: false, message: 'Please enter course title' }],
      className: 'half-width',
    },
    {
      name: 'linkedin',
      label: 'Linked in page link',
      type: 'input',
      rules: [{ required: false, message: 'Please enter course title' }],
      className: 'half-width',
    },

    {
      name: 'createCourseBtn',
      type: 'button',
      options: {
        label: 'Create',
        type: 'primary',
        htmlType: 'submit',
        className: 'full-width',
      },
      style: {
        // position: 'fixed',
        // bottom: 0,
        // right: '20px',
        marginLeft: 'auto',
      },
      size: 'large',
    },
  ],
  url: '/institute/faculty',
}

export default createFaculty
