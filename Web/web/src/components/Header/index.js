import React from 'react'
import * as F from './styles'

import logo from '../../assets/logo.png'
import notification from '../../assets/notification.png'

function Header() {
  return (
    <F.Container>
      <F.LeftSide>
        <img src={logo} alt="logo"></img>
      </F.LeftSide>
      <F.RightSide>
        <a href="#">INÍCIO</a>
        <hr/>
        <a href="#">NOVA TAREFA</a>
        <hr/>
        <a href="#">SINCRONIZAR CELULAR</a>
        <hr/>
        <img src={notification} alt="notification"></img>
      </F.RightSide>
    </F.Container>
  )
}

export default Header;
