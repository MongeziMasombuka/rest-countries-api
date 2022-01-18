import React from 'react'
import {useGlobalContext} from '../context'


const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

function SearchForm() {
  const {setQuery}= useGlobalContext()
  const searchValue = React.useRef('')

  const searchName=()=>{
    setQuery(searchValue.current.value)
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
  }
  return (
    <section>
  <div className="container lg  m-auto p-4 lg:px-8 flex lg:flex-row flex-col lg:justify-between gap-8'">
      <form onSubmit={handleSubmit}>
        <input className='form-input mt-4 block w-full lg:w-[30rem] text-darkgray bg-white dark:bg-darkblue rounded shadow-sm border-none' type="text" id='name' ref={searchValue} onChange={searchName} placeholder='Seach for country...'/>
      </form>
      <form onSubmit={handleSubmit}>
        <div className="cursor-pointer p-4">
          <span>Filter by region?</span>
        </div>
        <ul className="relative p-4">
          {regions.map((region, index)=>{
            return(
              <li key={index} className="cursor-pointer" onClick={()=>{setQuery(region)
              }}>{region}</li>
            )
          })}
        </ul>
      </form>
    </div>
  </section>
  )
}

export default SearchForm
