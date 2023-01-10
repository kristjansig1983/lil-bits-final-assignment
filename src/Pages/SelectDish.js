import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  findOrder,
  createNewOrder,
  getCurrentOrder,
  updateMeal,
} from '../utilities/storage'
import { getEmailParam } from '../utilities/params'
import Header from '../Components/Header'

function SelectDish() {
  const navigate = useNavigate()
  const [meal, setMeal] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const email = getEmailParam()
    const order = findOrder(email)
    if (order.meal) {
      setMeal(order.meal)
      setLoading(false)
    } else if (getCurrentOrder()) {
      setMeal(getCurrentOrder().meal)
      setLoading(false)
    } else {
      async function fetchData() {
        const response = await fetch(
          'https://themealdb.com/api/json/v1/1/random.php'
        )
        const data = await response.json()
        setMeal(data.meals[0])
        setLoading(false)
      }
      fetchData()
    }
  }, [])

  function handleClick() {
    setLoading(true)
    fetch('https://themealdb.com/api/json/v1/1/random.php')
      .then((response) => response.json())
      .then((data) => {
        setMeal(data.meals[0])
        setLoading(false)
      })
  }

  const GoToNextPage = () => {
    const email = getEmailParam()
    if (email && findOrder(email).info) {
      updateMeal(email, meal)
      navigate(`/SelectDrinks?email=${email}`)
    } else {
      createNewOrder(meal)
      navigate('/SelectDrinks')
    }
  }

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <DishPage className='App'>
      <Header />
      <Top>
        <MainCourse>
          <DishInfo key={meal.idMeal}>
            <MealImg
              className='meal-image'
              src={meal.strMealThumb}
              alt={meal.strMeal}
              width='700'
              height='500'
            />
            <HeaderText>{meal.strMeal}</HeaderText>
            <PriceText>$ 500</PriceText>
            <NewDish type='button' onClick={handleClick}>
              New Meal
            </NewDish>
          </DishInfo>
        </MainCourse>
        <NextPage onClick={() => GoToNextPage()}>
          <OrderButton>Continue to Drinks</OrderButton>
        </NextPage>
      </Top>
    </DishPage>
  )
}

const DishPage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #ba2329;
  font-family: 'Times New Roman', Times, serif;
`

const MainCourse = styled.div`
  height: 35em;
  width: 40em;
  border: 4px solid #ba2329;
  margin-right: 8px;
  border-radius: 10px;
  text-align: center;
`
const Top = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em;
  border-radius: 10px;
`
const NextPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 15em;
  width: 15em;
  border: 4px solid #ba2329;
  border-radius: 10px;
  font-family: 'Times New Roman', Times, serif;
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
const DishInfo = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
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
  font-family: 'Times New Roman', Times, serif;
  padding: 0;
  border-radius: 1em;
  border: 0px;
`

const HeaderText = styled.p`
  font-size: x-large;
  font-weight: bolder;
`
const PriceText = styled.p`
  font-size: larger;
  font-weight: bold;
`

export default SelectDish
