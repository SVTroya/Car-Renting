import React from 'react'
import {
  CarDescription, CarDetailsContainer, CarInfoWrapper,
  Category, HeaderWrapper, ImageWrapper,
  RentalCarLink, RentalConditionsWrapper
} from './CarDetails.styled.jsx'
import {useSelector} from 'react-redux'
import {selectCarDetails} from '../../reduxConfig/carDetails/selectors.js'
import {ParamsRowWrapper} from '../../utilities/Common.styled.jsx'
import FavoriteCheckbox from '../FavoriteCheckbox/FavoriteCheckbox.jsx'

function CarDetails() {
  const car = useSelector(selectCarDetails)
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    address,
    rentalConditions,
    mileage
  } = car

  const addressSplit = address.split(', ')
  const rentalConditionsSplit = rentalConditions.split('\n')

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function handleLearnMoreClick(ev) {
    ev.currentTarget.blur()
  }

  return (
    <CarDetailsContainer>
      <ImageWrapper>
        <img src={img} alt={`${make} ${model}`}/>
      </ImageWrapper>
      <FavoriteCheckbox car={car} />
      <CarInfoWrapper>
        <div>
          <HeaderWrapper>
            <h2>{make} {(make.length + model.length) <= 20 && (<span>{model}</span>)}, {year}</h2>
          </HeaderWrapper>
          <ParamsRowWrapper>
            <p>{addressSplit[1]}</p>
            <p>{addressSplit[2]}</p>
            <p>Id: {id}</p>
            <p>Year: {year}</p>
            <p>Type: {type}</p>
          </ParamsRowWrapper>
          <ParamsRowWrapper>
            <p>Fuel Consumption: {fuelConsumption}</p>
            <p>Engine Size: {engineSize}</p>
          </ParamsRowWrapper>
          <CarDescription>{description}</CarDescription>
        </div>
        <div>
          <Category>Accessories and functionalities:</Category>
          <ParamsRowWrapper>
            {accessories.map((accessory, index) => (<p key={index}>{accessory}</p>))}
          </ParamsRowWrapper>
          <ParamsRowWrapper>
            {functionalities.map((functionality, index) => (<p key={index}>{functionality}</p>))}
          </ParamsRowWrapper>
        </div>
        <div>
          <Category>Rental Conditions:</Category>
          <RentalConditionsWrapper>
            {rentalConditionsSplit.map((condition, index) => {
              if (condition.includes('Minimum age')){
                return <p key={index}>Minimum age: <span> {condition.replace(/\D/g, '')}</span></p>
              }
              return <p key={index}>{condition}</p>})}
            <p>Mileage: <span> {numberWithCommas(mileage)}</span></p>
            <p>Price: <span> {rentalPrice}$</span></p>
          </RentalConditionsWrapper>
        </div>
        <RentalCarLink href='tel:+380730000000' onClick={handleLearnMoreClick}>Rental car</RentalCarLink>
      </CarInfoWrapper>
    </CarDetailsContainer>
  )
}

export default CarDetails