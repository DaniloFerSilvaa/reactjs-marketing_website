import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { NotFound } from './pages/notFound'


function App() {

  return (
    <div>
          <Routes>
               <Route path='/' element={<Home/>   } /> 

               
               <Route path='*' element={<NotFound/>} />
          </Routes>
    </div>
  )
}

export default App
