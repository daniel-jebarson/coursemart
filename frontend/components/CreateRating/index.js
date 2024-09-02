'use client'
import React, {useState} from 'react'
import { Rate, Form, Input, Button } from 'antd';
import styles from './rating.module.css'

function index() {
  const [obj, setObj] = useState()
    const onFinish = (values) => {
       console.log('Submit success!', values);
       setObj({...obj, values});
      };
      const onFinishFailed = () => {
        console.log('Submit failed!');
      };

      console.log(obj, 'obj')
  return (
    <div className={styles.review}>
         <div className='mb-2'>
        <p>
             How would you rate this institute?

        </p>
  
       
        </div>
        <Form
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
  name="rating"
  rules={[
    {
      required: true,
      message: "Please provide a rating.",
    },
    {
      type: "number",
      min: 0.5,
      message: "Please provide a rating.",
    },
  ]}
>
<Rate allowHalf />
</Form.Item>
<Form.Item
        name="title"
        label="Review Title"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item name="des" label="Tell us about your experience">
         <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item>
        <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
    </Form>
    </div>
  )
}

export default index