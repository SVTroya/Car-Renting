import styled from 'styled-components'
import {Checkbox} from '@mui/material'
import {ButtonStyled} from '../../utilities/Common.styled.jsx'

export const CarDetailsContainer = styled.div`
  position: relative;
`

export const ImageWrapper = styled.div`
  width: 461px;
  height: 248px;
  border-radius: 14px;
  background-color: #F3F3F2;
  overflow: clip;

  img{
    width: inherit;
    height: inherit;
    object-fit: cover;
  }
`
export const CarInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 14px;
`

export const HeaderWrapper = styled.div`
  display: flex;
  font-weight: 500;
  width: 100%;
  margin-bottom: 8px;
  font-size: 18px;
  line-height: 1.33;

  h2 {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.33;
  }

  span {
    color: #3470FF;
  }
`

export const CarDescription = styled.p`
  line-height: 1.43;
  margin-top: 14px;
  font-size: 14px;
`

export const Category = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  margin-bottom: 8px;
`

export const RentalConditionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  p {
    padding: 7px 14px;
    font-size: 12px;
    letter-spacing: -0.02em;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 35px;
    background-color: #F9F9F9;
  }

  span {
    color: #3470FF;
    font-weight: 600;
    margin-left: 2px;
  }
`

export const RentalCarBtn = styled(ButtonStyled)`
  align-self: flex-start;
`

export const CheckboxStyled = styled(Checkbox)`
  && {
    position: absolute;
    top: 5px;
    right: 5px;
    fill: #FFFFFFCC;
  }

  &:hover{
    fill: #3470FF;
  }
`