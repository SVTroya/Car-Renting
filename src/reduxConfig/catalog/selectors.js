import {createSelector} from '@reduxjs/toolkit'
import {selectBrand, selectMileageFrom, selectMileageTo, selectPriceLevel} from '../filters/selectors.js'

function selectCatalog(state) {
  return state.catalog.catalog
}

export function selectFavorites(state) {
  return state.catalog.favorites
}

export function selectPage(state) {
  return state.catalog.page
}

export function selectIsLimitReached(state) {
  return state.catalog.isLimitReached
}

export const selectFilteredCars = createSelector(
  [selectCatalog, selectPriceLevel, selectMileageFrom, selectMileageTo],
  (catalog, priceLevel, mileageFrom, mileageTo) => {
    return catalog.filter(car => {
      if (priceLevel && car.rentalPrice > priceLevel) {
        return false
      }

      if (mileageFrom && car.mileage < mileageFrom) {
        return false
      }

      return !(mileageTo && car.mileage > mileageTo)
    })
  })

export const selectFilteredFavCars = createSelector(
  [selectFavorites, selectBrand, selectPriceLevel, selectMileageFrom, selectMileageTo],
  (favorites, brand, priceLevel, mileageFrom, mileageTo) => {
    return favorites.filter(car => {
      if (brand && car.make !== brand) {
        return false
      }

      if (priceLevel && car.rentalPrice > priceLevel) {
        return false
      }

      if (mileageFrom && car.mileage < mileageFrom) {
        return false
      }

      return !(mileageTo && car.mileage > mileageTo)
    })
  })


