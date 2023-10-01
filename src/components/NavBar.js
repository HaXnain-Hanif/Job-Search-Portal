import { Box, Button, FormControl, Input, InputAdornment, Stack } from '@mui/material'
import Logo from '../assets/images/job_search4.jpg';
import InputLogo from '../assets/images/off_bag.png'
import LocationImg from '../assets/images/location.png'
import React, { useState } from 'react'
import { fetchData, options } from '../util/fetchData';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = ({searchText, setSearchText, locationText, setLocationText, setJobResults, setIsLoading}) => {
  const navigate = useNavigate();
  const handleClick= async()=>{
    setIsLoading(true);
    navigate('/');
    setJobResults([]);
    const jobs = await fetchData(`https://jsearch.p.rapidapi.com/search?query=${searchText} ${', '} ${locationText} `, options);
    setJobResults(jobs.data);
    setIsLoading(false);
  }
  return (
   
      <Stack spacing={0} p='20px' gap={3}  alignItems='center' justifyContent='space-evenly' sx={{
        backgroundColor:'#fff',
        flexDirection:{lg: 'row',sm:'column'}
      }}>
        <Link to='/'>
        <img src={Logo} alt="job_search" height='80px' width='80px' style={{borderRadius: '25px'}}/>
        </Link>
      <Box sx={{paddingBottom:{lg:'40px', sm:'30px', xs:'20px'}}}  flexDirection='column' alignItems='center' justifyContent='flex-end' >
      
        
        <Input sx={{
          height:{lg:'70px', sm:'60px', xs:'50px'},
          fontSize: {lg: '25px', sm:'20px'},
         
        }} value={searchText} onChange={(e)=>setSearchText(e.target.value)} placeholder='Search jobs'  style={{ backgroundColor:'#fff',width:'100%', borderRadius: '5px'}}
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <img style={{ paddingBottom:'5px'}} src={InputLogo} alt="search" width='30px'/>
            </InputAdornment>
          }
        /> 
      
        
        <Input  sx={{
          height:{lg:'70px', sm:'60px', xs:'50px'},
          fontSize: {lg: '25px', sm:'20px'},
          
        }}value={locationText} onChange={(e)=> setLocationText(e.target.value)} placeholder='Country, city' style={{backgroundColor:'#fff', width:'100%', borderRadius: '5px'}}
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <img style={{marginLeft:'2px'}} src={LocationImg} alt="location" width='30px'/>
            </InputAdornment>
          }
        />
        
      </Box>
       
    <Button onClick={handleClick} sx={{
      height:{lg: '60px', sm:'40px'},
      width:{lg:'200px', sm:'120px'},
      fontSize:{lg: '20px', sm:'20px'}
    }}  variant="contained">Search</Button> 
      </Stack>
   
  )
}

export default NavBar