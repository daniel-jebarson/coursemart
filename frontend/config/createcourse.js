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
      type: 'number',
      rules: [
        {
          required: true,
          message: 'Please enter course price',
        },
        {
          validator: (_, value) => {
            if (value && value <= 0) {
              return Promise.reject(
                new Error('Price must be a positive number!')
              )
            }
            if (value && value > 1000) {
              // Example max limit
              return Promise.reject(new Error('Price must not exceed 1000!'))
            }
            return Promise.resolve()
          },
        },
      ],
      className: 'third-width',
    },
    {
      name: 'duration',
      label: 'Course Duration',
      text: 'in months',
      type: 'input',
      rules: [{ required: true, message: 'Please enter course duration' }],
      className: 'third-width',
    },
    {
      name: 'language',
      label: 'Course Language',
      type: 'select',
      options: [
        { label: 'Hindi', value: 'hindi' },
        { label: 'English', value: 'english' },
        { label: 'Telugu', value: 'telugu' },
        { label: 'Tamil', value: 'tamil' },
        { label: 'Kannada', value: 'kannada' },
      ],
      size: 'large',
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
      name: 'courseDetails',
      type: 'dynamicEditor',
      label: 'courseDetails',
      className: 'full-width',
    },
    {
      name: 'Prerequisites',
      type: 'editor',
      label: 'Prerequisites',
      className: 'full-width',
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
        marginLeft: 'auto',
      },
      size: 'large',
    },
  ],
  url: '/course/register',
}

export default createCourse
