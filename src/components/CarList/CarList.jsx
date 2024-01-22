import React from 'react'
import { useSelector} from 'react-redux'
import {selectCatalog} from '../../reduxConfig/catalog/selectors.js'
import {CarListStyled} from './CarList.styled.jsx'
import CarInfoCard from '../CarInfoCard/CarInfoCard.jsx'
import CarDetails from '../CarDetails/CarDetails.jsx'
import Modal from '../Modal/Modal.jsx'
import {selectIsDetailsOpen} from '../../reduxConfig/carDetails/selectors.js'
import {setIsDetailsOpen} from '../../reduxConfig/carDetails/slice.js'

function CarList({cars}) {
  const isDetailsOpen = useSelector(selectIsDetailsOpen)

  return (
    <>
      <CarListStyled>
        {cars.map(car => <CarInfoCard key={car.id} carInfo={car} />)}
      </CarListStyled>
      {
        isDetailsOpen && (<Modal isModalOpen={setIsDetailsOpen}><CarDetails/></Modal>)
      }
    </>
  )
}

export default CarList