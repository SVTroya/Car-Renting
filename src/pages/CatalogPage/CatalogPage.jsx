import React, {useEffect} from 'react'
import Catalog from '../../components/Catalog/Catalog.jsx'
import {useDispatch} from 'react-redux'
import {fetchCatalogThunk} from '../../reduxConfig/catalog/actions.js'
import {CatalogSection} from './CatalogPage.styled.jsx'
import {SectionHeader} from '../../utilities/Common.styled.jsx'

function CatalogPage() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCatalogThunk());
  }, [dispatch]);

  return (
    <CatalogSection>
      <SectionHeader>Cars Catalog</SectionHeader>
      <Catalog/>
    </CatalogSection>
  )
}

export default CatalogPage