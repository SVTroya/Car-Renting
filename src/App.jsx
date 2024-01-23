import {Navigate, Route, Routes} from 'react-router-dom'
import CatalogPage from './pages/CatalogPage/CatalogPage.jsx'
import FavoritesPage from './pages/FavoritesPage/FavoritesPage.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'
import SharedLayout from './components/SharedLayout/SharedLayout.jsx'
import {useSelector} from 'react-redux'
import {selectIsLoading} from './reduxConfig/global/selectors.js'
import Loader from './components/Loader/Loader.jsx'

function App() {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='catalog' element={<CatalogPage/>}/>
          <Route path='favorites' element={<FavoritesPage/>}/>
        </Route>
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
      <Loader visible={isLoading} />
    </>
  )
}

export default App
