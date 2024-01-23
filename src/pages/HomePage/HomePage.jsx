import React from 'react'
import Hero from '../../components/Hero/Hero.jsx'
import {HomeSection} from './HomePage.styled.jsx'
import OurAdvantages from '../../components/OurAdvantages/OurAdvantages.jsx'

function HomePage() {
  return (
    <HomeSection>
      <Hero/>
      <OurAdvantages/>
    </HomeSection>
  )
}

export default HomePage