import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {CarListSection, CarListStyled, LoadMoreBtn} from './CarList.styled.jsx'
import CarInfoCard from '../CarInfoCard/CarInfoCard.jsx'
import CarDetails from '../CarDetails/CarDetails.jsx'
import Modal from '../Modal/Modal.jsx'
import {selectIsDetailsOpen} from '../../reduxConfig/carDetails/selectors.js'
import {setIsDetailsOpen} from '../../reduxConfig/carDetails/slice.js'
import {SectionHeader} from '../../utilities/Common.styled.jsx'
import {selectIsLimitReached, selectPage} from '../../reduxConfig/catalog/selectors.js'
import {fetchByPageCatalogThunk} from '../../reduxConfig/catalog/actions.js'

function CarList({cars}) {
  const isDetailsOpen = useSelector(selectIsDetailsOpen)
  const isLimitReached = useSelector(selectIsLimitReached)
  const page = useSelector(selectPage)
  const dispatch = useDispatch()

  function handleLoadMoreClick(ev) {
    dispatch(fetchByPageCatalogThunk(page + 1))
    ev.target.blur()
  }

  return (
    <CarListSection>
      <SectionHeader>List of available cars</SectionHeader>
      <CarListStyled>
        {cars.map(car => <CarInfoCard key={car.id} carInfo={car}/>)}
      </CarListStyled>
      {!isLimitReached && <LoadMoreBtn onClick={handleLoadMoreClick}>Load more</LoadMoreBtn>}
      {
        isDetailsOpen && (<Modal isModalOpen={setIsDetailsOpen}><CarDetails/></Modal>)
      }
    </CarListSection>
  )
}

export default CarList