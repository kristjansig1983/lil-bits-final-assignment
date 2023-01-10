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
import Header from '../Components/Header'

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
      <Header />
      <OrderBox>
        <SelectionText>Chose Date</SelectionText>
        <Calendar onChange={setDate} value={date} tileDisabled={tileDisabled} />
        <Form onSubmit={handleSubmit}>
          <Label>
            Time:
            <br></br>
            <TimeSelect
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
            </TimeSelect>
          </Label>
          <br></br>
          <Label>Number of people:</Label>
          <GuestInput
            type='number'
            max={10}
            value={people}
            onChange={(event) => setPeople(event.target.value)}
            min='1'
            required
          />
          <br></br>
          <Label>Email</Label>
          <EmailInput
            placeholder='Enter Your Email'
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
        </Form>
      </OrderBox>
    </DrinksPage>
  )
}

const DrinksPage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #ba2329;
  font-family: 'Times New Roman', Times, serif;
`

const OrderBox = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  justify-content: center;
  margin: 5em;
  padding: 6px;
  height: 43em;
  width: 50em;
  border: 2px solid black;
  border-radius: 10px;
`
const OrderButton = styled.button`
  align-self: flex-end;
  margin: 10px;
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
const GuestInput = styled.input.attrs((props) => ({
  type: 'number',
  size: props.small ? 5 : undefined,
}))`
  display: block;
  margin-top: 6px;
  height: 20px;
  width: 50px;
  font-size: larger;
  background-color: #e0e39a;
  border: 2px solid #ba2329;
  border-radius: 10px;
  color: #ba2329;
`
const EmailInput = styled.input.attrs((props) => ({
  type: 'email',
  size: props.small ? 5 : undefined,
}))`
  margin-top: 6px;
  height: 2em;
  width: 20em;
  border-radius: 10px;
  border: 2px solid #ba2329;
  color: #ba2329;
  background-color: #e0e39a;
`
const SelectionText = styled.p`
  font-size: x-large;
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
const Label = styled.label`
  font-size: larger;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`
const TimeSelect = styled.select`
  height: 2em;
  border-radius: 10px;
  border: 2px solid #ba2329;
  color: #ba2329;
  background-color: #e0e39a;
`

export default OrderScreen
