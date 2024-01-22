import React from 'react'
import {SectionHeader} from '../../utilities/Common.styled.jsx'
import {
  FiltersSection,
  Form,
  HiddenLabel,
  InputFrom,
  InputTo,
  Label, SearchButton,
  CarMileageInputsWrapper,
  CarMileageWrapper
} from './ListFilters.styled.jsx'
import {useForm} from 'react-hook-form'
import CustomSelect from '../CustomSelect/CustomSelect.jsx'
import makes from '../../data/makes.json'
import {useDispatch} from 'react-redux'
import {setBrand, setMileageFrom, setMileageTo, setPriceLevel} from '../../reduxConfig/filters/slice.js'

function ListFilters() {
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    control,
    setValue
  } = useForm()

  function getBrands() {
    return makes.map(make => {
      return {value: make, label: make}
    })
  }

  function getPriceRange(maxPrice) {
    let range = []
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
  }

  return (
    <FiltersSection>
      <SectionHeader>Car search filters</SectionHeader>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          <span>Car brand</span>
          <CustomSelect name='make' control={control} dataset={getBrands()} width={'224px'}
                        placeholder='Enter the text'/>
        </Label>
        <Label>
          <span>Price/ 1 hour</span>
          <CustomSelect name='price' control={control} dataset={getPriceRange(200)} width={'125px'} placeholder='To $'/>
        </Label>
        <CarMileageWrapper>
          <span>Сar mileage / km</span>
          <CarMileageInputsWrapper>
            <HiddenLabel id='mileage_from'>Сar mileage From</HiddenLabel>
            <InputFrom
              {...register('mileage_from')}
              id='mileage_from'
              name='mileage_from'
              type='number'
              autoComplete="off"
            />
            <HiddenLabel id='mileage_to'>Сar mileage To</HiddenLabel>
            <InputTo
              {...register('mileage_to')}
              id='mileage_to'
              name='mileage_to'
              type='number'
              autoComplete="off"/>
          </CarMileageInputsWrapper>
        </CarMileageWrapper>
        <SearchButton type='submit' onClick={handleSearchClick}>Search</SearchButton>
      </Form>
    </FiltersSection>
  )
}

export default ListFilters