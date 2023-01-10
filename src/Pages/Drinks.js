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

function Drinks() {
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
      <OrderButton onClick={() => GoToNextPage()}>Next</OrderButton>
      <DrinksGrid>
        {drinks.map((drink) => (
          <div
            className={`card ${checkSelected(drink) ? 'checked' : ''}`}
            key={drink.id}
          >
            <DrinkCard>
              <DrinksImg src={drink.image_url} alt={drink.name} />
              <h3>{drink.name}</h3>
              <button
                className='select-drink'
                onClick={() => handleItemSelect(drink)}
              >
                {checkSelected(drink) ? 'Deselect Drink' : 'Select Drink'}
              </button>
              500kr
            </DrinkCard>
          </div>
        ))}
      </DrinksGrid>
    </DrinksPage>
  )
}

const DrinksPage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #ba2329;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  text-align: center;
`
const Head = styled.div`
  display: flex;
  justify-content: center;
`

const HeaderNav = styled.a`
  font-size: larger;
  padding: 4em;
`

const Logo = styled.img`
  height: 10em;
`
const NextPage = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-bottom: 10px;
  height: 15em;
  width: 15em;
  border: 2px solid black;
  border-radius: 10px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
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
  font-family: 'Courier New', Courier, monospace;
  padding: 0;
  border-radius: 1em;
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

export default Drinks
