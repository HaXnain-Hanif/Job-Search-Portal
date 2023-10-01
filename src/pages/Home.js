import { Avatar, Box, Button, Card, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import PlaceIcon from '@mui/icons-material/Place';
import EmailSection from '../components/EmailSection';
import Loader from '../components/Loader';

const Home = ({jobResults, isLoading, searchtext, locationText}) => {
  
  let date;
  let shortString;
  return (
    <Box m='auto' sx={{
      width: {lg:'1200px', sm:'600px', xs:'100%'}
    }}>
      {jobResults.length !== 0 || isLoading === false  ? (
        <Grid p={1} sx={{
          flexDirection:{lg: 'row',sm:'column', xs:'column'},
          margin:{sm:'auto', xs:'auto'},
          width:{lg:'100%', sm:'600px', xs:'95%'},
          alignItems:{lg: 'center',sm:'center', xs:'center'},
          justifyContent:{lg: 'center',sm:'center', xs:'center'}
          }}   mt={2} container spacing={2}>
        <Grid>
          {jobResults.length !== 0 && (
            <Typography width='100%' sx={{
              fontSize:{lg:'20px',sm:'20px', xs: '20px'},
              fontWeight:{lg:'400', sm:'200', xs:'200'}
              }} p={1} mb={2}>
              SHOWING RESULTS FOR "{searchtext}" IN "{locationText}".
            </Typography>
          )}
          {jobResults.length === 0 && (
            <Typography textAlign='center' sx={{
              fontSize:{lg:'20px',sm:'10px'},
              fontWeight:{lg:'400', sm:'200'}
            }}  p={3} >
              Ultra-Fast and Simple Job Search for jobs posted on LinkedIn, Indeed, Glassdoor, ZipRecruiter, BeBee and many others, all in a single Search. <br/> <br/>
              Search with your respective field and location. <br/> <br/>
              Jobs Related to your Field and Location will show here.
            </Typography>
          )}
          
          {jobResults.map((job)=>(
            <Link style={{textDecoration: 'none'}} to={`/details/${job.job_id}`}>
              <Card  sx={{
                padding: '15px',marginBottom:'10px',
                '&:hover': {
                  backgroundColor: 'whitesmoke',
                }
                }} variant="outlined">
                <Stack p={1} gap={1} direction='column'>
                  <Stack direction='row' gap={2} justifyContent='flex-start' alignItems='center'>
                  { job.employer_logo? <Avatar sx={{ width: '50px', height: '50px' }} alt="Companylogo" src={job.employer_logo} /> : <Avatar sx={{ width: '50px', height: '50px' }} alt={job.employer_name} src={job.employer_name}/>}
                  <Typography variant='h5'>
                    {job.employer_name}
                  </Typography> 
                  
                  </Stack>
                  <Typography variant='h5'>
                    {job.job_title}
                  </Typography>
                  <p>{shortString = job.job_description.substring(0, 250) + '...'}</p>
                  <Typography color='GrayText' variant='h7'>
                    <Stack direction='row' justifyContent='flex-start' alignItems='center'>
                    <PlaceIcon/>
                    {job.job_country}
                    </Stack>
                  </Typography>
                  <Stack direction='row' gap={2} justifyContent='flex-start' alignItems='center'>
                  <Button size="small" sx={{
                    width:'100px',
                    fontSize:'12px',
                    borderRadius: '25px'
                  }} variant="contained">
                   {job.job_employment_type}
                  </Button>
                  {job.job_is_remote && (
                    <Button color="success" size="small" sx={{
                      width:'100px',
                      fontSize:'12px',
                      borderRadius: '25px'
                    }} variant="contained">
                     Remote
                    </Button>)
                  }
                  </Stack>
                  <Typography color='GrayText' variant='h7'>
                    { date = new Date(job.job_posted_at_datetime_utc).toLocaleDateString()}
                  </Typography>
                </Stack>
              </Card>
            </Link>
          ))}
        
        </Grid>
        <Grid>
            <Card variant='outlined'>
            <EmailSection/>
            </Card>
        </Grid>
    </Grid>
      ): (
        <Loader/>
      )}
    </Box>
  )
}

export default Home