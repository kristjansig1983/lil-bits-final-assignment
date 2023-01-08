import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from 'react-router-dom'
import DatePicker from 'react-datepicker'
import { subDays, setHours, setMinutes } from 'date-fns'
import 'react-datepicker/dist/react-datepicker.css'
import { FaArrowCircleLeft } from 'react-icons/fa'
import { FaArrowCircleRight } from 'react-icons/fa'

const OrderScreen = () => {
  const [email, setEmail] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)
  const handleChange = (e) => {
    setEmail(e.target.value)
    verifyEmail()
  }
  useEffect(() => {}, [email])
  localStorage.setItem('email', JSON.stringify(email))
  const verifyEmail = () => {
    const regEx = /[a-zA-Z0-9.%+-]+@[a-z0-9]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
    if (regEx.test(email)) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }
  const navigate = useNavigate()

  function Calendar() {
    const [startDate, setStartDate] = useState(new Date())
    useEffect(() => {}, [startDate])
    localStorage.setItem('Date', startDate)
    return (
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        minDate={subDays(new Date(), -1)}
        timeFormat='HH:mm'
        minTime={setHours(setMinutes(new Date(), 0), 16)}
        maxTime={setHours(setMinutes(new Date(), 0), 22)}
        timeCaption='time'
        dateFormat='MMMM d, yyyy h:mm aa'
      />
    )
  }
  function GuestFunction() {
    let [count, setCount] = useState(1)
    useEffect(() => {}, [count])
    localStorage.setItem('Guests', JSON.stringify(count))
    function incrementCount() {
      if (count == 10) {
        setCount(count(10))
      } else {
        count = count + 1
        setCount(count)
      }
    }
    function decrementCount() {
      if (count == 1) {
        setCount(count(1))
      } else {
        count = count - 1
        setCount(count)
      }
    }
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
        <Calendar />
        <SelectionText>Number of Guests</SelectionText>
        <GuestFunction>
          <GuestBox>
            <GuestButton onClick={decrementCount}>
              <FaArrowCircleLeft size={42} />
            </GuestButton>
            <h1>{count}</h1>
            <GuestButton onClick={incrementCount}>
              <FaArrowCircleRight size={42} />
            </GuestButton>
          </GuestBox>
        </GuestFunction>
        <EmailInput placeholder='Email' onChange={handleChange}></EmailInput>
        <Link to={'/ReceiptScreen'}>
          <OrderButton disabled={isDisabled}>Order</OrderButton>
        </Link>
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
  align-items: center;
  justify-content: center;
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
const GuestBox = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const GuestButton = styled.button`
  color: var(--clr-alert);
  background-color: var(--clr-primary);
  border: none;
  align-self: center;
  justify-self: center;
  font-family: Morille;
  cursor: pointer;
  &:hover {
    background-color: var(--clr-hover);
  }
`

export default OrderScreen
