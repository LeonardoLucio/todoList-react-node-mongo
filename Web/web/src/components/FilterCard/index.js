import React from 'react'
import * as F from './styles'

import filter from '../../assets/filter.png'

function FilterCard() {
  return (
      <F.Container>
        <img src={filter} alt="filtro"></img>
      </F.Container>
  )
}

export default FilterCard;
