import styled from 'styled-components'
import React, { useState } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { useNavigate } from 'react-router-dom'
import { findOrder } from '../utilities/storage'
import Header from '../Components/Header'

function Home() {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const dishPage = () => {
    navigate('./SelectDish')
  }

  function findYourOrder(email) {
    const order = findOrder(email)
    if (order.info) {
      navigate('/ReceiptScreen?email=' + email)
    } else {
      alert('No Order Found')
    }
  }
  return (
    <HomePage>
      <Header />
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
            <HeaderText>Select Your Drinks</HeaderText>
            <OrderButton type='button' onClick={dishPage}>
              Select Dish
            </OrderButton>
          </OrderContainer>
        </Top>
        <Bottom>
          <BottomContainer>
            <HeaderText>Find Your Order</HeaderText>
            <Label>Enter Your Email</Label>
            <EmailInput
              type='email'
              onChange={(e) => setEmail(e.currentTarget.value)}
              value={email}
              placeholder='Enter Email'
            />
            <OrderButton onClick={() => findYourOrder(email)}>
              Find Order
            </OrderButton>
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
  font-family: 'Times New Roman', Times, serif;
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
  border: 4px solid #ba2329;
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
  border: 4px solid #ba2329;
  border-radius: 10px;
`
const BottomContainer = styled.div`
  height: 15em;
  width: 56em;
  border: 4px solid #ba2329;
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
const OrderButton = styled.button`
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
  font-family: 'Times New Roman', Times, serif;
  font-weight: bolder;
  padding: 0;
  border-radius: 1em;
  border: 0px;
`
const HeaderText = styled.p`
  font-size: x-large;
  font-weight: bolder;
`
const Label = styled.label`
  font-size: larger;
  margin-right: 8px;
  font-weight: bold;
`
const EmailInput = styled.input`
  height: 2em;
  width: 20em;
  border-radius: 10px;
  border: 2px solid #ba2329;
  color: #ba2329;
  background-color: #e0e39a;
  font-weight: bold;
`

export default Home
