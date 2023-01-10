import '.././App.css'
import { MenuButton } from './MenuButton'
import styled from 'styled-components'

const NavBar = styled.div`
  display: grid;
  background-color: #3d6053;
  grid-area: nav;
  grid-template-columns: repeat(8, 1fr);
  grid-template-areas: 'logo logo button button button button . .';
  border-bottom: 4px solid #ba2329;
`

const LogoDiv = styled.div`
  justify-self: center;
  align-self: center;
  grid-area: logo;
`
const ButtonDiv = styled.div`
  justify-self: center;
  align-self: center;
  grid-area: button;
`
const Logo = styled.img`
  height: 10em;
`

function Header() {
  let isHomeSelected = false
  let isDishSelected = false
  let isDrinkSelected = false
  let isOrderSelected = false
  if (window.location.pathname === '/') {
    isHomeSelected = true
  } else {
    isHomeSelected = false
  }
  if (window.location.pathname === '/Dish') {
    isDishSelected = true
  } else {
    isDishSelected = false
  }
  if (window.location.pathname === '/Drink') {
    isDrinkSelected = true
  } else {
    isDrinkSelected = false
  }
  if (window.location.pathname === '/Order') {
    isOrderSelected = true
  } else {
    isOrderSelected = false
  }
  return (
    <NavBar>
      <LogoDiv>
        <Logo
          src='http://ih1.redbubble.net/image.181146356.8650/sticker,375x360.u1.png'
          alt='logo'
        />
      </LogoDiv>
      <ButtonDiv>
        <MenuButton selected={isHomeSelected}>Home</MenuButton>
        <MenuButton selected={isDishSelected}>Select Dishes</MenuButton>
        <MenuButton selected={isDrinkSelected}>Select Drinks</MenuButton>
        <MenuButton selected={isOrderSelected}>Order</MenuButton>
      </ButtonDiv>
    </NavBar>
  )
}

export default Header
