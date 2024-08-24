const createInstitute = {
  formName: 'createInstitute',
  layout: 'vertical',
  fields: [
    {
      name: 'description',
      label: 'About Institute',
      type: 'textarea',
      rules: [{ required: true, message: 'Please enter About Institute' }],
      className: 'half-width',
    },
    {
      name: 'year',
      label: 'Institute Start year',
      type: 'input',
      rules: [{ required: true, message: 'Please enter Start year' }],
      className: 'half-width',
    },
    {
      name: 'address',
      label: 'Institute Address',
      type: 'textarea',
      rules: [{ required: true, message: 'Please enter course title' }],
      className: 'half-width',
    },
       
    {
      name: 'Institute google map link',
      label: 'Google map link',
      type: 'input',
      rules: [{ required: true, message: 'Please enter map link' }],
      className: 'half-width',
    },
    
    {
      name: 'timings',
      label: 'Working Days',
      type: 'select',
      options:[ {
        label: 'mon-sat',
        value: 'mon-sat',
      },{
        label: 'mon-sun',
        value: 'mon-sun',
      }],
      rules: [{ required: true, message: 'Please enter course title' }],
      className: 'half-width',
    },
 
    {
      name: 'workinghours',
      label: 'Working Hours',
      type: 'input',
      rules: [{ required: true, message: 'Please enter working hours' }],
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
        position: 'fixed',
        bottom: 0,
        right: '20px',
      },
      size: 'large',
    },
  ],
  url: '/course/register',
}

export default createInstitute
