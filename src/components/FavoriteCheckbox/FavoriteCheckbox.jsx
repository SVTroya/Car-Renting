import React from 'react'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder.js'
import Favorite from '@mui/icons-material/Favorite.js'
import {CheckboxStyled} from './FavoriteCheckbox.styled.jsx'
import {addToFavorite, removeFromFavorite} from '../../reduxConfig/catalog/slice.js'
import {useDispatch, useSelector} from 'react-redux'
import {selectFavorites} from '../../reduxConfig/catalog/selectors.js'

function FavoriteCheckbox({id}) {
  const dispatch = useDispatch()
  const favoriteCarIds = useSelector(selectFavorites)

  function setFavoriteStatus(id, status) {
    status ? dispatch(addToFavorite(id)) : dispatch(removeFromFavorite(id))
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
      checked={favoriteCarIds.includes(id)}
      onChange={e => {setFavoriteStatus(id, e.target.checked)}}
      id={crypto.randomUUID()}
    />
  )
}

export default FavoriteCheckbox