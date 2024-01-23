import React from 'react'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder.js'
import Favorite from '@mui/icons-material/Favorite.js'
import {CheckboxStyled} from './FavoriteCheckbox.styled.jsx'
import {addToFavorite, removeFromFavorite} from '../../reduxConfig/catalog/slice.js'
import {useDispatch, useSelector} from 'react-redux'
import {selectFavorites} from '../../reduxConfig/catalog/selectors.js'

function FavoriteCheckbox({car}) {
  const dispatch = useDispatch()
  const favoriteCars = useSelector(selectFavorites)

  function setFavoriteStatus(car, status) {
    status ? dispatch(addToFavorite(car)) : dispatch(removeFromFavorite(car.id))
  }

  const label = {inputProps: {'aria-label': 'Favorite checkbox'}}
  return (
    <CheckboxStyled
      {...label}
      sx={{
        color: '#FFFFFFCC',
        '&.Mui-checked': {
          color: '#3470FF'
        }
      }}
      icon={<FavoriteBorder/>}
      checkedIcon={<Favorite/>}
      checked={favoriteCars.some(favoriteCar => favoriteCar.id === car.id)}
      onChange={e => {
        setFavoriteStatus(car, e.target.checked)
      }}
      id={crypto.randomUUID()}
    />
  )
}

export default FavoriteCheckbox