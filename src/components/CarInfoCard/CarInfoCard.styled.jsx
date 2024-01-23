import styled from 'styled-components'
import {ButtonStyled} from '../../utilities/Common.styled.jsx'

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  width: 274px;
  position: relative;
`

export const ImageWrapper = styled.div`
  width: 274px;
  height: 268px;
  border-radius: 14px;
  background-color: #F3F3F2;
  overflow: clip;

  img {
    width: inherit;
    height: inherit;
    object-fit: cover;
  }
`

export const HeaderWrapper = styled.div`
  display: flex;
  font-weight: 500;
  width: 100%;
  margin-top: 14px;
  margin-bottom: 4px;

  h3 {
    font-weight: 500;
    font-size: 16px;
  }

  span {
    color: #3470FF;
  }
`

export const RentalPrice = styled.p`
  margin-left: auto;
  margin-right: 9px;
`

export const LearnMoreBtn = styled(ButtonStyled)`
  margin-top: 28px;
`