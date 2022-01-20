import React from 'react'
import * as F from './styles'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.png'
import notification from '../../assets/notification.png'

function Header({lateCount, clickNotification}) {
  return (
    <F.Container>
      
      <F.LeftSide>
    
        <img src={logo} alt="logo"></img>
      </F.LeftSide>
      <F.RightSide>
        <Link to="/">INÍCIO</Link >
        <hr/>
        <Link to="/task">NOVA TAREFA</Link>
        <hr/>
        <Link to="/QrCode">SINCRONIZAR CELULAR</Link>
        <hr/>
        <button id="notification"><img src={notification} alt="notification" onClick={clickNotification}></img>
        <span>{lateCount}</span>
        </button>

      </F.RightSide>
    </F.Container>
  )
}

export default Header;
