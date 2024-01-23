import {configureStore} from '@reduxjs/toolkit'
import {catalogReducer} from './catalog/slice.js'
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE} from 'redux-persist'
import {carDetailsReducer} from './carDetails/slice.js'
import storage from 'redux-persist/lib/storage'
import {filtersReducer} from './filters/slice.js'
import {globalReducer} from './global/slice.js'

const catalogPersistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['favorites']
}

export const store = configureStore({
  reducer: {
    catalog: persistReducer(catalogPersistConfig, catalogReducer),
    carDetails: carDetailsReducer,
    filters: filtersReducer,
    global: globalReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

export const persistor = persistStore(store)