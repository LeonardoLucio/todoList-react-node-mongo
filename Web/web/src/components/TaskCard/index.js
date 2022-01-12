import React from 'react'
import * as F from './styles'

import iconDefault from '../../assets/healthicons_default.png'

function TaskCard() {
    return(
        <F.Container>
            
          <F.TopCard>
        <img src={iconDefault} alt="tarefa padrão"/>
        <h1>Titulo da tarefa</h1>
          </F.TopCard>
          <F.BottomCard>
        <strong>17/10/2020</strong>
        <span>10:00</span>
          </F.BottomCard>
        </F.Container>
    )
}

export default TaskCard;