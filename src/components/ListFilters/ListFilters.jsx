import React, {useEffect} from 'react'
import {SectionHeader} from '../../utilities/Common.styled.jsx'
import {
  FiltersSection,
  Form,
  HiddenLabel,
  InputFrom,
  InputTo,
  Label, SearchButton,
  CarMileageInputsWrapper,
  CarMileageWrapper, Filters
} from './ListFilters.styled.jsx'
import {useForm} from 'react-hook-form'
import CustomSelect from '../CustomSelect/CustomSelect.jsx'
import makes from '../../data/makes.json'
import {useDispatch} from 'react-redux'
import {resetFilters, setBrand, setMileageFrom, setMileageTo, setPriceLevel} from '../../reduxConfig/filters/slice.js'
import {resetCatalogState} from '../../reduxConfig/catalog/slice.js'
import {fetchByPageCatalogThunk} from '../../reduxConfig/catalog/actions.js'
import {useLocation} from 'react-router-dom'

function ListFilters() {
  const dispatch = useDispatch()
  const location = useLocation()

  const {
    register,
    handleSubmit,
    control
  } = useForm()

  function getBrands() {
    const brands = [{value: '', label: 'All'}]
    brands.push(...makes.map(make => {
      return {value: make, label: make}
    }))

    return brands
  }

  function getPriceRange(maxPrice) {
    let range = [{value: maxPrice, label: 'All'}]
    for (let i = 10; i <= maxPrice; i += 10) {
      range.push({value: i, label: `${i} $`})
    }
    return range
  }

  function handleSearchClick(ev) {
    ev.currentTarget.blur()
  }

  function onSubmit(formData) {
    dispatch(setBrand(formData.make || null))
    dispatch(setPriceLevel(formData.price || null))
    dispatch(setMileageFrom(formData.mileage_from))
    dispatch(setMileageTo(formData.mileage_to))
    dispatch(resetCatalogState())
    if (location.pathname === '/catalog') {
      dispatch(fetchByPageCatalogThunk({page: 1, filters: {make: formData.make}}))
    }
  }

  useEffect(() => {
    dispatch(resetFilters())
  }, [dispatch])

  return (
    <FiltersSection>
      <SectionHeader>Car search filters</SectionHeader>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Filters>
          <Label>
            <span>Car brand</span>
            <CustomSelect name='make' control={control} dataset={getBrands()} width={'224px'}
                          placeholder='Enter the text'/>
          </Label>
          <Label>
            <span>Price/ 1 hour</span>
            <CustomSelect name='price' control={control} dataset={getPriceRange(300)} width={'125px'} placeholder='To $'/>
          </Label>
          <CarMileageWrapper>
            <span>Сar mileage / km</span>
            <CarMileageInputsWrapper>
              <HiddenLabel htmlFor='mileage_from'>Сar mileage From</HiddenLabel>
              <InputFrom
                id='mileage_from'
                name='mileage_from'
                {...register('mileage_from')}
                type='number'
                autoComplete='off'
              />
              <HiddenLabel htmlFor='mileage_to'>Сar mileage To</HiddenLabel>
              <InputTo
                id='mileage_to'
                name='mileage_to'
                {...register('mileage_to')}
                type='number'
                autoComplete='off'/>
            </CarMileageInputsWrapper>
          </CarMileageWrapper>
        </Filters>
        <SearchButton type='submit' onClick={handleSearchClick}>Search</SearchButton>
      </Form>
    </FiltersSection>
  )
}

export default ListFilters