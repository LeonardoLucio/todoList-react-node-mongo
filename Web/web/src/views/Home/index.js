import {React, useState }from 'react'
import * as F from './style'

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard'

function Home() {
  const [filterActived, setFilterActived] = useState('today');

  return (
  <F.Container>

  <Header/>

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
 
  <F.Content>
  
  <TaskCard/>
  <TaskCard/>
  <TaskCard/>
  <TaskCard/>
  <TaskCard/>
  
  </F.Content>
  
  <Footer/>

  </F.Container>
    )
}

export default Home;
