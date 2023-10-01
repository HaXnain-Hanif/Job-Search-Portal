import { Avatar, Box, Button, Divider, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import PlaceIcon from '@mui/icons-material/Place';

const JobDetailComp = ({jobDetail}) => {
    const[currentDet, setCurrentDetail] = useState('des')
    let date;
    let expDate;
    let str;
  return (
    <Box sx={{
      margin:{lg:'auto',sm:'auto', xs:'auto'},
      width:{lg:'1000px', sm:'600px', xs:'400px'},
    }}>
        <Stack mt={2} direction='column' gap={2} justifyContent='flex-start' alignItems='center'>
      { jobDetail.employer_logo? <Avatar sx={{ width: '50px', height: '50px' }} alt="Companylogo" src={jobDetail.employer_logo} /> : <Avatar sx={{ width: '70px', height: '70px' }} alt={jobDetail.employer_name} src={jobDetail.employer_name}/>}
      <Stack direction='row' justifyContent='center' alignItems='center'>
        <Typography variant='h6'>
        {jobDetail.employer_name}
        {' /'}
        </Typography>
                <PlaceIcon sx={{marginLeft:'5px',width:'20px'}}/>
                {jobDetail.job_country}
                {', '}
                {jobDetail.job_city}
      </Stack> 
      <Typography textAlign='center' variant='h5'>
        {jobDetail.job_title}
      </Typography> 
      <Button href={jobDetail.job_apply_link} sx={{borderRadius:'15px', fontWeight:'600'}} color='success' variant="contained">Apply Now</Button>
      </Stack>
      <Stack mt={1} direction='row' justifyContent='center' alignItems='center'>
              <Typography color='GrayText' variant='h7'>
                Publish Date: { date = new Date(jobDetail.job_posted_at_datetime_utc).toLocaleDateString()}
              </Typography>
              &emsp;
              <Typography color='GrayText' variant='h7'>
                Expiry Date: { expDate = new Date(jobDetail.job_offer_expiration_datetime_utc).toLocaleDateString()}
              </Typography>
              </Stack>
      <Stack p={1} mb={2} mt={2} gap={1} direction='row' alignItems='center' justifyContent='center'>
      <Button onClick={()=>setCurrentDetail('des')} sx={{
        borderRadius:'15px', fontWeight:'600',
        backgroundColor: currentDet ==='des'? '#1976d2' : '#F5F5F5',
        color: currentDet ==='des'? '#fff': '#555555',
        '&:hover':{
          color:'#fff'
        }
        }} variant="contained">Job Description</Button>
      <Button onClick={()=>setCurrentDetail('res')} sx={{
        borderRadius:'15px', fontWeight:'600',
        backgroundColor: currentDet ==='res'? '#1976d2' : '#F5F5F5',
        color: currentDet ==='res'? '#fff': '#555555',
        '&:hover':{
          color:'#fff'
        }
        }} variant="contained">Job Highlights</Button>
      <Button onClick={()=>setCurrentDetail('req')} sx={{
        borderRadius:'15px', fontWeight:'600',
        backgroundColor: currentDet ==='req'? '#1976d2' : '#F5F5F5',
        color: currentDet ==='req'? '#fff': '#555555',
        '&:hover':{
          color:'#fff'
        }
        }} variant="contained">Job Requirement</Button>
      </Stack>
      <Divider></Divider>
      
        {currentDet==='des' &&(
          <Box  mt={2} sx={{marginLeft:'auto', marginRight:'auto'}}  width='90%'>
          <Button size="small" sx={{
            width:'100px',
            fontSize:'12px',
            borderRadius: '25px'
          }} variant="contained">
           {jobDetail.job_employment_type}
          </Button>
          {jobDetail.job_is_remote && (
                <Button color="success" size="small" sx={{
                  width:'100px',
                  fontSize:'12px',
                  borderRadius: '25px',
                  marginLeft: '5px'
                }} variant="contained">
                 Remote
                </Button>)
              }
          <p>{str =jobDetail?.job_description?.split('\n').map((item)=>{
            return <p>{item}</p>
          })}</p>
          </Box>
        )}

        {currentDet==='req' &&(
          <Box mt={2} mb={2} sx={{marginLeft:'auto', marginRight:'auto'}}  width='90%'>
              <Typography variant='h5'>
                Skills Required:
              </Typography>
              {jobDetail.job_required_skills && (
              jobDetail.job_required_skills.map((item)=>(
                <li style={{marginLeft:'20px'}}>{item}</li>
              ))) 
              }
              {!jobDetail.job_required_skills && (
                <Typography variant='h8'>
                  N/A
                </Typography>    
              ) 
            }

              <Typography mt={2} variant='h5'>
                Qualification Required:
              </Typography>
              {jobDetail.job_highlights.Qualifications && (
              jobDetail.job_highlights.Qualifications.map((item)=>(
                <li style={{marginLeft:'20px'}}>{item}</li>
              ))) 
              }
              {!jobDetail.job_highlights.Qualifications && (
                <Typography variant='h8'>
                  N/A
                </Typography>    
              ) 
            }

            
          </Box>
        )}
          {currentDet==='res' &&(
          <Box mt={2} mb={2} sx={{marginLeft:'auto', marginRight:'auto'}}  width='90%'>
              <Typography variant='h5'>
                Responsibilities:
              </Typography>
              {jobDetail.job_highlights.Responsibilities && (
              jobDetail.job_highlights.Responsibilities.map((item)=>(
                <li style={{marginLeft:'20px'}}>{item}</li>
              ))) 
              }
              {!jobDetail.job_highlights.Responsibilities && (
                <Typography variant='h8'>
                  N/A
                </Typography>    
              ) 
            }

              <Typography mt={2} variant='h5'>
                Benefits:
              </Typography>
              {jobDetail.job_highlights.Benefits && (
              jobDetail.job_highlights.Benefits.map((item)=>(
                <li style={{marginLeft:'20px'}}>{item}</li>
              ))) 
              }
              {!jobDetail.job_highlights.Benefits && (
                <Typography variant='h8'>
                  N/A
                </Typography>    
              ) 
            }

            
          </Box>
        )}

    </Box>
  )
}

export default JobDetailComp