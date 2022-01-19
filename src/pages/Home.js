import React from 'react'
import SearchForm from '../components/SearchForm'
import Countries from '../components/Countries'

function Home() {
  return (
    <main className='min-h-screen bg-verylightgray dark:bg-verydarkblue '>
      <SearchForm/>
      <Countries className="text-sm"/>
    </main>
  )
}

export default Home
