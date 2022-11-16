import React from 'react'
import Header from '../components/Header-section/Header'
import Footer from '../components/Footer-section/footer'
import Nft from '../components/Nft-section/nft'
import Cards from '../components/Cards-section/cards'
import Search from '../components/Search-section/search'

function AirBnb() {
  return (
    <>
      <Header/>
      <Search/>
      <Cards/>
      <Nft/>
      <Footer/>
      
    </>
  )
}

export default AirBnb