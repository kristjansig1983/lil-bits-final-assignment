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
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/SelectDish' element={<SelectDish />} />
          <Route exact path='/SelectDish/Drinks' element={<Drinks />} />
          <Route
            exact
            path='/SelectDish/Drinks/OrderScreen'
            element={<OrderScreen />}
          />
          <Route
            exact
            path='/SelectDish/Drinks/OrderScreen/ReceiptScreen'
            element={<ReceiptScreen />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
