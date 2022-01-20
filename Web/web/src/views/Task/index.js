import {React, useState, useEffect }from 'react'
import * as F from './style'
import { useParams } from 'react-router-dom';
import api from '../../services/api'

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import iconFilter from '../../assets/healthicons_default.png'

function Task() {
  const params = useParams();
  const [lateCount, setLateCount] = useState();
  const [id, setId] = useState();
  const [done, setDone] = useState(false);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [hour, setHour] = useState();
  const [macaddress, setMacaddress] = useState('11:11:11:11:11:11');

  
  async function lateVerify(){
    await api.get(`/task/filter/late/11:11:11:11:11:11`)
    .then(response =>{
      setLateCount(response.data.length)
    })
  }

  async function LoadTaskDetails() {
    await api.get(`/task/${params.id}`)
    .then(response => {
      setTitle(response.data.title)
      setDescription(response.data.description)
      setDate(new Date(response.data.when))
      setHour(new Date(response.data.when))
    })
  }


  async function save(){
    await api.post(`/task`, {
      macaddress,
      title,
      description,
      when: `${date}T${hour}:00.000`

    }).then(() => alert('TAREFA CADASTRADA COM SUCESSO!')
    )
  
  }
 
  useEffect(() => {
    
    lateVerify();
    LoadTaskDetails()
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
            <input type="text" placeholder='Titulo da tarefa...' 
              onChange={e => setTitle(e.target.value)} value={title}/>
          </F.Input>
          <F.TextArea>
          <span>Descrição</span>
            <textarea placeholder='Descrição da tarefa...' 
             onChange={e => setDescription(e.target.value)} value={description}></textarea>
          </F.TextArea>
          <F.Input>
            <span>Data</span>
            <input type="date" onChange={e => setDate(e.target.value)} value={date}/>
          </F.Input>
          <F.Input>
            <span>Hora</span>
            <input type="time" onChange={e => setHour(e.target.value)} value={hour}/>
          </F.Input>
          <F.CheckBox>
            <input type="checkbox" checked={done} onChange={() => setDone(!done)}/>
            <span>CONCLUIDO</span>
            <button type="button">EXCLUIR</button>
          </F.CheckBox>
          <F.SaveTask>
          <button type="button" onClick={save}>SALVAR</button>
          </F.SaveTask>
      </F.Content>
  </F.Form>
  <Footer/>

  </F.Container>
    )
}

export default Task;
