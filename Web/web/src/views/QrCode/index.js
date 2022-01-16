import {React, useState, useEffect }from 'react'
import * as F from './style'

import api from '../../services/api'

import Header from '../../components/Header';
import Footer from '../../components/Footer';

function QrCode() {
  const [filterActived] = useState('all');
  const [lateCount, setLateCount] = useState();
  
  async function lateVerify(){
    await api.get(`/task/filter/late/11:11:11:11:11:11`)
    .then(response =>{
      setLateCount(response.data.length)
    })
  }
  useEffect(() => {
    
    lateVerify();

  }, [filterActived])

  return (
  <F.Container>

  <Header lateCount={lateCount}/>

  <Footer/>

  </F.Container>
    )
}

export default QrCode;
