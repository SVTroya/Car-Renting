import React from 'react'
import {HeroSection, SearchForCarBtn} from './Hero.styled.jsx'

function Hero() {
  return (
    <HeroSection>
      <h1>Embark on the Journey of a Lifetime with <br/><span>Your Car Renting</span>!</h1>
      <SearchForCarBtn to='/catalog'>Search for a Car</SearchForCarBtn>
    </HeroSection>
  )
}

export default Hero