import React from 'react'
import {useGlobalContext} from '../context'
import {FaSearch} from 'react-icons/fa'
import {GoChevronDown} from 'react-icons/go'


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
  <div className="container lg h-44 lg:h-auto  m-auto p-4 lg:px-8 flex lg:flex-row flex-col justify-between gap-8'">
      <form onSubmit={handleSubmit} className='flex items-center px-8 w-full lg:w-[30rem] text-darkgray bg-white dark:bg-darkblue rounded shadow-sm border-none'>
      <FaSearch />
        <input className='bg-transparent w-full h-full p-4 px-8 focus:outline-none'  type="text" id='name' ref={searchValue} onChange={searchName} placeholder='Seach for country...'/>
      </form>
      <form onSubmit={handleSubmit} className='dropdown relative bg-white dark:bg-darkblue rounded shadow-sm w-48'>
        <div className="cursor-pointer p-4 flex justify-between items-center">
          <span>Filter by region? </span><GoChevronDown />
        </div>
        <ul className="dropdown-list  bg-white dark:bg-darkblue rounded shadow-sm  w-48">
          {regions.map((region, index)=>{
            return(
              <li key={index} className=" p-4 cursor-pointer hover:bg-verylightgray hover:dark:bg-verydarkblue" onClick={()=>{setQuery(region)
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
