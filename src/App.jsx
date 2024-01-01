import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import YouTubeData from './YouTubeData'
import Jsonplaceholder from './Jsonplaceholder'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Jsonplaceholder' element={<Jsonplaceholder/>}/>
        <Route path='/YouTubeData' element={<YouTubeData/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
