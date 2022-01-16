import React from 'react'
import * as F from './styles'

import logo from '../../assets/logo.png'
import notification from '../../assets/notification.png'

function Header({lateCount}) {
  return (
    <F.Container>
      <F.LeftSide>
    
        <img src={logo} alt="logo"></img>
      </F.LeftSide>
      <F.RightSide>
        <a href="/">INÍCIO</a>
        <hr/>
        <a href="/task">NOVA TAREFA</a>
        <hr/>
        <a href="/QrCode">SINCRONIZAR CELULAR</a>
        <hr/>
        <a href="#" id="notification"><img src={notification} alt="notification"></img>
        <span>{lateCount}</span>
        </a>

      </F.RightSide>
    </F.Container>
  )
}

export default Header;
