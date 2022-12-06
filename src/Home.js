import styled from 'styled-components'

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
          <Carousel></Carousel>
          <OrderContainer></OrderContainer>
          <Bottom>
            <BottomContainer></BottomContainer>
          </Bottom>
        </Top>
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
  padding: 6em;
`
const Carousel = styled.div`
  height: 20em;
  width: 40em;
  border: 2px solid black;
  margin-right: 8px;
`
const OrderContainer = styled.div`
  height: 20em;
  width: 15em;
  border: 2px solid black;
`
const BottomContainer = styled.div`
  height: 20em;
  width: 25em;
  border: 2px solid black;
`
const Main = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 6em;
`

const Bottom = styled.div``
export default Home
