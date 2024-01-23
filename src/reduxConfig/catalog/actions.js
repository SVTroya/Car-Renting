import {createAsyncThunk} from '@reduxjs/toolkit'
import {api, CARS_PER_PAGE} from '../../axiosConfif/api.js'

export const fetchByPageCatalogThunk = createAsyncThunk('catalog/fetchByPage', async ({page, filters}, thunkAPI) => {
  try {
    const queryOptions = {
      params: {
        limit: CARS_PER_PAGE,
        page,
        ...filters
      }
    }

    const {data} = await api.get('/adverts', queryOptions)
    return data
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message)
  }
})
