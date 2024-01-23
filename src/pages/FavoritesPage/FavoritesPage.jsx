import React from 'react'
import Catalog from '../../components/Catalog/Catalog.jsx'

function FavoritesPage() {

  return (
    <Catalog onlyFavorites={true}/>
  )
}

export default FavoritesPage