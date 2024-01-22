import styled from 'styled-components';
import {Close} from '@mui/icons-material'

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  z-index: 20;
  background-color: #12141780;
  align-items: center;
  justify-content: center;
`

export const StyledModal = styled.div`
  position: relative;
  width: 541px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  padding: 40px;
  background-color: #FFFFFF;
`

export const CloseModalBtn = styled.button`
  display: none;
  position: absolute;
  padding: 0;
  right: 16px;
  top: 16px;
  border: none;
  outline: transparent;
  background-color: transparent;
  color: currentColor;

  transition: color 250ms ease-in-out;

  @media only screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover,
  &:focus {
    color: #0B44CD;
    outline: transparent;
  }
`;

export const CloseBtn = styled(Close)`
  margin: 0;
  padding: 0;
  width: 16px;
  height: 16px;
  color: currentColor;
  pointer-events: none;
  outline: none;
`;


