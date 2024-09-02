'use client'
import { Banner, Header } from '@/components'
import React, { useState } from 'react';
import {
    EditOutlined,
    ShareAltOutlined,
    EnvironmentOutlined,
    TwitterOutlined,
    LinkedinOutlined,
    InstagramOutlined,
    FacebookOutlined,
    YoutubeOutlined,
  } from '@ant-design/icons';
import styles from './institute.module.css'
import { Button, Flex , Modal, Rate, Divider} from 'antd';
import Link from 'next/link';
import Gallery from '@/components/Gallery';
import CreateRating from '@/components/CreateRating';
import Rating from '@/components/Rating';

function page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
    var softwareCourses = [
        {
          "id": 1,
          "label": "Java",
          "link": "https://www.example.com/java_programming"
        },
        {
          "id": 2,
          "label": "Python",
          "link": "https://www.example.com/python_data_science"
        },
        {
          "id": 3,
          "label": "ML-Python",
          "link": "https://www.example.com/machine_learning_python"
        },
        {
          "id": 4,
          "label": "JavaScript",
          "link": "https://www.example.com/web_development_javascript"
        },
        {
          "id": 5,
          "label": "AWS",
          "link": "https://www.example.com/cloud_computing_aws"
        },
        {
          "id": 6,
          "label": "Selenium",
          "link": "https://www.example.com/software_testing_selenium"
        },
        {
          "id": 7,
          "label": "DotNet",
          "link": "https://www.example.com/dotnet"
        }
      ];
  return (
    <div className='main'>
    <Header />
    <div className='container'>
       <div className={styles.banner}>
            <img src="https://i.ibb.co/fQqcGF5/2482557-1569244060385-8891.jpg" alt="2482557-1569244060385-8891" border="0" />
        </div> 

        <div className={styles.head}>
            <div className="mb-2">
            <h1 className='mb-1'>Qcode Healthcare Solutions </h1>
            <p>Ameerpet, Hyderabad            </p>
            </div>
            <Flex gap="small">
            <Button type="primary" icon={<EditOutlined />} onClick={showModal} >
                 Write Review
             </Button>
             <Button type="primary" icon={<ShareAltOutlined />} >
             Share
             </Button>
             <Button type="primary" icon={<EnvironmentOutlined />} >
             Direction
             </Button>
              
          </Flex>
        </div>

        <div className={styles.sec}>
            <h3>Overview</h3>
            <p className='mb-2'>Welcome to Danny Benjamen, your one-stop destination for top-notch job training services!
             With years of expertise and knowledge in the field, we have established ourselves as one of the most trusted 
             names in Ameerpet. 
             </p>

             <Flex gap="large" className='mb-3'>
                <div className='flex label-block'>
                    <label>Experience :</label>
                    <b>10 yers</b>
                </div>
                <div className='flex label-block'>
                    <label>Year of Establishment: </label>
                    <b>2001</b>
                </div>
                <div className='flex label-block'>
                    <label>Total Courses:</label>
                    <b>46 Courses</b>
                </div>
             </Flex>

             <div className={styles.list}>
                <h4 className='mb-1'>Courses Offered</h4>
                <ul>

                    {softwareCourses.map((course) => (
                        <li>
                        <Link href={course.link}>{course.label}</Link>
                        </li>
                    ))}
                   
                </ul>
             </div>

            
        </div>
        <div className={styles.sec}>
            <h3>More Information</h3>
        <div className={styles.moreInfo}>
                 <h5 className='mb-1'>Address</h5>
                <p>Plot No. 601-B, Nilagiri Block, Ameerpet, Hyderabad - 500073</p>
                <h5 className='mb-1'>Contact Number</h5>
                <p>+91 7702890892, 987654323</p>
                <h5 className='mb-1'>Website</h5>
                <p>www.coursespace.com</p>
                <h5 className='mb-1'>Serving cities</h5>
                <p>Hyderabad</p>
                <h5 className='mb-1'>Timings</h5>
                <div className='mb-2'>
                <div className='flex label-block'>
                    <label>Mon - Sat:</label>
                    <b>9:00 am - 7:00 pm</b>
                </div>
                <div className='flex label-block'>
                    <label>Sun:</label>
                    <b>Closed - Closed</b>
                </div>
                </div>

                <h5 className='mb-1'>Social Media</h5>
                <Flex gap="large" className='mb-3 social'>
                    <Link href="https://www.facebook.com/">
                    <FacebookOutlined />
                    </Link>
                    <Link href="https://www.facebook.com/">
                    <InstagramOutlined />
                    </Link>
                    <Link href="https://www.facebook.com/">
                    <LinkedinOutlined />
                    </Link>
                    <Link href="https://www.facebook.com/">
                    <TwitterOutlined />
                    </Link>
                    <Link href="https://www.facebook.com/">
                    <YoutubeOutlined />
                    </Link>
                </Flex>
             </div>
             </div>

             <div className={styles.sec}>
             <h2>Gallery</h2>
                <Gallery />
             </div>
             <div className={styles.sec}>
             <h3 className='mb-3'>Reviews</h3>
             <div className='flex center '>
                <Rate allowHalf defaultValue={4.5} disabled className='medium'  style={{ color: '#1677ff' }} />
                <p className='ml-3'>4.5 rating, based on 65 student reviews</p>
                </div>
                <Divider />
                    
               <Rating />
               <Rating />
               <Rating />
               <Rating />
               <Rating />
               
             
             </div>
    </div>

    <Modal title="Writing review for" open={isModalOpen} onCancel={handleCancel}footer={null}>
    <CreateRating />
    </Modal>
    </div>
  )
}

export default page