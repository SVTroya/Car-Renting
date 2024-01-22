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
    if (brand && car.make !== brand) {
      return false
    }

    if(priceLevel && car.rentalPrice > priceLevel) {
      return false
    }

    if(mileageFrom && car.mileage < mileageFrom) {
      return false
    }

    return !(mileageTo && car.mileage > mileageTo);

  })
})