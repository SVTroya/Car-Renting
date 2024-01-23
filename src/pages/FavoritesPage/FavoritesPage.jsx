import React, {useEffect} from 'react'
import Catalog from '../../components/Catalog/Catalog.jsx'
import {useDispatch} from 'react-redux'
import {fetchCatalogThunk} from '../../reduxConfig/catalog/actions.js'
import {setIsLimitReached} from '../../reduxConfig/catalog/slice.js'

function FavoritesPage() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setIsLimitReached(true));
    dispatch(fetchCatalogThunk());
  }, [dispatch]);

  return (
    <Catalog onlyFavorites={true}/>
  )
}

export default FavoritesPage