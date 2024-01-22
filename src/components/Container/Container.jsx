import React from 'react'
import {AdaptiveContainer} from './Container.styled.jsx'

function Container({children}) {
  return (
    <AdaptiveContainer>
      {children}
    </AdaptiveContainer>
  )
}

export default Container