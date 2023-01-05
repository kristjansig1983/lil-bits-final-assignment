import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

const Meal = () => {
  const [state, setState] = useState()

  const getMeal = () => {
    fetch('https://themealdb.com/api/json/v1/1/random.php')
      .then((res) => res.json())
      .then((result) => setState(result.meals[0]))
  }
  useEffect(() => {
    getMeal()
  }, [])
  console.log(state)

  return (
    <div>
      {state ? <MealImg src={state.strMealThumb} /> : <p>...Loading</p>}
      <div>
        <button onclick={getMeal}></button>
      </div>
    </div>
  )
}

const MealImg = styled.img`
  height: 20em;
  width: 40em;
`

export default Meal
