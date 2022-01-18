import {React, useState, useEffect }from 'react'
import * as F from './style'

import api from '../../services/api'

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import iconFilter from '../../assets/healthicons_default.png'

function Task() {
  const [lateCount, setLateCount] = useState();
  
  async function lateVerify(){
    await api.get(`/task/filter/late/11:11:11:11:11:11`)
    .then(response =>{
      setLateCount(response.data.length)
    })
  }
  useEffect(() => {
    
    lateVerify();

  }, [])

  return (
  <F.Container>

  <Header lateCount={lateCount}/>
  <F.Form>
      <F.Type>
            <button type="button"><img src={iconFilter} alt='Tipo de tarefa'></img></button>
      </F.Type>
      <F.Content>
          <F.Input>
            <span>Titulo</span>
            <input type="text" placeholder='Titulo da tarefa'></input>
          </F.Input>
          <F.TextArea>
          <span>Descrição</span>
            <textarea></textarea>
          </F.TextArea>
          <F.Input>
            <span>Data</span>
            <input type="date" placeholder='Titulo da tarefa'></input>
          </F.Input>
          <F.Input>
            <span>Hora</span>
            <input type="time" placeholder='Titulo da tarefa'></input>
          </F.Input>
          <F.CheckBox>
            <input type="checkbox"/>
            <span>CONCLUIDO</span>
            <button type="button">EXCLUIR</button>
          </F.CheckBox>
          <F.SaveTask>
          <button type="button">SALVAR</button>
          </F.SaveTask>
      </F.Content>
  </F.Form>
  <Footer/>

  </F.Container>
    )
}

export default Task;
