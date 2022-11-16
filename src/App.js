import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import AirBnb from './pages/AirBnb'
import PlaceToStay from './pages/PlaceToStay'


function App() {
  return (
    <Router>
        
        <Routes>
            <Route path='/' element={<AirBnb />}/>
            <Route path='/PlaceToStay' element={<PlaceToStay />}/>
        </Routes>
        
    </Router>
  )
}

export default App