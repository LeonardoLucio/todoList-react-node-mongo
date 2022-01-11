import React from 'react'
import * as F from './style'

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';

function Home() {
  return (
  <F.Container>
  <Header/>

  <FilterCard/>
  
  <Footer/>
  </F.Container>
    )
}

export default Home;
