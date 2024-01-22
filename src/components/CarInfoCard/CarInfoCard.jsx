import React from 'react'
import {
  Card,
  HeaderWrapper,
  ImageWrapper,
  LearnMoreBtn,
  RentalPrice
} from './CarInfoCard.styled.jsx'
import {useDispatch} from 'react-redux'
import {setCarDetails, setIsDetailsOpen} from '../../reduxConfig/carDetails/slice.js'
import {ParamsRowWrapper} from '../../utilities/Common.styled.jsx'
import FavoriteCheckbox from '../FavoriteCheckbox/FavoriteCheckbox.jsx'

function CarInfoCard({carInfo}) {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    rentalPrice,
    rentalCompany,
    address,
    mileage
  } = carInfo

  const dispatch = useDispatch()
  const addressSplit = address.split(', ')

  function handleLearnMoreClick(ev) {
    dispatch(setIsDetailsOpen(true))
    dispatch(setCarDetails(carInfo))
    ev.currentTarget.blur()
  }

  return (
    <Card>
      <ImageWrapper>
        <img src={img} alt={`${make} ${model}`}/>
      </ImageWrapper>
      <HeaderWrapper>
        <h3>{make} {(make.length + model.length) <= 20 && (<span>{model}</span>)}, {year}</h3>
        <RentalPrice>${rentalPrice}</RentalPrice>
      </HeaderWrapper>
      <ParamsRowWrapper>
        <p>{addressSplit[1]}</p>
        <p>{addressSplit[2]}</p>
        <p>{rentalCompany}</p>
      </ParamsRowWrapper>
      <ParamsRowWrapper>
        <p>{type}</p>
        <p>{make}</p>
        <p>{id}</p>
        <p>{mileage}</p>
      </ParamsRowWrapper>
      <LearnMoreBtn onClick={handleLearnMoreClick}>Learn more</LearnMoreBtn>
      <FavoriteCheckbox id={id} />
    </Card>
  )
}

export default CarInfoCard