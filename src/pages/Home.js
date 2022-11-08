import React from 'react'
import Carousel from '../components/Carousel'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'
export default function Home() {
  return (
    <main>
      <Carousel/>
      <SearchForm />
      <CocktailList />
    </main>
  )
}
