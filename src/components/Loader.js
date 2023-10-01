import { Stack } from '@mui/material'
import React from 'react'
import PropagateLoader from "react-spinners/PropagateLoader";

const Loader = () => {
  return (
    <Stack  direction='row' justifyContent='center' alignItems='center' width='100%' height='500px'>
    <PropagateLoader
  color="hsla(209, 67%, 53%, 0.5)"
  size={20}
/>
    </Stack>
  )
}

export default Loader