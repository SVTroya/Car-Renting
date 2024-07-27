import React from 'react'
import {StyledLink} from '../Header/Header.styled'
import {StyledNavigation} from './Navigation.styled'
import {useMediaQuery} from 'react-responsive';

function Navigation() {
  const isMobile = useMediaQuery({query:'(max-width: 767px)'})

  return (
    <StyledNavigation>
      <StyledLink $width={isMobile ? '46px' : '57px'} to='/'>Home</StyledLink>
      <StyledLink $width={isMobile ? '62px' : '77px'} to='/catalog'>Catalog</StyledLink>
      <StyledLink $width={isMobile ? '102px' : '127px'} to='/favorites'>Favorite Cars</StyledLink>
    </StyledNavigation>
  )
}

export default Navigation
