import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

export const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  height: 70px;
  box-shadow: 0 1px 8px 1px rgba(173, 173, 173, 0.8);
  background-color: #FFFFFF;
  align-items: center;
  position: relative
`

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyledLink = styled(NavLink)`
  min-width: ${({$width}) => $width ? $width : 'auto'};
  position: relative;
  text-decoration: none;
  padding: 10px 0;
  font-size: 20px;
  font-weight: 600;
  color: #121417;
  
  &.active{
    color: #0B44CD;
    font-weight: 700;
  }

  transition: color 250ms ease-in-out;

  &:not(.active)::after{
    content: '';
    height: 3px;
    width: 0;
    position: absolute;
    left: 0;
    bottom: 5px;
    background-color: #121417;
    border-radius: 5px;

    transition:
      background-color 250ms ease-in-out,
      width 250ms ease-in-out;
  }

  &:hover::after{
    width: 100%;
    background-color: #0B44CD;
  }

  &:hover {
    color: #0B44CD;
  }
`

export const LogoWrapper = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;

  p {
    font-size: 12.84px;
    line-height: 1.51;
    color: #121417;
    margin: 0;
    font-weight: 700;
  }

  @media only screen and (min-width: 768px) {
    p {
      font-size: 17.1px;
    }

    svg {
      width: 23.489px;
      height: 22.468px;
    }
  }
`