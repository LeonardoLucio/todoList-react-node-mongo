import * as F from './styles'
import { format } from 'date-fns'
import iconDefault from '../../assets/healthicons_default.png'
import { React ,useMemo } from 'react'

function TaskCard({ type, title, when}) {
  const date = useMemo(() => format(new Date(when), 'dd/MM/yyyy'))
  const hour = useMemo(() => format(new Date(when), 'HH:mm'))

    return(
        <F.Container>
            
          <F.TopCard>
        <img src={iconDefault} alt="tarefa padrão"/>
        <h1>{title}</h1>
          </F.TopCard>
          <F.BottomCard>
        <strong>{date}</strong>
        <span>{hour}</span>
          </F.BottomCard>
        </F.Container>
    )
}

export default TaskCard;