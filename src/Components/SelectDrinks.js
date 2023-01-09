import React, { useState, useRef, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const SelectDrinks = () => {
  const [drinks, setDrinks] = useState()
  const DrinkPrice = 10
  const [dataSet, setDataSet] = useState([])

  const getDrinks = async () => {
    const result = await axios.get('https://api.punkapi.com/v2/beers')
    setDrinks(result.data)
  }

  useEffect(() => {
    getDrinks()
  }, [])

  return (
    <DrinksPage>
      <DrinksGrid>
        {drinks ? (
          drinks.map((drink) => (
            <DrinkCard
              key={drink.id}
              selected={dataSet.includes(drink.name)}
              onClick={() => {
                setDataSet([...dataSet, drink.name, DrinkPrice])
              }}
            >
              <DrinksImg key={drink.id} src={drink.image_url} />
              <DrinksName>
                {drinks ? <p>{drink.name}</p> : <p>...Loading</p>}
                <p>${DrinkPrice}</p>
              </DrinksName>
            </DrinkCard>
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
  text-align: center;
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
const DrinkCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 20em;
  width: 8em;
  border: 2px solid black;
  margin: 10px;
  border-radius: 10px;
  :hover {
    background-color: darkgray;
  }
  ${(props) =>
    props.selected &&
    css`
      background-color: darkgray;
      &:hover {
        background-color: darkgray;
      }
    `}
`

export default SelectDrinks
