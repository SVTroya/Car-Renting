import styled from 'styled-components'

export const CarListSection = styled.section`
  padding: 50px 0 20px;
`

export const CarListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 274px);
  grid-column-gap: 29px;
  grid-row-gap: 50px;
  justify-content: center;

  width: 100%;
`

export const LoadMoreBtn = styled.button`
  display: block;
  background-color: transparent;
  border: none;
  outline: transparent;
  text-decoration: underline;
  color: #3470FF;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  transition: color 250ms ease-in-out;
  margin: 60px auto 0;
  padding: 0;

  &:hover, &:focus {
    color: #0B44CD;
    outline: transparent;
  }
`

export const EmptyListMessage = styled.p`
  width: fit-content;
  font-size: 24px;
  margin: 0 auto;
`
