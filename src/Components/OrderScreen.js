import styled from 'styled-components'
import React, { useState } from 'react'
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from 'react-router-dom'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

const OrderScreen = () => {
  const [value, onChange] = useState(new Date())
  const navigate = useNavigate()

  const receiptScreen = () => {
    navigate('/ReceiptScreen')
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
      <OrderBox>
        <SelectionText>Chose Date</SelectionText>
        <Calendar onChange={onChange} showWeekNumbers value={value} />
        <SelectionText>Number of Guests</SelectionText>
        <GuestInput placeholder='0' min='1' />
        <EmailInput placeholder='Email'></EmailInput>
        <OrderButton type='button' onClick={receiptScreen}>
          Order
        </OrderButton>
      </OrderBox>
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
const OrderBox = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: flex-start;
  justify-items: flex-end;
  justify-content: flex-end;
  padding: 6px;
  height: 35em;
  width: 50em;
  border: 2px solid black;
  border-radius: 10px;
`
const OrderButton = styled.button`
  align-self: flex-end;
  margin: 10px;
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
const GuestInput = styled.input.attrs((props) => ({
  type: 'number',
  size: props.small ? 5 : undefined,
}))`
  display: block;
  margin-top: 6px;
  margin-left: 8em;
  height: 20px;
  width: 50px;
  font-size: larger;
`
const EmailInput = styled.input.attrs((props) => ({
  type: 'email',
  size: props.small ? 5 : undefined,
}))`
  margin-top: 6px;
  margin-left: 8em;
`
const SelectionText = styled.p`
  margin-left: 8em;
`

export default OrderScreen
