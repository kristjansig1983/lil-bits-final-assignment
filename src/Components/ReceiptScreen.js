import styled from 'styled-components'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ReceiptScreen = () => {
  const navigate = useNavigate()

  const homeScreen = () => {
    navigate('./Home')
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
      <OrdedButton type='button' onClick={homeScreen}>
        Home
      </OrdedButton>
      <Receipt>Receipt</Receipt>
    </DrinksPage>
  )
}

const DrinksPage = styled.div`
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

const HeaderNav = styled.a`
  font-size: larger;
  padding: 4em;
`

const Logo = styled.img`
  height: 10em;
`
const Receipt = styled.div`
  display: flex;
  align-self: center;
  height: 40em;
  width: 35em;
  border: 2px solid black;
`
const OrdedButton = styled.button`
  align-self: flex-end;
  margin: 10px;
  margin-right: 10em;
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
export default ReceiptScreen
