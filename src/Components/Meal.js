import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Meal = () => {
  const MealPrice = 50.0
  const [meals, setMeals] = useState([])
  const getMeal = async () => {
    const result = await axios.get(
      'https://themealdb.com/api/json/v1/1/random.php'
    )
    setMeals(result.data.meals)
  }
  useEffect(() => {
    getMeal()
  }, [])

  if (meals.length === 0) {
    return (
      <div>
        <p>...Loading</p>
      </div>
    )
  }

  return (
    <div>
      {meals.map((meal) => (
        <DishInfo key={meal.idMeal}>
          <MealImg src={meal.strMealThumb} />
          <NewDish onClick={getMeal}>Generate New</NewDish>
          <DishName>
            <p>{meal.strMeal}</p>
            <p>${MealPrice}</p>
          </DishName>
        </DishInfo>
      ))}
    </div>
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
