import React from 'react'
import {useNavigate } from 'react-router-dom'

const Navbar = () => {

    const Navigate = useNavigate();

  return (
    <>
        <nav className='bg-slate-200 fixed top-0 z-10 w-full'>
            <ul className='list-none'>
                <li onClick={()=>{Navigate('/')}} className='cursor-pointer'><img src="/images/BhagvadGita.png" className=' w-28' alt="logo" /></li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar