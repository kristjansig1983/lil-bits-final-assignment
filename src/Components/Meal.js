import React, { useState } from 'react'
import styled from 'styled-components'

function Meal() {
  const [meal, setMeal] = useState('')
  function fetch_meal() {
    fetch('https://api.punkapi.com/v2/beers')
      .then(
        (res) => {
          if (res.ok) {
            return res.json()
          }
          throw new Error('Request Failed')
        },
        (networkError) => console.timeLog(networkError.message)
      )
      .then((jsonRes) => {
        setMeal(jsonRes[0].meal)
      })
  }
  return (
    <div>
      <MealImg src='https://api.punkapi.com/v2/beers' />
      <button onClick={fetch_meal}>bleh</button>
    </div>
  )
}

const MealImg = styled.img`
  height: 20em;
  width: 40em;
`

export default Meal
