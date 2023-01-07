import styled from 'styled-components'
import React from 'react'
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from 'react-router-dom'
import Meal from './Meal'

const SelectDish = () => {
  const navigate = useNavigate()

  const drinksPage = () => {
    navigate('/Drinks')
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
          <Meal />
        </MainCourse>
        <NextPage>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <OrdedButton type='button' onClick={drinksPage}>
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
  height: 40em;
  width: 40em;
  border: 2px solid black;
  margin-right: 8px;
  border-radius: 10px;
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

export default SelectDish
