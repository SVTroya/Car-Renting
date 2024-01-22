import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  isDetailsOpen: false,
  carDetails: null
}

const carDetailsSlice = createSlice({
  name: 'carDetails',
  initialState,
  reducers: {
    setCarDetails: (state, {payload}) => {
      state.carDetails = payload
    },
    setIsDetailsOpen: (state, {payload}) => {
      state.isDetailsOpen = payload
      state.carDetails = null
    }
  }
})

export const {setCarDetails, setIsDetailsOpen} = carDetailsSlice.actions
export const carDetailsReducer = carDetailsSlice.reducer