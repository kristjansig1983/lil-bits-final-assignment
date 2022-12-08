import styled from 'styled-components'
import React from 'react'
import Carousel from './Components/Carousel'

const Home = () => {
  return (
    <HomePage>
      <div>
        <Head>
          <Logo src='http://ih1.redbubble.net/image.181146356.8650/sticker,375x360.u1.png' />
          <HeaderNav href=''>Menu</HeaderNav>
          <HeaderNav href=''>Atmosphere</HeaderNav>
          <HeaderNav href=''>Location</HeaderNav>
          <HeaderNav href=''>Contact Us</HeaderNav>
        </Head>
      </div>
      <Main>
        <Top>
          <Slider>
            <Carousel />
          </Slider>
          <OrderContainer></OrderContainer>
        </Top>
        <Bottom>
          <BottomContainer></BottomContainer>
          <BottomContainer></BottomContainer>
        </Bottom>
      </Main>
    </HomePage>
  )
}

const HomePage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #ba2329;
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

const Top = styled.div`
  display: flex;
  justify-content: center;
  padding: 4em;
`
const Slider = styled.div`
  height: 20em;
  width: 40em;
  border: 2px solid black;
  margin-right: 8px;
`

const SliderImg = styled.image`
  height: 20em;
  width: 40em;
`
const OrderContainer = styled.div`
  height: 20em;
  width: 15em;
  border: 2px solid black;
`
const BottomContainer = styled.div`
  height: 20em;
  width: 27.5em;
  border: 2px solid black;
`
const Main = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 6em;
`

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5em;
`

const LeftButton = styled.button`
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: white;
  border: 1px solid black;
  left: 21px;
`
const RightButton = styled.button`
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: white;
  border: 1px solid black;
  right: 24px;
`

export default Home
