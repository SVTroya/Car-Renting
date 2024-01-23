import {createSelector} from '@reduxjs/toolkit'

export function selectBrand(state) {
  return state.filters.brand
}

export function selectPriceLevel(state) {
  return state.filters.priceLevel
}

export function selectMileageFrom(state) {
  return state.filters.mileageFrom
}

export function selectMileageTo(state) {
  return state.filters.mileageTo
}

export const selectFilters = createSelector(
  [selectBrand],
  (brand) => {
    return {make: brand}
  })