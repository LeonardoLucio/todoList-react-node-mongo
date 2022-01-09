import React from 'react'
import * as F from './styles'

import drewSmile from '../../assets/drewSmileIcon.png'
function Footer() {
    return(
        <F.Container>
            <span>"Drew - ainda bem que eu não sou voce"<img id="drewSmile"src={drewSmile}></img></span>
        </F.Container>
    )
}

export default Footer;