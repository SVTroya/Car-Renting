import React from 'react'
import {SectionHeader} from '../../utilities/Common.styled.jsx'
import Catalog from '../../components/Catalog/Catalog.jsx'
import {CatalogSection} from '../CatalogPage/CatalogPage.styled.jsx'

function FavoritesPage() {
  return (
    <CatalogSection>
      <SectionHeader>Favorite Cars</SectionHeader>
      <Catalog onlyFavorites={true}/>
    </CatalogSection>
  )
}

export default FavoritesPage