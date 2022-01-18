import React from 'react'
import { Link } from 'react-router-dom'

function Country({numericCode ,name, population, region,capital,flag} ) {
      return(
        <article key={numericCode} className='rounded-md overflow-hidden bg-white dark:bg-darkblue shadow-sm' >
        <Link to={`/details/${name}`}>
        <img className='w-full' src={flag} alt={name} />
        <div className='px-6 py-8 '>
          <h2>{name}</h2>
          <h3>Population: <span>{population}</span></h3>
          <h3>Region: <span>{region}</span></h3>
          <h3>Capital: <span>{capital}</span></h3>
        </div>
        </Link>
        </article>
      )
}

export default Country
