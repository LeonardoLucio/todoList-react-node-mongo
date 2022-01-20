import {React, useState, useEffect }from 'react'
import * as F from './style'
import {Link} from 'react-router-dom';
import api from '../../services/api'

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard'

function Home() {

  const [filterActived, setFilterActived] = useState('all');
  const [task, setTasks] = useState([])
  const [lateCount, setLateCount] = useState();
  async function loadTasks(){
    await api.get(`/task/filter/${filterActived}/11:11:11:11:11:11`)
    .then(response =>{
      setTasks(response.data)
    })
  }
  async function lateVerify(){
    await api.get(`/task/filter/late/11:11:11:11:11:11`)
    .then(response =>{
      setLateCount(response.data.length)
    })
  }

  function Notification() {
    setFilterActived('late')
  }
  useEffect(() => {
    loadTasks();
    lateVerify();

  }, [filterActived])

  return (
  <F.Container>

  <Header lateCount={lateCount} clickNotification={Notification}/>

  <F.FilterArea>
    <button type="button" onClick={()=> setFilterActived("all")}>
    <FilterCard title="Todos" actived={filterActived === 'all'} />
    </button>
    <button type="button" onClick={()=> setFilterActived("today")}>
    <FilterCard title="Hoje" actived={filterActived === 'today'} />
    </button>
    <button type="button" onClick={()=> setFilterActived("week")}>
    <FilterCard title="Semana" actived={filterActived === 'week'} />
    </button>
    <button type="button" onClick={()=> setFilterActived("month")}>
    <FilterCard title="Mes" actived={filterActived === 'month'} />
    </button>
    <button type="button" onClick={()=> setFilterActived("year")}>
    <FilterCard title="Ano" actived={filterActived === 'year'} />
    </button>
  </F.FilterArea>
 
  <F.Title>
    <h3>{filterActived === 'late' ? 'TAREFAS ATRASADAS' : 'TAREFAS'}</h3>
  </F.Title>
  <F.Content>
  
  { 
    task.map(t => (
      <Link to={`/task/${t._id}`}>
      <TaskCard type={t.type} title={t.title} when={t.when} />
      </Link>
    ))
   
    }
  
  


  
  </F.Content>
  
  <Footer/>

  </F.Container>
    )
}

export default Home;
