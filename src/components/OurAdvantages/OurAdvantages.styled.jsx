import styled from 'styled-components'

export const OurAdvantagesSection = styled.section`
  padding: 30px 0;
  
}
  h2 {
    width: fit-content;
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    margin: 0 auto;
`

export const AdvantagesList = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-direction: column;
  margin-top: 30px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }

  li {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    width: 100%;
    min-height: 200px;
    padding: 20px 16px;
    border: 4px solid #305073;

    @media only screen and (min-width: 768px) {
      width: calc((100% - 2 * 20px) / 3);
    }

    h3 {
      font-size: 20px;
      font-weight: 700;
    }

    p {
      text-align: center;
    }
  }

  li:nth-child(2) {
    background-color: #305073;
    color: #FFFFFF;
  }
`