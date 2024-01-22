import React from 'react'
import {HeaderWrapper, LogoWrapper, StyledHeader} from './Header.styled.jsx'
import Container from '../Container/Container.jsx'
import Navigation from '../Navigation/Navigation.jsx'
import icons from '../../assets/icons.svg'

function Header() {
  return (
    <StyledHeader>
      <Container>
        <HeaderWrapper>
          <LogoWrapper to={'/'} >
            <svg width={25} height={25}>
              <use href={`${icons}#icon-logo`}/>
            </svg>
            <p>Your Car Renting</p>
          </LogoWrapper>
          <Navigation />
        </HeaderWrapper>
      </Container>
    </StyledHeader>
  )
}

export default Header