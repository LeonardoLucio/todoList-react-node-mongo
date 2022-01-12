import React from 'react'
import * as F from './styles'

import filter from '../../assets/filter.png'

function FilterCard({ title, actived }) {
  return (
      <F.Container actived={actived}>
        <img src={filter} alt="filtro"></img>
        <span>{title}</span>
      </F.Container>
  )
}

export default FilterCard;
