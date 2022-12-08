import React, { useState } from 'react'
import { CarouselData } from './CarouselData'

const Carousel = () => {
  return (
    <>
      {CarouselData.map((slide, index) => {
        return <img src={slide.img} />
      })}
    </>
  )
}

export default Carousel
