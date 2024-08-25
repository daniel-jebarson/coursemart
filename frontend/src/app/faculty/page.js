'use client'
/* eslint-disable react-hooks/exhaustive-deps */
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { Modal, Button } from 'antd';
import DataTable from '@/components/DataTable/Datatable'
import { Auth, CustomLayout } from '@/components/index'
import { getColumns } from '@/utils/faculty'
import { useEffect, useState } from 'react'
import { makeGetCall, makeDeleteCall } from '@/utils/formUtils'



const Faculty = ({ courses }) => {
  const userId = useSelector((state) => state?.user?.signinDetails?._id);
  const [data, setData] = useState();
  // const handleDelete = () => console.log('Delete clicked')
  const handleEdit = () => console.log('Edit clicked')
  const { confirm } = Modal
 const getUrl =  `/institute/${userId}/faculty`;

 useEffect(() => {
  const fetchData = async () => {
    try {
      const { data } = await makeGetCall(getUrl);
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, [getUrl]);

const  handleDelete = (record) =>{
  console.log(record)
  confirm({
    title: 'Do you want to delete Faculity?',
    content:
      'When clicked the OK button, faculity deleted',
    async onOk() {
      try {
        const { data } = await makeDeleteCall(`/faculty/${record._id}/delete`);
        window.location.reload();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    onCancel() {},
  });
}

  return (
    <CustomLayout title='Faculty'>

      <div className='flex between mb-2'>
        <h2>Faculty List</h2>
        <Link href='/createfaculty'>
          <Button size='large' type='primary'>
            Create Faculty
          </Button>
        </Link>
      </div>
      <DataTable
        data={data}
        columns={getColumns(handleEdit, handleDelete)}
      />
    </CustomLayout>
  )
}

export default Auth(Faculty)
