import {createSlice} from '@reduxjs/toolkit'
import {fetchCatalogThunk} from './actions.js'

const initialState = {
  catalog: [],
  favorites: []
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
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCatalogThunk.fulfilled, (state, {payload}) => {
        state.catalog = payload
      })
  }
})

export const {addToFavorite, removeFromFavorite} = catalogSlice.actions
export const catalogReducer = catalogSlice.reducer