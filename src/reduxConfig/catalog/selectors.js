import {createSelector} from '@reduxjs/toolkit'
import {selectBrand, selectMileageFrom, selectMileageTo, selectPriceLevel} from '../filters/selectors.js'

export function selectCatalog(state) {
  return state.catalog.catalog
}

export function selectFavorites(state) {
  return state.catalog.favorites
}

export const selectFavoriteCars = createSelector([selectCatalog, selectFavorites], (catalog, favorites) => {
  return catalog.filter(car => favorites.includes(car.id))
})

export const selectFilteredCars = createSelector(
  [selectCatalog, selectBrand, selectPriceLevel, selectMileageFrom, selectMileageTo],
  (catalog, brand, priceLevel, mileageFrom, mileageTo) => {
  return catalog.filter(car => {
    let isValid = true

    if (brand) {
      isValid = car.make === brand
    }

    if(priceLevel && isValid) {
      isValid = car.rentalPrice <= priceLevel
    }

    if(mileageFrom && isValid) {
      isValid = car.mileage >= mileageFrom
    }

    if(mileageTo && isValid) {
      isValid = car.mileage <= mileageTo
    }

    return isValid
  })
})