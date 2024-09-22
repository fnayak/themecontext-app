import './App.css'
import React from 'react'
import Header from './components/Header'
import Content from './components/Content'
import { CustomThemeProvider } from './context/ThemeContext'


function App() {


  return (
    <CustomThemeProvider>
      <Header />
      <Content />
    </CustomThemeProvider>
  )
}

export default App
