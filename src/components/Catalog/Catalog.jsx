import React from 'react'
import ListFilters from '../ListFilters/ListFilters.jsx'
import CarList from '../CarList/CarList.jsx'
import {useSelector} from 'react-redux'
import { selectFavoriteCars, selectFilteredCars} from '../../reduxConfig/catalog/selectors.js'

function Catalog({onlyFavorites = false}) {
  const cars = onlyFavorites ? useSelector(selectFavoriteCars) : useSelector(selectFilteredCars)

  return (
    <>
      <ListFilters/>
      <CarList cars={cars}/>
    </>
  )
}

export default Catalog