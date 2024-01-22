import React from 'react'
import { StyledLink } from '../Header/Header.styled'
import { StyledNavigation } from './Navigation.styled'
/*import { useMediaQuery } from 'react-responsive'
import { IoIosHome } from 'react-icons/io'
import { RiContactsBook2Fill } from 'react-icons/ri'*/

function Navigation() {
  /*const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' })*/
  return (
    <StyledNavigation>
      <StyledLink $width={'57px'} to="/">Home</StyledLink>
      <StyledLink $width={'77px'} to="/catalog">Catalog</StyledLink>
      <StyledLink  $width={'127px'} to="/favorites">Favorite Cars</StyledLink>
     {/* {isTabletOrDesktop
        ? <StyledLink to="/">HomePage</StyledLink>
      : <IconWrapper to={"/"}>
          <IoIosHome size={25}/>
        </IconWrapper>
      }
      (isTabletOrDesktop
        ? <StyledLink to="/contacts">Contacts Book</StyledLink>
          : <IconWrapper to={"/contacts"}>
          <RiContactsBook2Fill size={25} />
        </IconWrapper>)
      }*/}
    </StyledNavigation>
  )
}

export default Navigation
