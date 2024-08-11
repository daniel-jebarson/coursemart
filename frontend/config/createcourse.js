const createCourse = {
  formName: 'createCourse',
  layout: 'vertical',
  fields: [
    {
      name: 'title',
      label: 'Course Title',
      type: 'input',
      rules: [{ required: true, message: 'Please enter course title' }],
      className: 'half-width',
    },
    {
      name: 'description',
      label: 'Course Description',
      type: 'textarea',
      rules: [{ required: true, message: 'Please enter course description' }],
      className: 'half-width',
    },
    {
      name: 'price',
      label: 'Course Price',
      type: 'input',
      rules: [{ required: true, message: 'Please enter course price' }],
      className: 'third-width',
    },
    {
      name: 'duration',
      label: 'Course Duration',
      type: 'input',
      rules: [{ required: true, message: 'Please enter course duration' }],
      className: 'third-width',
    },
    {
      name: 'language',
      label: 'Course Language',
      type: 'input',
      rules: [{ required: true, message: 'Please enter course language' }],
      className: 'third-width',
    },
    {
      name: 'startDate',
      label: 'Start Date',
      type: 'date',
      rules: [{ required: true, message: 'Please select course start date' }],
      className: 'third-width',
    },
    {
      name: 'createCourse',
      type: 'button',
      options: {
        label: 'Create',
        type: 'primary',
        htmlType: 'submit',
      },
      className: 'full-width',
    },
  ],
}

export default createCourse
