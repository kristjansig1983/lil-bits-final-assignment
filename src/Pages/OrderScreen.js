import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import {
  findOrder,
  createOrderWithEmail,
  updateInfo,
} from '../utilities/storage'
import { getEmailParam } from '../utilities/params'

function OrderScreen() {
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState('16:00')
  const [people, setPeople] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const email = getEmailParam()
    const order = findOrder(email)
    if (order.info) {
      setDate(new Date(order.info.date))
      setTime(order.info.time)
      setPeople(order.info.people)
      setEmail(order.info.email)
    }
  }, [])

  const times = []
  for (let i = 16; i < 23; i++) {
    for (let j = 0; j < 60; j += 30) {
      times.push(`${i}:${j === 0 ? '00' : '30'}`)
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    const currEmail = getEmailParam()
    if (email && time && people && date) {
      if (currEmail && findOrder(currEmail).info) {
        updateInfo(currEmail, { date, time, people, email })
      } else {
        createOrderWithEmail({ date, time, people, email })
      }
      navigate('/ReceiptScreen?email=' + email)
    } else {
      alert('Please fill in all the fields')
    }
  }

  const tileDisabled = ({ date }) => {
    const day = date.getDay()
    return (
      new Date(date) < new Date().setHours(0, 0, 0, 0) || day === 0 || day === 6
    )
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
        <Calendar onChange={setDate} value={date} tileDisabled={tileDisabled} />
        <form className='time-form' onSubmit={handleSubmit}>
          <label className='time-label'>
            Time:
            <select
              className='time-box'
              value={time}
              onChange={(event) => setTime(event.target.value)}
              required
            >
              {times.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </label>
          <br></br>
          <label className='people-box'>
            Number of people:
            <input
              className='number-people'
              type='number'
              value={people}
              onChange={(event) => setPeople(event.target.value)}
              min='1'
              required
            />
            <br></br>
            Email:
            <EmailInput
              className='number-people'
              type='email'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <br></br>
            <OrderButton className='receipt-screen-button' type='submit'>
              Next
            </OrderButton>
          </label>
        </form>
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
