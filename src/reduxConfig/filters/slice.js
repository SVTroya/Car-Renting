import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  brand: null,
  priceLevel: null,
  mileageFrom: null,
  mileageTo: null,
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setBrand: (state, {payload}) => {
      state.brand = payload
    },
    setPriceLevel: (state, {payload}) => {
      state.priceLevel = payload
    },
    setMileageFrom: (state, {payload}) => {
      state.mileageFrom = payload
    },
    setMileageTo: (state, {payload}) => {
      state.mileageTo = payload
    }
  }
})

export const {setBrand, setPriceLevel, setMileageFrom, setMileageTo} = filtersSlice.actions
export const filtersReducer = filtersSlice.reducer