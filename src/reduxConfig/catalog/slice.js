import {createSlice} from '@reduxjs/toolkit'
import {fetchByPageCatalogThunk} from './actions.js'
import {CARS_PER_PAGE} from '../../axiosConfif/api.js'

const initialState = {
  catalog: [],
  favorites: [],
  page: 0,
  isLimitReached: false
}

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    addToFavorite: (state, {payload}) => {
      state.favorites.push(payload)
    },
    removeFromFavorite: (state, {payload}) => {
      const index = state.favorites.findIndex(car => car.id === payload)
      state.favorites.splice(index, 1)
    },
    resetCatalogState: (state) => {
      state.catalog = []
      state.page = 0
      state.isLimitReached = false
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchByPageCatalogThunk.fulfilled, (state, {payload}) => {
        state.catalog.push(...payload)
        state.page = state.page + 1
        if (payload.length < CARS_PER_PAGE) {
          state.isLimitReached = true
        }
      })
  }
})

export const {addToFavorite, removeFromFavorite, resetCatalogState} = catalogSlice.actions
export const catalogReducer = catalogSlice.reducer