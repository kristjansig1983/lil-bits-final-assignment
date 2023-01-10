import './App.css'
import Home from './Pages/Home'
import { Route, Routes, Navigate } from 'react-router-dom'
import SelectDish from './Pages/SelectDish'
import SelectDrinks from './Pages/SelectDrinks'
import OrderScreen from './Pages/OrderScreen'
import ReceiptScreen from './Pages/ReceiptScreen'

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/SelectDish' element={<SelectDish />} />
        <Route path='/SelectDrinks' element={<SelectDrinks />} />
        <Route path='/OrderScreen' element={<OrderScreen />} />
        <Route path='/ReceiptScreen' element={<ReceiptScreen />} />
      </Routes>
    </div>
  )
}

export default App
