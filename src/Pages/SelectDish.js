import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from 'react-router-dom'
import Meal from '../Components/Meal'
import {
  findOrder,
  createNewOrder,
  getCurrentOrder,
  updateMeal,
} from '../utilities/storage'
import { getEmailParam } from '../utilities/params'

const SelectDish = () => {
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

  const Drinkspage = () => {
    const email = getEmailParam()
    if (email && findOrder(email).info) {
      updateMeal(email, meal)
      navigate(`/Drinks?email=${email}`)
    } else {
      createNewOrder(meal)
      navigate('/Drinks')
    }
  }

  if (loading) {
    return <p>Loading...</p>
  }
  return (
    <DishPage>
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
      <Top>
        <MainCourse>
          <DishInfo key={meal.idMeal}>
            <MealImg src={meal.strMealThumb} />
            <NewDish onClick={handleClick}>Generate New</NewDish>
            <DishName>
              <p>{meal.strMeal}</p>
            </DishName>
          </DishInfo>
        </MainCourse>
        <NextPage>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <OrdedButton type='button' onClick={Drinkspage}>
            <Link to={'/Drinks'}></Link>
            Select Drinks
          </OrdedButton>
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
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`

const Head = styled.div`
  display: flex;
  justify-content: center;
`
const Logo = styled.img`
  height: 10em;
`

const HeaderNav = styled.a`
  font-size: larger;
  padding: 4em;
`
const MainCourse = styled.div`
  height: 35em;
  width: 40em;
  border: 2px solid black;
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
  border: 2px solid black;
  border-radius: 10px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`
const OrdedButton = styled.button`
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
  font-family: 'Courier New', Courier, monospace;
  padding: 0;
  border-radius: 1em;
`
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

export default SelectDish
