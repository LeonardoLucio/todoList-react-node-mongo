import React from 'react'
import * as F from './style'

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';

function Home() {
  return (
  <F.Container>
  <Header/>

  <F.FilterArea>
    <FilterCard title="Todos"/>
    <FilterCard title="Hoje"/>
    <FilterCard title="Semana"/>
    <FilterCard title="Mes"/>
    <FilterCard title="Ano"/>
  </F.FilterArea>

  <Footer/>
  </F.Container>
    )
}

export default Home;
