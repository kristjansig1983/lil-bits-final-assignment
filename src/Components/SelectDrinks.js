import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const SelectDrinks = () => {
  const [drinks, setDrinks] = useState()

  const getDrinks = () => {
    fetch('https://api.punkapi.com/v2/beers')
      .then((res) => res.json())
      .then((result) => setDrinks(result))
  }
  useEffect(() => {
    getDrinks()
  }, [])
  console.log(drinks)

  const [orderList, setOrderList] = useState([])
  const drinkPrice = 1000


  return (
    <DrinksPage>
      <DrinksGrid type='button' onClick={}>
        {drinks ? (
          drinks.map((drink) => (
            <DrinkBox>
              <DrinksImg key={drink.id} src={drink.image_url} />
              <DrinksName>
                {drinks ? <p>{drink.name}</p> : <p>...Loading</p>}
              </DrinksName>
            </DrinkBox>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </DrinksGrid>
    </DrinksPage>
  )
}

const DrinksImg = styled.img`
  height: 12em;
  width: 5em;
  margin-top: 2em;
`
const DrinksPage = styled.div`
  display: flex;
  justify-content: center;
`
const DrinksGrid = styled.div`
  display: grid;
  flex-direction: column;
  grid-template-columns: repeat(5, 1fr);
`
const DrinksName = styled.p`
  align-self: center;
  font-size: small;
`
const DrinkBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 18em;
  width: 8em;
  border: 2px solid black;
  margin: 10px;
  border-radius: 10px;
  :hover {
    background-color: darkgray;
  }
  
`

export default SelectDrinks
