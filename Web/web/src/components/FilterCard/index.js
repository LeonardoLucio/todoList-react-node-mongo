import React from 'react'
import * as F from './styles'

import filter from '../../assets/filter.png'

function FilterCard({ title }) {
  return (
      <F.Container>
        <img src={filter} alt="filtro"></img>
        <span>{title}</span>
      </F.Container>
  )
}

export default FilterCard;
