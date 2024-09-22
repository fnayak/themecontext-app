import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { Box, Typography, Paper } from '@mui/material'

const Content = () => {
    const { theme } = useContext(ThemeContext);
  
    return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} minHeight={'80vh'} bgcolor={theme === 'light' ? '#f5f5f5' : '#424242'}>
        <Paper elevation={3} sx={{padding: 4}}>
            <Typography variant='h5' gutterBottom>
                {`Current Theme: ${theme}`}
            </Typography>
        </Paper>
    </Box>
  )
}

export default Content;