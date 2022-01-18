import React from 'react'
import SearchForm from '../components/SearchForm'
import Countries from '../components/Countries'

function Home() {
  return (
    <main className='bg-verylightgray dark:bg-verydarkblue'>
      <SearchForm/>
      <Countries/>
    </main>
  )
}

export default Home
