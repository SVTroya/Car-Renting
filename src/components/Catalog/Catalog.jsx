import React from 'react'
import ListFilters from '../ListFilters/ListFilters.jsx'
import CarList from '../CarList/CarList.jsx'
import {useSelector} from 'react-redux'
import {selectFilteredCars, selectFilteredFavCars} from '../../reduxConfig/catalog/selectors.js'

function Catalog({onlyFavorites = false}) {
  const cars = onlyFavorites ? useSelector(selectFilteredFavCars) : useSelector(selectFilteredCars)

  return (
    <>
      <ListFilters/>
      <CarList cars={cars}/>
    </>
  )
}

export default Catalog