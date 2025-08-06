import React, {useState, useContext, useEffect, Children
} from 'react'
import {useCallback} from 'react'

let url ='https://restcountries.com/v2/all?fields=name,capital,region,subregion,population'

const AppContext = React.createContext()

const AppProvider = ({children})=>{
  const [loading, setLoading] = useState(true);
  const [query,setQuery] = useState('')
  const [countries, setCountries]=useState([])

  if(query === 'all' || query === ''){
    url = 'https://restcountries.com/v2/all?fields=name,capital,region,subregion,population'
  }else if(query === 'Africa'||  query === 'Americas'|| query === 'Asia'|| query === 'Europe'|| query === 'Oceania'){
    url =`https://restcountries.com/v2/region/${query}`
  }else{  
    url = `https://restcountries.com/v2/name/${query}`
    }
    const fetchCountries = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const countries = await response.json()
      setLoading(false)
      setCountries(countries)  
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    fetchCountries()
  }, [query])
  return (
    <AppContext.Provider
    value={
      {loading, countries, setQuery,}
    }
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext= ()=>{
  return useContext(AppContext)
}

export {AppProvider, AppContext}
