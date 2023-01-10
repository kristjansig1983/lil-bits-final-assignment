import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import { getEmailParam } from '../utilities/params'
import { findOrder } from '../utilities/storage'
import { useNavigate } from 'react-router-dom'
import Header from '../Components/Header'

const ReceiptScreen = () => {
  const navigate = useNavigate()
  const [order, setOrder] = useState()

  useEffect(() => {
    const email = getEmailParam()
    const order = findOrder(email)
    setOrder(order)
  }, [])

  const calculateOrder = () => {
    const meals = 500 * order.info.people
    const drinks = 50 * order.drinks.length
    return meals + drinks
  }

  const homeScreen = () => {
    navigate('/')
  }
  return (
    <DrinksPage>
      <Header />
      <OrderButton type='button' onClick={homeScreen}>
        Home
      </OrderButton>
      <Receipt>
        <div>
          <div>
            {order && order.info ? (
              <>
                <ReceiptHeader>Receipt</ReceiptHeader>
                <div>
                  <p>Time: {order.info.time}</p>
                  <p>Number of people: {order.info.people}</p>
                  <p>Email: {order.info.email}</p>
                </div>
                <ReceiptList>
                  <li>
                    Meal: {order.meal.strMeal} {order.info.people} x
                    <span> ${500}</span>
                  </li>
                  {order.drinks.map((drink) => (
                    <li key={drink.id}>
                      Drinks: {drink.name}
                      <span> ${50}</span>
                    </li>
                  ))}
                  <li>
                    Your Total Is
                    <span> ${calculateOrder()}</span>
                  </li>
                </ReceiptList>
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
  font-family: 'Times New Roman', Times, serif;
  font-weight: bold;
`

const Receipt = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  height: 40em;
  width: 35em;
  border: 2px solid black;
  border-radius: 10px;
  border: 4px solid #ba2329;
  font-size: larger;
`
const OrderButton = styled.button`
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
  font-family: 'Times New Roman', Times, serif;
  padding: 0;
  border-radius: 1em;
  border: 0px;
`
const ReceiptHeader = styled.p`
  font-size: xx-large;
  font-weight: bolder;
`
const ReceiptList = styled.ul`
  display: grid;
  grid-gap: 1em;
`
export default ReceiptScreen
