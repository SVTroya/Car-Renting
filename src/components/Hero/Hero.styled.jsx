import styled from 'styled-components'
import heroBcgSmall from '../../assets/hero_small.webp'
import heroBcgMedium from '../../assets/hero_medium.webp'
import heroBcgLarge from '../../assets/hero_large.webp'
import {NavLink} from 'react-router-dom'

export const HeroSection = styled.section`
  height: 450px;
  background-image: url(${heroBcgSmall});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  background-color: #363680;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: -10;
  gap: 20px;

  @media only screen and (min-width: 768px) {
    background-image: url(${heroBcgMedium});
    height: 400px;
  }

  @media only screen and (min-width: 1280px) {
    background-image: url(${heroBcgLarge});
    width: 1184px;
    height: 450px;
  }

  h1 {
    min-width: 280px;
    max-width: 320px;
    color: #FFFFFF;
    font-size: 30px;
    font-weight: 700;
    text-align: center;

    @media only screen and (min-width: 768px) {
      max-width: 500px;
      font-size: 36px;
    }

    span {
      font-size: 40px;
      line-height: 1.2;
      color: #b2f0fa;

      @media only screen and (min-width: 768px) {
        font-size: 50px;
        line-height: 1.5;
      }
    }
  }
`

export const SearchForCarBtn = styled(NavLink)`
  color: #FFFFFF;
  padding: 10px 15px;
  border-radius: 20px;
  border: 2px solid currentColor;
  text-decoration: none;
  font-weight: 600;
  
  transition: color 250ms ease-in-out,
  border-color 250ms ease-in-out;
  
  &:hover {
    color: #0B44CD;
  }
`