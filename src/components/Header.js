import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='bg-white dark:bg-darkblue shadow z-10 relative'>
      <nav className="container flex lg justify-between p-4 lg:p-8 items-center m-auto">
      <Link to="/">

    <h1>Where in the world?</h1>
      </Link>
    <div  className='toggle flex items-center justify-between w-24'>
      {/* {toggle ? <BsMoonFill/> : <BsMoon/>} Dark mode */}Dark mode
    </div>
    {/* <div onClick={()=>DarkModeToggle()} className='toggle flex items-center justify-between w-24'>
      {toggle ? <BsMoonFill/> : <BsMoon/>} Dark mode
    </div> */}
  </nav>
</header>
  )
}

export default Header
