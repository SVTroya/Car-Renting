import {createSlice} from '@reduxjs/toolkit'
import {fetchByPageCatalogThunk, fetchCatalogThunk} from './actions.js'
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
      const index = state.favorites.findIndex(id => id === payload)
      state.favorites.splice(index, 1)
    },
    resetCatalogState: (state) => {
      state.catalog = []
      state.page = 0
      state. isLimitReached = false
    },
    setIsLimitReached: (state, {payload}) => {
      state. isLimitReached = payload
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
      .addCase(fetchCatalogThunk.fulfilled, (state, {payload}) => {
        state.catalog = payload
      })
  }
})

export const {addToFavorite, removeFromFavorite, setIsLimitReached, resetCatalogState} = catalogSlice.actions
export const catalogReducer = catalogSlice.reducer