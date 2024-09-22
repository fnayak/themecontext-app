import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
    
    const { theme, toggleTheme } = useContext(ThemeContext);
    

  return (
    <AppBar>
        <Toolbar>
            <Typography>My Themed App</Typography>
            <Button color='inherit' onClick = {toggleTheme}>
                Switch to {theme === 'light' ? 'dark' : 'light'} theme
            </Button>
        </Toolbar>
    </AppBar>
  )
}

export default Header