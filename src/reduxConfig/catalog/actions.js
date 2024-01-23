import {createAsyncThunk} from '@reduxjs/toolkit'
import {api, CARS_PER_PAGE} from '../../axiosConfif/api.js'

export const fetchByPageCatalogThunk = createAsyncThunk('catalog/fetchByPage', async (page, thunkAPI) => {
  try {
    const queryOptions = {
      params: {
        limit: CARS_PER_PAGE,
        page
      }
    }

    const {data} = await api.get('/adverts', queryOptions)
    return data
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message)
  }
})

export const fetchCatalogThunk = createAsyncThunk('catalog/fetch', async (_, thunkAPI) => {
  try {
    const {data} = await api.get('/adverts')
    return data
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message)
  }
})
