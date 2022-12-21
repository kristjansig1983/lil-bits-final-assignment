import styled from 'styled-components'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const SelectDish = () => {
  return (
    <DishPage>
      <div>
        <Head>
          <Logo src='http://ih1.redbubble.net/image.181146356.8650/sticker,375x360.u1.png' />
          <HeaderNav href=''>Menu</HeaderNav>
          <HeaderNav href=''>Atmosphere</HeaderNav>
          <HeaderNav href=''>Location</HeaderNav>
          <HeaderNav href=''>Contact Us</HeaderNav>
        </Head>
      </div>
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

export default SelectDish
