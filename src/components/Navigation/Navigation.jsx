import React from 'react'
import {StyledLink} from '../Header/Header.styled'
import {StyledNavigation} from './Navigation.styled'

function Navigation() {
  return (
    <StyledNavigation>
      <StyledLink $width={'57px'} to='/'>Home</StyledLink>
      <StyledLink $width={'77px'} to='/catalog'>Catalog</StyledLink>
      <StyledLink $width={'127px'} to='/favorites'>Favorite Cars</StyledLink>
    </StyledNavigation>
  )
}

export default Navigation
