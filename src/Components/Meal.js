import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

const Meal = () => {
  const [state, setState] = useState()

  const getMeal = () => {
    if (state) {
      console.log(state.strMeal)
    }
    fetch('https://themealdb.com/api/json/v1/1/random.php')
      .then((res) => res.json())
      .then((result) => setState(result.meals[0]))
  }
  useEffect(() => {
    getMeal()
  }, [])
  console.log(state)

  const [orderList, setOrderList] = useState([])
  const mealPrice = 5000

  return (
    <DishInfo>
      {state ? <MealImg src={state.strMealThumb} /> : <p>...Loading</p>}
      <NewDish onClick={getMeal}>Generate New</NewDish>
      <DishName>
        {state ? <p>{state.strMeal}</p> : <p>...Loading</p>}
        <DishText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </DishText>
      </DishName>
    </DishInfo>
  )
}
const DishInfo = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  padding: 6px;
`
const MealImg = styled.img`
  height: 20em;
  width: 40em;
`
const NewDish = styled.button`
  align-self: center;
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
  font-family: 'Courier New', Courier, monospace;
  padding: 0;
  border-radius: 1em;
`
const DishName = styled.p`
  align-self: center;
  font-size: x-large;
`
const DishText = styled.p`
  align-self: center;
  font-size: smaller;
`

export default Meal
