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
  min-width: 320px;
  max-width: 335px;
  height: calc(100vh - 20px);
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  padding: 30px 16px 20px;
  background-color: #FFFFFF;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    margin: 10px ;
    background: transparent;
    border-radius: 100px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #0B44CD;
    border-radius: 100px;
    border: 2px solid #FFFFFF;
  }

  @media only screen and (min-width: 768px) {
    width: 541px;
    max-width:unset;
    padding: 40px;
    border-radius: 24px;
    height:auto;
  }
`

export const CloseModalBtn = styled.button`
  display: flex;
  position: absolute;
  padding: 0;
  right: 10px;
  top: 10px;
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
  
  &.MuiSvgIcon-root {
    width: 16px;
    height: 16px;

    @media only screen and (min-width: 768px) {
      width: 24px;
      height: 24px;
    }
  }
`;
