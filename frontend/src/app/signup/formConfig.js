// formConfig.js
const formConfig = {
  userForm: {
    formName: 'userForm',
    fields: [
      {
        name: 'username',
        label: 'Username',
        type: 'input',
        rules: [{ required: true, message: 'Please input your username!' }],
      },
      {
        name: 'password',
        label: 'Password',
        type: 'password',
        rules: [{ required: true, message: 'Please input your password!' }],
      },
    ],
  },
}

export default formConfig
