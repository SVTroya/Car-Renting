import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {persistor, store} from './reduxConfig/store.js'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import '@fontsource/manrope/400.css'
import '@fontsource/manrope/500.css'
import '@fontsource/manrope/600.css'
import '@fontsource/manrope/700.css'
import {PersistGate} from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename='car-renting/'>
        <App/>
      </BrowserRouter>
    </PersistGate>
  </Provider>)
