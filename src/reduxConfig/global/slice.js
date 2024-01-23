import {createSlice} from '@reduxjs/toolkit'
import {fetchByPageCatalogThunk} from '../catalog/actions.js'

const initialState = {
  isLoading: false,
  error: null
}

function handlePending(state) {
  state.isLoading = true;
}

function handleFulfilled(state) {
  state.isLoading = false;
  state.error = null;
}

function handleRejected(state, action) {
  state.isLoading = false;
  state.error = action.payload;
}

const globalSlice = createSlice({
  name: 'global',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchByPageCatalogThunk.pending, handlePending)
      .addCase(fetchByPageCatalogThunk.fulfilled, handleFulfilled)
      .addCase(fetchByPageCatalogThunk.rejected, handleRejected)
  }
})

export const globalReducer = globalSlice.reducer;