import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import News from './News'

function App() {
  return (
    <>
      
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<News category='all' />} />
          <Route path='/business' element={<News category='business'/>}/>
          <Route path='/technology' element={<News category='technology'/>}/>
          <Route path='/cricket' element={<News category='cricket'/>}/>
          <Route path='/international' element={<News category='international'/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App