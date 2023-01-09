import './App.css'
import styled from 'styled-components'
import Home from './Pages/Home'
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom'
import SelectDish from './Pages/SelectDish'
import Drinks from './Pages/Drinks'
import OrderScreen from './Pages/OrderScreen'
import ReceiptScreen from './Pages/ReceiptScreen'

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
