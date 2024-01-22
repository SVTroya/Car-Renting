import styled from 'styled-components'

export const SectionHeader = styled.h2`
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

export const ParamsRowWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 12px;
  font-size: 12px;
  row-gap: 4px;
  margin-top: 4px;
  color: #12141780;

  p {
    height: 18px;
    position: relative;
  }

  p:not(:last-child)::after {
    content: '';
    height: 100%;
    width: 1px;
    position: absolute;
    right: -6px;
    top: 0;
    background-color: #1214171A;
  }
`

export const ButtonStyled = styled.button`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  display: inline-flex;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: #3470FF;
  color: #FFFFFF;

  transition: background-color 250ms ease-in-out;

  &:hover, &:focus {
    background-color: #0B44CD;
    outline: transparent;
  }
`