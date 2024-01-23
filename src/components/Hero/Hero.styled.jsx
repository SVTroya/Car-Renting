import styled from 'styled-components'
import heroBcg from '../../assets/hero.webp'
import {NavLink} from 'react-router-dom'

export const HeroSection = styled.section`
  width: 1184px;
  height: 450px;
  background-image: url(${heroBcg});
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

  h1 {
    width: 500px;
    color: #FFFFFF;
    font-size: 36px;
    font-weight: 700;
    text-align: center;

    span {
      font-size: 50px;
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