const createCourse = {
  formName: 'createCourse',
  layout: 'vertical',
  fields: [
    {
      name: 'courseTitle',
      label: 'Course Title',
      type: 'input',
      rules: [{ required: true, message: 'Please enter course title' }],
      className: 'half-width',
    },
    {
      name: 'Description',
      label: 'Course Description',
      type: 'textarea',
      rules: [{ required: true, message: 'Please enter course description' }],
      className: 'half-width',
    },
    {
      name: 'coursePrice',
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
      name: 'Discount',
      label: 'Discount',
      text: '%',
      type: 'input',
      rules: [{ required: true, message: 'Please enter course duration' }],
      className: 'third-width',
    },
    {
      name: 'Duration',
      label: 'Course Duration',
      text: 'in months',
      type: 'input',
      rules: [{ required: true, message: 'Please enter course duration' }],
      className: 'third-width',
    },
    {
      name: 'teachingLanguage',
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
      name: 'tags',
      label: 'Tags',
      text: 'Tags',
      mode: 'tags',
      type: 'select',
      notFoundContent: null,
      size: 'large',
      rules: [{ required: true, message: 'Please enter tags' }],
      className: 'third-width',
    },
    {
      name: 'teachingMode',
      label: 'Teaching Mode',
      type: 'select',
      options: [
        { label: 'Online', value: 'online' },
        { label: 'Offline', value: 'offline' },
        { label: 'Both', value: 'both' },
      ],
      size: 'large',
      rules: [{ required: true, message: 'Please enter course language' }],
      className: 'third-width',
    },
    {
      name: 'facultyName',
      label: 'Faculty Name',
      type: 'select',
      options: [
        { label: 'Hindi', value: 'hindi' },
        { label: 'English', value: 'english' },
      ],
      size: 'large',
      rules: [{ required: true, message: 'Please enter course language' }],
      className: 'third-width',
    },
    {
      name: 'Certificate',
      label: 'Certificate Provided?',
      type: 'select',
      options: [
        { label: 'Yes', value: true },
        { label: 'No', value: false },
      ],
      size: 'large',
      rules: [{ required: true, message: 'Please enter course language' }],
      className: 'third-width',
    },
    {
      name: 'InstituteName',
      label: 'Institute Name',
      type: 'input',
      rules: [{ required: true, message: 'Please enter course duration' }],
      className: 'third-width',
    },
    {
      name: 'ContactNumber',
      label: 'Mobile Number',
      type: 'input',
      rules: [{ required: true, message: 'Please enter course duration' }],
      className: 'third-width',
    },
    {
      name: 'courseContent',
      type: 'dynamicEditor',
      label: 'Course Details',
      rules: [{ required: true, message: 'Please select course start date' }],
      className: 'full-width',
    },
    {
      name: 'Prerequisites',
      type: 'editor',
      label: 'Prerequisites',
      rules: [{ required: true, message: 'Please select course start date' }],
      className: 'full-width',
    },
    {
      name: 'LearningOutcomes',
      type: 'editor',
      label: 'Learning Outcomes',
      rules: [{ required: true, message: 'Please select course start date' }],
      className: 'full-width',
    },
    {
      name: 'keyFeatures',
      type: 'editor',
      label: 'Key Features',
      rules: [{ required: true, message: 'Please select course start date' }],
      className: 'full-width',
    },
    // Location,
    // courseImage
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
