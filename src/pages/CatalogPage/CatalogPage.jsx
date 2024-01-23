import React, {useEffect} from 'react'
import Catalog from '../../components/Catalog/Catalog.jsx'
import {useDispatch} from 'react-redux'
import {fetchByPageCatalogThunk} from '../../reduxConfig/catalog/actions.js'
import {resetCatalogState} from '../../reduxConfig/catalog/slice.js'

function CatalogPage() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(resetCatalogState())
    dispatch(fetchByPageCatalogThunk({page: 1}))
  }, [dispatch])

  return (
    <Catalog/>
  )
}

export default CatalogPage