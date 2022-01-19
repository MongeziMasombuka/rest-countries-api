import React, {useState, useEffect} from 'react'
import {useParams, Link ,useNavigate} from 'react-router-dom'
import Loading from '../components/Loading'
import {ImArrowLeft2} from 'react-icons/im'
import {useGlobalContext} from '../context'


function Detail() {
  const {name}= useParams()
  const [loading, setLoading] = useState(true)
  const [country, setCountry] = useState([])
    const {countries}=useGlobalContext();
    let navigate = useNavigate();
    let obj={}
    
    const borderName=()=>{
      countries.map((country)=>{
        const {name, alpha3Code}=country
        return obj[alpha3Code] = name
      })}
    borderName()

    

  useEffect(() => {
    async function getCountry(){
      setLoading(true)
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
    <main className='min-h-screen'>
      <h1>No Country to display</h1>
    </main>
  }
  const {topLevelDomain,borders,capital,currencies, flag,languages,nativeName,population,region,subregion}= country
  let currencyArr = []
  let languageArr = []

  const array = (titles ,array)=>{
    titles.map((title)=>{
               return array.push(title.name)
              })
  }  
  array(currencies, currencyArr)   
  array(languages, languageArr) 


  return (
  <main className='min-h-screen bg-verylightgray dark:bg-verydarkblue text-base '>
  <section className='container lg m-auto p-4 lg:p-8 '>
  
  <button onClick={()=>{
    navigate(-1)
  }} className='bg-white dark:bg-darkblue px-6 py-2 mb-16 shadow-md rounded flex items-center w-28 '><ImArrowLeft2 className='mr-2 '/>Back</button>
  
      <article className='flex w-full flex-col lg:flex-row justify-between'>
        <figure className='flex-1'>
          <img src={flag} alt={name} className='lg:w-10/12'/>
        </figure>
        <section className='flex-1'>
        <h1 className='font-extrabold pt-10  pb-4 '>{name}</h1>
          <section className='flex flex-col lg:flex-row justify-between pb-8 '>
          <div className='pb-8'>
            <h3>Native Name: <span>{nativeName && nativeName}</span></h3>
            <h3>Population: <span>{population && population}</span></h3>
            <h3>Region: <span>{region && region}</span></h3>
            <h3>Sub Region: <span>{subregion && subregion}</span></h3>
            <h3>Capital: <span>{capital && capital}</span></h3>
          </div>
          <div>
            <h3>Top Level Domain: <span>{topLevelDomain && topLevelDomain.join(" ,")}</span></h3>
            <h3>Currencies: <span>{currencyArr && currencyArr.length > 1 ? currencyArr.join(' ,') : currencyArr}</span></h3>
            <h3>Langauges: <span>{languageArr.length > 1 ? languageArr.join(' ,') : languageArr}</span></h3>
          </div>
        </section>
        
        <h2>Border Countries:</h2> {borders && borders.map((border, index)=>{
            let countryName = obj[border]

            return (<Link to={`/details/${countryName}`} key={index}>
            <button className='bg-white dark:bg-darkblue px-6 py-1 m-1 shadow-md rounded font-light' >{countryName}</button> </Link>
              )
        }
        )}
        </section>
      </article>
  </section>
    </main>
  )
}

export default Detail
