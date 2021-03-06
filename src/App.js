import { Typography } from '@mui/material'
import React from 'react'
import Form from './Form'

import './App.css'
import Footer from './Footer'


function App() {
  return (
    <div className="container">
      <Typography variant="h4" align="center" className="title">Todo App</Typography>
      <Typography align="center" className="sub-title"> 🔥 React 🔥 </Typography> 

      <Form/>
      <Footer/>
      
    </div>
  )
}

export default App
