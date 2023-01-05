import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

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
  return (
    <div>
      {drinks ? (
        drinks.map((drink) => (
          <DrinksImg key={drink.id} src={drink.image_url} />
        ))
      ) : (
        <p>Loading...</p>
      )}

      <div>
        <button onClick={getDrinks}></button>
      </div>
    </div>
  )
}

const DrinksImg = styled.img`
  height: 20em;
  width: 40em;
  margin: 2em;
`

export default SelectDrinks
