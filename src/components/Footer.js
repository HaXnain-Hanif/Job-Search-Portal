import { Box, Divider, Stack, Typography } from '@mui/material'
import LogoImg from '../assets/images/job_search4.jpg'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Box marginTop="100vh" flexDirection='row' alignContent='center'  sx={{backgroundColor:'#fff'}} margin='auto' width='100%'  pb='30px'>
       <Divider variant='fullWidth'></Divider>
       <Stack pt={2} sx={{
        flexDirection:{lg: 'row',sm:'column'},
        alignItems:{lg:'flex-end', xm:'center'}
        }} color='#a3a2a3'  alignItems='flex-end' justifyContent='space-evenly'>
          <Stack direction='column' gap={3} alignItems='center' justifyContent='flex-end'>
          <img src={LogoImg} style={{borderRadius:'25px'}} alt="job Search" height='80px' width='80px' />
          <Typography textAlign='center'>
          © 2023 JSearch. All Rights Reserved.<br/>
          With 🖤 by HaXnain.
          </Typography>
          </Stack>
          <Stack sx={{
            justifyContent:{lg:'flex-start',xs:'center'}
          }} gap={10} direction='row' >
          <Stack direction='column' gap={2}>
            <p style={{fontWeight:'600', fontSize:'20px'}}>Company</p>
            <Link style={{textDecoration:'none', color:'inherit', fontSize:'20px'}} to='/'>Home</Link>
            <Link style={{textDecoration:'none', color:'inherit', fontSize:'20px'}} to='#'>Blog</Link>
            <Link style={{textDecoration:'none', color:'inherit', fontSize:'20px'}} to='#'>About Us</Link>
            <Link style={{textDecoration:'none', color:'inherit', fontSize:'20px'}} to='#'>Newsroom</Link>
          </Stack>
          <Stack direction='column' gap={2}  >
            <p style={{fontWeight:'600', fontSize:'20px'}}>Support</p>
            <Link style={{fontWeight:'500',textDecoration:'none', color:'inherit', fontSize:'20px'}} to='/'>Contact Us</Link>
            <Link style={{textDecoration:'none', color:'inherit', fontSize:'20px'}} to='#'>FAQ</Link>
            <Link style={{textDecoration:'none', color:'inherit', fontSize:'20px'}} to='#'>Terms & Privacy</Link>            
          </Stack>
          </Stack>
          <Stack mt={4} sx={{
            justifyContent:{xs:'center'},
            alignItems:{xs:'center'}
          }} direction='column' gap={2}>
            <Typography style={{fontWeight:'600', fontSize:'22px'}}>
              Follow Us
            </Typography>
            <Stack direction='row' gap={2}>
            <a href="/" style={{textDecoration:'none', color:'inherit'}}><FacebookOutlinedIcon/></a>
            <a href="/" style={{textDecoration:'none', color:'inherit'}}><TwitterIcon/></a>
            <a href="/" style={{textDecoration:'none', color:'inherit'}}><InstagramIcon/></a>
            <a href="/"style={{textDecoration:'none', color:'inherit'}}><LinkedInIcon/></a>
            </Stack>
          </Stack>
       </Stack>
    </Box>
  )
}

export default Footer