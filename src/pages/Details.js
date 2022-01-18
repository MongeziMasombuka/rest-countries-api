import React, {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import Loading from '../components/Loading'


function Detail() {
  const {name}= useParams()
  const [loading, setLoading] = useState(true)
  const [country, setCountry] = useState([])

  useEffect(() => {
    async function getCountry(){
      try {
        const response = await fetch(`https://restcountries.com/v2/name/${name}?fullText=true`)
        const country = await response.json()
        if(country[0]){
          setCountry(country[0])
        }else{
          setCountry([])
        }
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    getCountry()
  }, [name])
  if(loading){
    return <Loading />
  }
  if(!country){
    <main>
      <h1>No Country to display</h1>
    </main>
  }
  const {topLevelDomain,borders,capital,currencies, flag,languages,nativeName,population,region,subregion}= country
  return (
    <main>
    {console.log(country)}
      <article>
        <figure>
          <img src={flag} alt={name} />
        </figure>
        <section>
        <h1>{name}</h1>
          <div>
            <h3>Native Name: <span>{nativeName}</span></h3>
            <h3>Population: <span>{population}</span></h3>
            <h3>Region: <span>{region}</span></h3>
            <h3>Sub Region: <span>{subregion}</span></h3>
            <h3>Capital: <span>{capital}</span></h3>
          </div>
          {/* <div>
            <h3>Top Level Domain: <span>{topLevelDomain}</span></h3>
            <h3>Currencies: <span>{currencies}</span></h3>
            <h3>Langauges: <span>{languages}</span></h3>
          </div> */}
        <h2>Border Countries:</h2>
        </section>
      </article>
    </main>
  )
}

export default Detail
