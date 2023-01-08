import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import DatePicker from 'react-datepicker'
import subDays from 'date-fns/subDays'
import setHours from 'date-fns/setHours'
import setMinutes from 'date-fns/setMinutes'
import 'react-datepicker/dist/react-datepicker.css'
import { FaArrowCircleLeft } from 'react-icons/fa'
import { FaArrowCircleRight } from 'react-icons/fa'
import '.././App.css'

export function GuestFunction() {
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

  return (
    <GuestBox>
      <GuestButton onClick={decrementCount}>
        <FaArrowCircleLeft size={42} />
      </GuestButton>
      <h1>{count}</h1>
      <GuestButton onClick={incrementCount}>
        <FaArrowCircleRight size={42} />
      </GuestButton>
    </GuestBox>
  )
}

export const GuestBox = styled.div`
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
