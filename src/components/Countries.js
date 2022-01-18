import React from 'react'
import Country from './Country'
import Loading from './Loading'
import Error from '../pages/Error'
import {useGlobalContext} from '../context'


function Countries() {
  const {countries, loading}=useGlobalContext();
  if(loading){
    return <Loading/> 
  }
  if(countries.length<1 ){
    return <h1>no country matched your search criteria</h1>
  }
  if(!Array.isArray(countries)){
    return (
    <main className='container lg m-auto px-8'>
    <strong>{countries.status} </strong>
    <h1>Country {countries.message}</h1>

    </main>
  )
  }
  if(countries && Array.isArray(countries) && Array.length ){
    return (
    <>
    <section >
    <main className='container lg m-auto py-8 md:py-4 lg:py-4 px-16 md:px-4 g:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16'>
      {countries.map((country)=>{
      return <Country key={country.numericCode} {...country} />
      })      }
      </main>
    </section>
    </>
  )
}


}

export default Countries
