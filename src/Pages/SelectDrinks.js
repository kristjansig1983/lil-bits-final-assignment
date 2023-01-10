import styled, { css } from 'styled-components'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  addDrinksToNewOrder,
  findOrder,
  getCurrentOrder,
  updateDrinks,
} from '../utilities/storage'
import { getEmailParam } from '../utilities/params'
import Header from '../Components/Header'

function SelectDrinks() {
  const navigate = useNavigate()
  const [drinks, setDrinks] = useState([])
  const [loading, setLoading] = useState(true)

  const [selectedItems, setSelectedItems] = useState([])

  useEffect(() => {
    const email = getEmailParam()
    const order = findOrder(email)
    async function fetchData() {
      const response = await fetch('https://api.punkapi.com/v2/beers')
      const data = await response.json()
      setDrinks(data)
      setLoading(false)
    }
    fetchData()

    if (order.drinks) {
      setSelectedItems(order.drinks)
    } else if (getCurrentOrder()) {
      setSelectedItems(getCurrentOrder().drinks)
    } else setSelectedItems([])
  }, [])

  function GoToNextPage() {
    if (!Array.isArray(selectedItems) || selectedItems.length === 0) {
      alert('Please select at least one drink')
      return
    }
    const email = getEmailParam()
    if (email) {
      updateDrinks(email, selectedItems)
      navigate('/OrderScreen?email=' + email)
    } else {
      addDrinksToNewOrder(selectedItems)
      navigate('/OrderScreen')
    }
  }

  function handleItemSelect(item) {
    if (
      Array.isArray(selectedItems) &&
      selectedItems.findIndex((val) => val.id === item.id) > -1
    ) {
      setSelectedItems(selectedItems.filter((val) => val.id !== item.id))
    } else {
      if (Array.isArray(selectedItems)) {
        setSelectedItems([...selectedItems, item])
      } else setSelectedItems([item])
    }
  }

  function checkSelected(item) {
    return (
      Array.isArray(selectedItems) &&
      selectedItems.findIndex((val) => val.id === item.id) > -1
    )
  }

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <DrinksPage>
      <Header />
      <OrderButton onClick={() => GoToNextPage()}>Next</OrderButton>
      <DrinksGrid>
        {drinks.map((drink) => (
          <div
            className={`card ${checkSelected(drink) ? 'checked' : ''}`}
            key={drink.id}
          >
            <DrinkCard>
              <DrinksImg src={drink.image_url} alt={drink.name} />
              <DrinksName>{drink.name}</DrinksName>
              <DrinkButton
                className='select-drink'
                onClick={() => handleItemSelect(drink)}
              >
                {checkSelected(drink) ? 'Deselect Drink' : 'Select Drink'}
              </DrinkButton>
              <PriceText>$ 50</PriceText>
            </DrinkCard>
          </div>
        ))}
      </DrinksGrid>
      <OrderButton onClick={() => GoToNextPage()}>Next</OrderButton>
    </DrinksPage>
  )
}

const DrinksPage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #ba2329;
  font-family: 'Times New Roman', Times, serif;
  text-align: center;
`

const OrderButton = styled.button`
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
const DrinksImg = styled.img`
  height: 12em;
  width: 5em;
  margin-top: 2em;
`

const DrinksGrid = styled.div`
  display: grid;
  flex-direction: column;
  grid-template-columns: repeat(5, 1fr);
`
const DrinksName = styled.p`
  align-self: center;
  font-family: 'Times New Roman', Times, serif;
  font-weight: bolder;
  font-size: larger;
`
const DrinkCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 27em;
  width: 12em;
  border: 4px solid #ba2329;
  margin: 6px;
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
const DrinkButton = styled.button`
  align-self: center;
  margin: 10px;
  height: 3em;
  width: 7em;
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
const PriceText = styled.p`
  font-size: larger;
  font-weight: bold;
`

export default SelectDrinks
