import {createAsyncThunk} from '@reduxjs/toolkit'
import {api} from '../../axiosConfif/api.js'

export const fetchCatalogThunk = createAsyncThunk('catalog/fetch', async (_, thunkAPI) => {
  try {
    const {data} = await api.get('/adverts')
    return data
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message)
  }
})
/*
export const getCarByIdThunk = createAsyncThunk('catalog/car', async (id, thunkAPI) => {
  try{
    const {data} = await api.get(`/adverts/${id}`)
    return data
  }
  catch (err) {
    return thunkAPI.rejectWithValue(err.message)
  }
})*/
