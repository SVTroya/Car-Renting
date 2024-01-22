import styled from 'styled-components'
import heroBcg from '../../assets/hero.webp'
import {NavLink} from 'react-router-dom'

export const HeroSection = styled.div`
  width: 1184px;
  height: 450px;
  background-image: url(${heroBcg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: -10;
  gap: 20px;
  
  h1{
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
  border-radius: 14px;
  border: 2px solid #FFFFFF;
`