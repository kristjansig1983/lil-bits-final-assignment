import './App.css'
import styled from 'styled-components'
import Home from './Components/Home'
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom'
import SelectDish from './Components/SelectDish'
import Drinks from './Components/Drinks'
import OrderScreen from './Components/OrderScreen'
import ReceiptScreen from './Components/ReceiptScreen'

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/SelectDish' element={<SelectDish />} />
        <Route path='/Drinks' element={<Drinks />} />
        <Route path='/OrderScreen' element={<OrderScreen />} />
        <Route path='/ReceiptScreen' element={<ReceiptScreen />} />
      </Routes>
    </div>
  )
}

export default App
