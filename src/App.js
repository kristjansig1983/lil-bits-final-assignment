import './App.css'
import styled from 'styled-components'
import Home from './Home'
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom'
import SelectDish from './SelectDish'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/SelectDish' element={<SelectDish />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
