import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import { getEmailParam } from '../utilities/params'
import { findOrder } from '../utilities/storage'
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from 'react-router-dom'

const ReceiptScreen = () => {
  const navigate = useNavigate()
  const [order, setOrder] = useState()

  useEffect(() => {
    const email = getEmailParam()
    const order = findOrder(email)
    setOrder(order)
  }, [])

  const calculateOrder = () => {
    const meals = 200 * order.info.people
    const drinks = 50 * order.drinks.length
    return meals + drinks
  }

  const homeScreen = () => {
    navigate('/')
  }
  return (
    <DrinksPage>
      <div>
        <Head>
          <Logo
            src='http://ih1.redbubble.net/image.181146356.8650/sticker,375x360.u1.png'
            alt='logo'
          />
          <HeaderNav href=''>Menu</HeaderNav>
          <HeaderNav href=''>Atmosphere</HeaderNav>
          <HeaderNav href=''>Location</HeaderNav>
          <HeaderNav href=''>Contact Us</HeaderNav>
        </Head>
      </div>
      <OrdedButton type='button' onClick={homeScreen}>
        Home
      </OrdedButton>
      <Receipt>
        <div>
          <div className='grid-item-receiptscreen'>
            {order && order.info ? (
              <>
                <h2 className='h2-receipt'>Receipt</h2>
                <div className='p-receipt'>
                  <p className=''>Time: {order.info.time}</p>
                  <p>Number of people: {order.info.people}</p>
                  <p>Email: {order.info.email}</p>
                </div>
                <ul className='receipt-ul'>
                  <li className='receipt-list'>
                    Meal: {order.meal.strMeal} x {order.info.people}
                    <span> ${200}</span>
                  </li>
                  {order.drinks.map((drink) => (
                    <li key={drink.id}>
                      Drinks: {drink.name}
                      <span> ${50}</span>
                    </li>
                  ))}
                  <li className='total'>
                    Your Total Is
                    <span> ${calculateOrder()}</span>
                  </li>
                </ul>
              </>
            ) : (
              <p>Order not found</p>
            )}
          </div>
        </div>
      </Receipt>
    </DrinksPage>
  )
}

const DrinksPage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #ba2329;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`
const Head = styled.div`
  display: flex;
  justify-content: center;
`

const HeaderNav = styled.a`
  font-size: larger;
  padding: 4em;
`

const Logo = styled.img`
  height: 10em;
`
const Receipt = styled.div`
  display: flex;
  align-self: center;
  height: 40em;
  width: 35em;
  border: 2px solid black;
  border-radius: 10px;
`
const OrdedButton = styled.button`
  align-self: flex-end;
  margin: 10px;
  margin-right: 10em;
  height: 4em;
  width: 12em;
  background-color: #ba2329;
  :hover {
    background-color: #c16757;
  }
  color: white;
  font-size: large;
  font-weight: bolder;
  font-family: 'Courier New', Courier, monospace;
  padding: 0;
  border-radius: 1em;
`
export default ReceiptScreen
