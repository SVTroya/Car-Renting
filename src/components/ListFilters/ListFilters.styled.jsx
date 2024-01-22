import styled from 'styled-components'
import {ButtonStyled} from '../../utilities/Common.styled.jsx'

export const FiltersSection = styled.section`
  margin-top: 50px;
`

export const Form = styled.form`
  display: flex;
  gap: 18px;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  span{
    color: #8A8A89;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.28;
  }
`

export const Input = styled.input`
  display: flex;
  width: 160px;
  height: 48px;
  padding: 14px 24px;
  align-items: center;
  font-size: 18px;
  border:none;
  background-color: #F7F7FB;
  color: #121417;
  font-weight: 500;
  line-height: 1.11;
  outline: none;
  
  &::placeholder {
    color: #121417;
  }
`

export const HiddenLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`

export const InputFrom = styled(Input)`
  border-radius: 14px 0 0 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.20);
`

export const InputTo = styled(Input)`
  border-radius: 0 14px 14px 0;
  border-left: 1px solid rgba(138, 138, 137, 0.20);
`

export const CarMileageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  span{
    color: #8A8A89;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.28;
  }
`

export const CarMileageInputsWrapper = styled.div`
  display: flex;
`

export const SearchButton = styled(ButtonStyled)`
  align-self: flex-end;
`