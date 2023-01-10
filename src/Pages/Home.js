import styled from 'styled-components'
import React, { useState } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from 'react-router-dom'
import { findOrder } from '../utilities/storage'

function Home() {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const dishPage = () => {
    navigate('./SelectDish')
  }

  function findYourOrder(email) {
    const order = findOrder(email)
    if (order.info) {
      navigate('/Receiptscreen?email=' + email)
    } else {
      alert('No Order Found')
    }
  }
  return (
    <HomePage>
      <div>
        <Head>
          <Logo
            src='http://ih1.redbubble.net/image.181146356.8650/sticker,375x360.u1.png'
            alt='logo
        '
          />
          <HeaderNav href=''>Menu</HeaderNav>
          <HeaderNav href=''>Atmosphere</HeaderNav>
          <HeaderNav href=''>Location</HeaderNav>
          <HeaderNav href=''>Contact Us</HeaderNav>
        </Head>
      </div>
      <Main>
        <Top>
          <Slider>
            <Carousel infiniteLoop showThumbs={false}>
              <ImageContainer>
                <SliderImg src='https://thenovicechefblog.com/wp-content/uploads/2011/02/Bearnaise-2-735x1103.jpeg' />
              </ImageContainer>
              <ImageContainer>
                <SliderImg src='https://images-gmi-pmc.edge-generalmills.com/3a645e12-e0f4-4a7b-9327-41dade734acc.jpg' />
              </ImageContainer>
              <ImageContainer>
                <SliderImg src='https://tatyanaseverydayfood.com/wp-content/uploads/2021/06/Caramelized-Onion-Bacon-Cheeseburger-Recipe-768x1024.jpg' />
              </ImageContainer>
            </Carousel>
          </Slider>
          <OrderContainer>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <OrdedButton type='button' onClick={dishPage}>
              Select Dish
            </OrdedButton>
          </OrderContainer>
        </Top>
        <Bottom>
          <BottomContainer>
            <p>Find Your Order</p>
            <label>Enter Your Email</label>
            <input
              type='email'
              onChange={(e) => setEmail(e.currentTarget.value)}
              value={email}
              placeholder='Enter Email'
            />
            <OrdedButton onClick={() => findYourOrder(email)}>
              Find Order
            </OrdedButton>
          </BottomContainer>
          <BottomContainer>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus
              gravida quis blandit turpis cursus in hac. Non quam lacus
              suspendisse faucibus interdum posuere lorem. Tellus integer
              feugiat scelerisque varius morbi enim nunc faucibus a. Ut placerat
              orci nulla pellentesque dignissim enim sit amet. Sed risus pretium
              quam vulputate dignissim suspendisse. Metus dictum at tempor
              commodo. Integer vitae justo eget magna fermentum iaculis. Nec
              sagittis aliquam malesuada bibendum arcu vitae. Magnis dis
              parturient montes nascetur ridiculus mus mauris.
            </p>
          </BottomContainer>
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

const Top = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em;
  border-radius: 10px;
`
const Slider = styled.div`
  height: 20em;
  width: 40em;
  border: 2px solid black;
  margin-right: 8px;
  border-radius: 10px;
`

const SliderImg = styled.img`
  height: 20em;
  width: 40em;
  border-radius: 10px;
`
const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 15em;
  width: 15em;
  border: 2px solid black;
  border-radius: 10px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`
const BottomContainer = styled.div`
  height: 20em;
  width: 27.5em;
  border: 2px solid black;
  border-radius: 10px;
`
const Main = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 6em;
  border-radius: 10px;
`

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5em;
  border-radius: 10px;
`

const ImageContainer = styled.div`
  height: 20em;
  width: 40em;
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

export default Home
