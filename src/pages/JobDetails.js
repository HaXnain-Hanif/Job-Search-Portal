import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchData, options } from '../util/fetchData';
import JobDetailComp from '../components/JobDetailComp';
import Loader from '../components/Loader';

const JobDetails = () => {
  const [jobDetail, setjobDetail] = useState([]);
  
  const {id} = useParams();
 
  useEffect(()=>{
      const fetchJobDetails = async()=>{
          const data = await fetchData(`https://jsearch.p.rapidapi.com/job-details?job_id=${id}`, options)
      
          setjobDetail(data.data[0])
          
      }
      fetchJobDetails();
  }, [id])
  return (
    <Box>
        {jobDetail.length !== 0 ? <JobDetailComp jobDetail={jobDetail}/>: <Loader/>}            
    </Box>
  )
}

export default JobDetails