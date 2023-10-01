import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import ForwardToInboxTwoToneIcon from '@mui/icons-material/ForwardToInboxTwoTone';


const EmailSection = () => {
  return (
    <Stack  sx={{
        background: '#fff',
        padding: '20px',
        width:{lg:'500px'}
        
    }}>
        <Stack direction='row' gap={1} alignItems='center' justifyContent='center'>
            <ForwardToInboxTwoToneIcon sx={{width: '50px', height:'50px'}}/> 
        <Typography sx={{
            fontSize:{lg:'25px', sm:'20px' , xs:'20px'},
            fontWeight:'bold'
        }} >
            Create job alert
        </Typography>
        </Stack>
        <Typography sx={{
            fontSize:{lg:'30px', sm:'25px' , xs:'20px'},
            fontWeight:{lg:'500', sm:'200' , xs:'300'}
        }} mb={2} mt={2} >
        Enter your Email below to receive your top new job matches directly in your inbox.
        </Typography>
        <input placeholder='Enter E-mail' type="text" style={{height: '50px',padding:'10px', fontSize:'20px', borderRadius: '10px', borderStyle:'none', backgroundColor:'whitesmoke' , marginBottom:'15px'}} />
        <Button sx={{

            height:'55px',
            margin:{xs:'auto'},
            width:{lg:'100%', sm:'70%', xs:'60%'},
            fontSize:'20px',
            fontWeight:{lg:'400', sm:'300', xs:'200'}
        }} variant='contained'>Subscribe</Button>        
    </Stack>
  )
}

export default EmailSection