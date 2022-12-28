import './App.css'
import styled from 'styled-components'
import Home from './Components/Home'
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom'
import SelectDish from './Components/SelectDish'
import Drinks from './Components/Drinks'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/SelectDish' element={<SelectDish />} />
          <Route exact path='/Drinks' element={<Drinks />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
